module.exports = {
  name: 'echo',
  description: 'Echo back your message',
  execute: async (message, args, client, contact) => {
    if (args.length === 0) {
      message.reply('❌ Please provide text to echo. Usage: !echo [text]');
      return;
    }
    
    const echoText = args.join(' ');
    message.reply(`🔊 ${echoText}`);
  }
};