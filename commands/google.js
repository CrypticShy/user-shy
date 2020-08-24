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
  var search = message.content.slice(8).split(' ').join('+');

  message.delete(1)

  if(search == "") {
    message.channel.send({embed: {
      "color": red,
        "author": {
          "name": "Error",
          "icon_url": client.user.avatarURL
        },
        "fields": [
          {
            "name": "No search defined",
            "value": "Usage: " + settings.prefix + commandname + " search"
          }]
        }
      })
  } else {
  message.channel.send({embed: {
    "color": green,
    "author": {
      "name": "Google",
      "icon_url": client.user.avatarURL
    },
      fields: [{
        name: "Link:",
        value: "http://lmgtfy.com/?q="+search
      }
    ],
      timestamp: new Date(),
    }
  });
}
}