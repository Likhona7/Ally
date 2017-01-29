//  Setup ally server
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var nlp = require("../natural/server.nlp.js");
var weather = require('weather-js');
var fStream = require("fs");
var sleeper = require("sleep");


/*
** Request Weather From Darksky
*/

var messageToLog = "";
weather.find({search: '-33.9077974, 18.4227503', degreeType: 'C'}, function(err, result)
{
  console.log("IN THE LOOP\n");
  if(err) console.log(err);
  messageToLog = JSON.stringify(result, null, 2);
  sleeper.sleep(5);
});

//  Define user message event handler
io.on("connection", function(socket) {
  console.log("+++ New user connected.");
  console.log("\tUserID:\t", socket.id);

  socket.on("user_message", function(msg) {
    console.log("||| Start of \"socket.on('user_message')\" in",
        "\"/src/socket/server.socket.js\" |||\n\n");
    fStream.writeFileSync('src/logger/weather.json', messageToLog, function(err)
    {
      if(err) throw err;
    });
    console.log(">>> New message from user to server.");
    console.log("From UserID:\t", msg.id);
    console.log("Message:\t", msg.message);
    console.log("");
    console.log("");
    var response = "unknown";

    if (!using_options)
    {
      response = nlp.processMessage(msg);

      if (response === "unknown")
      {
        using_options = true;
      }
    }
    else
    {
      if (!options_choice)
      {
        options_choice = msg.message;

        if (isNaN(options_choice))
        {
          response = "You've selected an invalid option. Could you please " +
            "ensure that you've entered the number correctly? :)";
          options_choice = null;
        }
        else
        {
          if (options_choice == 1)
          {
            response = "show_accounts";
          }
          else if (options_choice <= 4)
          {
            response = "handle_option:" + msg.message;
            using_options = false;
          }
          else
          {
            response = "You've selected an invalid option. Could you please " +
              "ensure that you've entered the number correctly? :)";
            options_choice = null;
          }
        }
      }
      else if (!account)
      {
        account = parse_options.getAccountName(msg.message);
        if (!account)
        {
          response = "Invalid Account Option Selected. Please ensure you " +
            "entered the correct number.";
        }
        else
        {
          response = "show_data:" + account;
        }
      }
      else if (!data)
      {
        data = parse_options.getDataRef(msg.message);
        if (!data)
        {
          response = "Invalid Option Selected. Please ensure you entered " +
            "the correct number.";
        }
      }

      if (account && data)
      {
        msg.message = account + " " + data;
        response = nlp.processMessage(msg);

        if (response === "unknown")
        {
          response = "I'm so sorry, but I'm having some trouble accessing the "
            + "info you're looking for. Maybe try calling our CSC at " +
            "0860 000 654";
        }

        using_options = false;
        options_choice = null;
        account = null;
        data = null;
      }
    }

    console.log("<<< New message from server to user.");
    console.log("To UserID:\t", msg.id);
    console.log("Message:\t", response);
    console.log("");
    console.log("");

    io.to(msg.id).emit("server_message", response);
    console.log("%%% Message sent. %%%");
    console.log("");
    console.log("");
  });
});

/*
    Listen for new events and export the listen function to be used
    when initialising the script.
*/
module.exports = {
  listen: function()
  {
    http.listen("3001", function()
    {
      console.log("Listening for chats at: localhost:3001");
      console.log("");
      console.log("");
    });
  }
};
