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
  let target = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  
var username = target.user.username
var avatar = target.user.avatarURL
console.log("Disguising Username");  message.member.setNickname(username).catch( err => message.channel.send({embed: {
  color: red,
      fields: [{
        name: "Api Error",
        value: "Discord Api Error for: Username"
      }
    ],
      timestamp: new Date(),
}}))
console.log("Disguising Avatar"); client.user.setAvatar(avatar).catch( err => message.channel.send({embed: {
  color: red,
      fields: [{
        name: "Api Cooldown",
        value: "Discord Api 2 Hour Cooldown for: Avatar"
      }
    ],
      timestamp: new Date(),
}}))
}