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
  const fs = require("fs");
  const settings = JSON.parse(fs.readFileSync("./files/settings.json", "utf8"));
  var name = settings.name
  var status = settings.status
  var avatar = settings.avatar
  var prefix = settings.prefix
  var list = client.guilds.array().join(', ');
  var currentdate = new Date();
  var date =  currentdate.getMonth() + "m, "+currentdate.getDay() + "d";
  var Folder = './cmd/';
  var serverid = message.guild.id;
  var guild = client.guilds.get(serverid);
  var servername = guild.name;
  var members = guild.members.filter(member => !member.user.bot).size;
  
message.delete(1)
message.channel.send
({embed: {
  author: {
    name: "Info",
    icon_url: client.user.avatarURL
  },
      fields: [{
        name: "Username",
        value: ""+name+""
      },{
        name: "Status",
        value: ""+status+""
      },{
        name: "Prefix",
        value: ""+prefix+""
      },{
        name: "Active In",
        value: ""+list+""
      },{
        name: "Current server",
        value: ""+servername+""
      },{
        name: "Total Members in current server",
        value: ""+members+""
      }
    ],
      timestamp: new Date(),
}});
}
