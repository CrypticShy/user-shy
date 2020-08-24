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
  let wmember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  let warns = JSON.parse(fs.readFileSync("./files/warnings.json", "utf8"));
  let warnlvl = warns[wmember.id].warns;

  message.delete(1)

message.channel.send({embed: {
  color: green,
      fields: [{
       name: "Warns",
       value: wmember + " Has: " + warnlvl + " warning(s)"
      }
    ],
      timestamp: new Date(),
}});
}