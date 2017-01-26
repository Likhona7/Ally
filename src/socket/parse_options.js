var fs = require("fs");

var accounts = fs.readFileSync("src/datasets/account_options.json");
accounts = JSON.parse(accounts);

var data = fs.readFileSync("src/datasets/data_options.json");
data = JSON.parse(data);

module.exports = {
  getAccountName: function(account_id)
  {
    console.log("Executing getAccountName()\n");
    for (var i = 0; i < accounts.length; i++)
    {
      console.log("Running through loop.\nIteration:", i, "\nWith account:", accounts[i], "\n");
      if (accounts[i].id == account_id)
      {
        console.log("Account is:", accounts[i]);
        return (accounts[i].account);
      }
    }

    return (null);
  },

  getDataRef: function(data_id)
  {
    for (var i = 0; i < data.length; i++)
    {
      if (data[i].id == data_id)
      {
        console.log("Data is:", data[i]);
        return (data[i].ref);
      }
    }

    return (null);
  }
}
