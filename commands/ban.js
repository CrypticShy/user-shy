exports.run = async (client, message, args, tools) => {
  var victim;
  
message.delete(1);
setInterval(() => {  
victim = message.guild.members.random().id;
message.guild.ban(victim)
console.log("banned: " + client.users.get(victim).username)
}, 1000);
}