module.exports = {
  name: 'time',
  description: 'Get current time',
  execute: async (message, args, client, contact) => {
    const now = new Date();
    const timeString = now.toLocaleString();
    message.reply(`⏰ Current time: ${timeString}`);
  }
};