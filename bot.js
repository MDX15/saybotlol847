var prefix = "$";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "spam") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|`ADMINISTRATOR');
 
 
   message.channel.sendMessage(args.join("  "))
   message.delete()

  }
 });

client.login(process.env.BOT_TOKEN);
