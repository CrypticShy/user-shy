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


  message.delete(1)
  var search = message.content.slice(8).split(' ').join('+');
  message.channel.send({embed: {
  color: green,
      fields: [{
        name: "Name",
        value: settings.name
      },{
        name: "Prefix",
        value: settings.prefix
      },{
        name: "Avatar",
        value: settings.avatar
      },{
        name: "Activity Type",
        value: settings.atype
      },{
        name: "Activity Name",
        value: settings.aname
      },{
        name: "Status",
        value: settings.status
      }
    ],
      timestamp: new Date(),
}});

}