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

 var name = args.slice(1).join(' '); //1
 var type = args.slice(0, 1, 2).join("") //2

 var newsettings = {
  "name": settings.name,
  "prefix": settings.prefix,
  "avatar": settings.avatar,
  "atype": type,
  "aname": name,
  "status": settings.status
}

fs.writeFileSync('./files/settings.json', JSON.stringify(newsettings));
JSON.parse(fs.readFileSync("./files/settings.json", "utf8"));
client.user.setActivity(settings.aname, { type: settings.atype })
    message.channel.send({embed: {
    color: green,
        fields: [{
          name: "Activity set",
          value: type+" "+ name + "\n \n" + "Making changes"
        }
      ],
        timestamp: new Date(),
  }}).then(function(){process.exit(1);})
  

}