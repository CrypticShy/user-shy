exports.run = async (client, message, args, tools) => {
var nickname = message.content.slice(5).split(' ').join(' ');
message.delete(1);

client.user.setNickname(nickname)
}