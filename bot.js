client.on('message',function(message) {
	let prefix = "m#";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});

client.login(process.env.BOT_TOKEN);
