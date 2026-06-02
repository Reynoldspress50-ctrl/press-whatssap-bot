module.exports = {
  name: 'ping',
  description: 'Check bot response time',
  execute: async (message, args, client, contact) => {
    const timestamp = Date.now();
    const sentMessage = await message.reply('🏓 Pong!');
    const responseTime = Date.now() - timestamp;
    sentMessage.edit(`🏓 Pong! Response time: ${responseTime}ms`);
  }
};