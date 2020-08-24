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
  const paste = require('../files/paste.json')

  message.delete(1);

    // If nothing is specified
    if (!args[0]) return this.send(message, 'Not found')

    if (Object.keys(paste).includes(args[0].toLowerCase())) {
      let reply = paste[args[0].toLowerCase()]
      // Check if the paste chosen is an array
      if (Array.isArray(reply)) {
        reply = reply[~~(Math.random() * reply.length)]
      }
      message.channel.send(reply)
    } else return this.send(message, 'Not found.')
}