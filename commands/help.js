module.exports = {
  name: 'help',
  description: 'Display all available commands',
  execute: async (message, args, client, contact) => {
    const helpText = `
📋 **Available Commands:**

!help - Show this message
!ping - Check bot response time
!time - Get current time
!joke - Get a random joke
!weather [city] - Get weather information
!quote - Get a random quote
!echo [text] - Echo back your message

💡 Type !command to use any command
    `;
    message.reply(helpText);
  }
};