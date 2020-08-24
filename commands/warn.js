exports.run = async (client, message, args, tools) => {
  var c1 = process.env.BOTCMD //bot commands
  var c2 = process.env.LOGS //logs
  var c3 = process.env.GENERAL //general
  var red = process.env.RED
  var blue = process.env.BLUE
  var green = process.env.GREEN
  var yellow = process.env.YELLOW
  var pink = process.env.PINK
  var purple = process.env.PURPLE
  var aqua = process.env.AQUA
  var orange = process.env.ORANGE
  var white = process.env.WHITE
  var black = process.env.BLACK
  var color = blue
  const fs = require("fs")
  const ms = require("ms")
  let warns = JSON.parse(fs.readFileSync("./files/warnings.json", "utf8"));
  const settings = JSON.parse(fs.readFileSync("./files/settings.json", "utf8"));
  
  message.delete(1)

let wmember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
let reason = args.slice(1).join(' ');
if(!reason) reason = "no reason";

try {
if(!warns[wmember.id]) warns[wmember.id] = {
 warns: 0
};

warns[wmember.id].warns++;

    fs.writeFile("./files/warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log (err);
      else console.log("Sucessfully warned" + wmember)
  });
}  
catch(err) {
var path = require('path');
var commandname = path.basename(__filename.slice(0, -3));
message.channel.send({embed: {
  color: red,
      fields: [{
       name: "Usage:",
       value: settings.prefix + commandname + " @user Reason"
      }
    ],
      timestamp: new Date(),
}});
return;
}
message.channel.send({embed: {
  color: green,
      fields: [{
       name: "Warned User",
       value: wmember + " Has been warned"
      },{
       name: "Information",
       value: "Reason: " + reason
      }
    ],
      timestamp: new Date(),
}}); 
}