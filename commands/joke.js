const jokes = [
  'Why don\'t scientists trust atoms? Because they make up everything!',
  'Why did the scarecrow win an award? He was outstanding in his field!',
  'I told my computer I needed a break, and now it won\'t stop sending me Kit-Kat ads.',
  'Why don\'t eggs tell jokes? They\'d crack each other up!',
  'What do you call a fake noodle? An impasta!',
  'Why did the math book look so sad? Because it had too many problems!',
  'I\'m reading a book about anti-gravity. It\'s impossible to put down!',
  'Why don\'t skeletons fight each other? They don\'t have the guts!',
  'What did the ocean say to the beach? Nothing, it just waved!',
  'Why did the coffee file a police report? It got mugged!'
];

module.exports = {
  name: 'joke',
  description: 'Get a random joke',
  execute: async (message, args, client, contact) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    message.reply(`😄 ${randomJoke}`);
  }
};