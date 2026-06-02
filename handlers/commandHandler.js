const commands = {
  'help': require('./commands/help'),
  'time': require('./commands/time'),
  'ping': require('./commands/ping'),
  'joke': require('./commands/joke'),
  'weather': require('./commands/weather'),
  'quote': require('./commands/quote'),
  'echo': require('./commands/echo'),
};

const handleCommand = async (client, message, contact) => {
  const args = message.body.slice(1).split(' ');
  const commandName = args[0].toLowerCase();
  const commandArgs = args.slice(1);

  if (commands[commandName]) {
    try {
      await commands[commandName].execute(message, commandArgs, client, contact);
    } catch (error) {
      console.error(`Error executing command ${commandName}:`, error);
      message.reply(`❌ Error executing command: ${error.message}`);
    }
  } else {
    message.reply(`❓ Unknown command: ${commandName}. Type !help for available commands.`);
  }
};

module.exports = { handleCommand };