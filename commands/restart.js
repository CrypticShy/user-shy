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
  var time =  new Date()
  
message.channel.send({embed: {
      "color": color,
      fields: [{
        name: "Restarting",
        value: "This will take 2-3 seconds"
      }],
      timestamp: time, 
}})
message.delete(1)
  process.exit(1)
  
}