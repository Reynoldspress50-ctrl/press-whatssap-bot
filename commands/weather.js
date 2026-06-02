module.exports = {
  name: 'weather',
  description: 'Get weather information for a city',
  execute: async (message, args, client, contact) => {
    if (args.length === 0) {
      message.reply('❌ Please provide a city name. Usage: !weather [city]');
      return;
    }
    
    const city = args.join(' ');
    // This is a mock response. In production, integrate with a real weather API
    message.reply(`🌤️ Weather for ${city}:\n\nNote: Weather API integration coming soon!\nPlease add your own API key to get real weather data.`);
  }
};