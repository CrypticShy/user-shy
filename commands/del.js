exports.run = async (client, message, args, tools) => {
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
  
  
  
  message.delete(1)
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 1 || deleteCount > 1000)
      return message.channel.send({embed: {
        color: red,
    "fields": [
      {
        "name": process.env.PREFIX + "del = deletes messages",
        "value": "Usage: " + process.env.PREFIX + "del <amount>"
      }],
      timestamp: new Date(),
}});
    let count = parseInt(args[0]) || 1;
    const messages = await message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id });
    await Promise.all(
    messages.map(m => m.delete())
    );
    const deleted = messages.size;
}