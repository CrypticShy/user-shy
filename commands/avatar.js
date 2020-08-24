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

 var avatar = args.join(' '); //1

 var newname = {
  "name": settings.name,
  "prefix": settings.prefix,
  "avatar": avatar,
  "atype": settings.atype,
  "aname": settings.aname,
  "status": settings.status
}

fs.writeFileSync('./files/settings.json', JSON.stringify(newname));
JSON.parse(fs.readFileSync("./files/settings.json", "utf8"));
  message.channel.send({embed: {
  color: green,
      fields: [{
        name: "Avatar set",
        value: avatar + "\n \n" + "Making changes"
      }
    ],
      timestamp: new Date(),
}}).then(function(){process.exit(1);})

}