  const Discord = require('discord.js');
  const client = new Discord.Client();
  const guildNames = client.guilds.map(g => g.name).join("\n")
  const express = require('express');
  const fs = require("fs");
  const http = require("http");
  const app = express();
  const settings = JSON.parse(fs.readFileSync("./files/settings.json", "utf8"));
  const directories = './commands/'
  
  var newname = {
  "name": settings.name,
  "prefix": settings.prefix,
  "avatar": settings.avatar,
  "atype": settings.atype,
  "aname": settings.aname,
  "status": settings.status
}; JSON.parse(fs.readFileSync("./files/settings.json", "utf8"));

  http.get(process.env.HAPP);
  app.listen(process.env.PORT)

client.on('ready', async => {{
console.log("v---Updating-Bot----v")  
console.log("Updating Settings"); fs.writeFileSync('./files/settings.json', JSON.stringify(newname))
console.log("Updating Username"); client.user.setUsername(settings.name).catch(err => console.error("> Changing username too fast!"))
console.log("Updating Avatar"); client.user.setAvatar(settings.avatar).catch(err => console.error("> Changing avatar too fast!"))
console.log("Updating Activity"); client.user.setActivity(settings.aname, { type: settings.atype })
console.log("Updating Status"); client.user.setStatus(settings.status)
console.log("^---Updating-Bot----^")

console.log(" \n" + "v-------Bot-Settings-------v")
console.log("Username: " + settings.name);
console.log("Status: " + settings.status);
console.log("Prefix: "+ settings.prefix);
console.log("Active in: " + client.guilds.array().join(', '));
console.log("^-------Bot-Settings-------^");
  
}})

//COMMAND HANDLER
{
  client.on("message", async (message) => {
      if(message.author != client.user) return;
      let msg = message.content.toUpperCase();
      let args = message.content.slice(settings.prefix.length).trim().split(' ');
      let cmd = args.shift().toLowerCase();
      if(!msg.startsWith(settings.prefix)) return;
      let commandFile = require(`./commands/${cmd}.js`)
      commandFile.run(client, message, args);
  });
  }
  
  client.on("message", async (message) => {
    if(message.author != client.user) return;
    if(message.content.startsWith("!")) {
      var emote =  message.content.slice(1).trim().split(' ');
      message.edit(":"+emote+":")
    }
  } );


  {
    fs.readdir(directories, '', (err, files) => {
      if (err)
      console.error("There was an error");
      let jsfiles = files.filter(f => f.split('.').pop() === 'js');
      if (jsfiles.length <= 0) { console.log('No commands to load!')};
    });
   }  
client.login(process.env.TOKEN) 