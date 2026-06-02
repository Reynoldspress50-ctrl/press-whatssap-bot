module.exports = {
  name: 'quote',
  description: 'Get a random quote',
  execute: async (message, args, client, contact) => {
    const quotes = [
      '"The only way to do great work is to love what you do." - Steve Jobs',
      '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
      '"Life is what happens when you\'re busy making other plans." - John Lennon',
      '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
      '"It is during our darkest moments that we must focus to see the light." - Aristotle',
      '"The only impossible journey is the one you never begin." - Tony Robbins',
      '"Success is not final, failure is not fatal." - Winston Churchill',
      '"You miss 100% of the shots you don\'t take." - Wayne Gretzky'
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    message.reply(`✨ ${randomQuote}`);
  }
};