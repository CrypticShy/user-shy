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
  var path = require('path');
  var commandname = path.basename(__filename.slice(0, -3));

  var user = args.slice(0, 1, 2).join("") //1
  var user2 = args.slice(1, 2).join(' '); //2
  var amount = Math.floor(Math.random() * 101); //Love amount\

  message.delete(1)


  if (user2 == "") {
    message.channel.send({embed: {
      "color": red,
        "author": {
          "name": "Error",
          "icon_url": client.user.avatarURL
        },
        "fields": [
          {
            "name": "Define 2 users",
            "value": "Usage: " + settings.prefix + commandname + " name1 name2"
          }]
        }
      })
  } else {
    message.channel.send({embed: {
    "color": pink,
      "fields": [
        {
          "name": ":heart: ("+amount+"%)",
          "value": user + " & " + user2
        }]
      }
    })
  }
  }