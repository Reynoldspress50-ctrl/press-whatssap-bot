# 🤖 Press WhatsApp Bot

A feature-rich WhatsApp bot built with Node.js using the `whatsapp-web.js` library.

## 📋 Features

- 🎯 **Command System** - Easy-to-use command prefix system (`!command`)
- 📊 **Logging System** - Automatic message logging with daily files
- 🚦 **Rate Limiting** - Built-in rate limiting to prevent spam
- 💬 **Multiple Commands** - Help, Ping, Time, Jokes, Quotes, Echo, Weather
- 👥 **Group Support** - Works in both direct messages and group chats
- 🛡️ **Error Handling** - Comprehensive error handling and logging
- 🔄 **Auto-reload** - Development mode with nodemon

## 📋 Requirements

- Node.js (v14 or higher)
- npm or yarn
- WhatsApp account

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Reynoldspress50-ctrl/press-whatssap-bot.git
cd press-whatssap-bot
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the bot:**
```bash
npm start
```

## 🔐 How to Use

1. Run `npm start` (or `npm run dev` for development)
2. A QR code will appear in your terminal
3. Open WhatsApp on your phone and go to **Settings → Linked Devices → Link a Device**
4. Scan the QR code with your phone
5. The bot is now connected!

## 💬 Available Commands

Prefix all commands with `!`

| Command | Description |
|---------|-------------|
| `!help` | Show all available commands |
| `!ping` | Check bot response time |
| `!time` | Get the current time |
| `!joke` | Get a random joke |
| `!quote` | Get a random quote |
| `!echo [text]` | Echo back your message |
| `!weather [city]` | Get weather information |

### Example Usage:
```
User: !help
Bot: 📋 Available Commands:
     !help - Show this message
     !ping - Check bot response time
     ... and more

User: !joke
Bot: 😄 Why don't scientists trust atoms? Because they make up everything!

User: !time
Bot: ⏰ Current time: 6/2/2026, 8:49:09 AM
```

## 🛠️ Development

### Run in development mode with auto-reload:
```bash
npm run dev
```

### Project Structure:
```
press-whatssap-bot/
├── index.js                    # Main bot entry point
├── dev.js                      # Development server
├── package.json                # Project dependencies
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT License
├── README.md                   # This file
│
├── handlers/
│   └── commandHandler.js       # Command routing and handling
│
├── commands/                   # Command modules
│   ├── help.js
│   ├── ping.js
│   ├── time.js
│   ├── joke.js
│   ├── quote.js
│   ├── echo.js
│   └── weather.js
│
├── utils/
│   ├── logger.js              # Logging utility with daily logs
│   └── rateLimit.js           # Rate limiting utility
│
└── logs/                       # Message logs (auto-generated)
    └── YYYY-MM-DD.log         # Daily log files
```

## 🔧 Configuration

Edit the `.env` file to add your configuration:
```env
NODE_ENV=development
```

## 🧩 Creating New Commands

1. Create a new file in `commands/` directory:
```javascript
// commands/mycommand.js
module.exports = {
  name: 'mycommand',
  description: 'My custom command',
  execute: async (message, args, client, contact) => {
    message.reply('Hello from my command!');
  }
};
```

2. Register it in `handlers/commandHandler.js`:
```javascript
const commands = {
  'mycommand': require('./commands/mycommand'),
  // ... other commands
};
```

## 📊 Logging

All messages are automatically logged to `logs/YYYY-MM-DD.log` with format:
```
[2026-06-02T08:49:09.123Z] [Group Name] Sender: Message content
```

## 🚦 Rate Limiting

The bot has built-in rate limiting:
- **Max Requests**: 5 commands per minute per user
- **Window**: 1 minute
- Prevents spam and abuse

## 📚 Resources

- [whatsapp-web.js Documentation](https://docs.sayongh.ir/whatsapp-web.js/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [WhatsApp Terms of Service](https://www.whatsapp.com/legal/)

## ⚠️ Important Notes

- **Security**: Keep your WhatsApp account secure
- **Privacy**: Don't share QR codes
- **Connection**: This bot connects via WhatsApp Web
- **Terms**: Ensure you comply with WhatsApp's terms of service
- **Rate Limits**: WhatsApp may limit bot activity to prevent abuse

## 🐛 Troubleshooting

### Bot not scanning QR code?
- Make sure your phone has WhatsApp installed
- Check that you're using the correct QR code from the terminal
- Try scanning from a different device

### Commands not working?
- Ensure you're using the `!` prefix
- Check the command spelling
- Type `!help` to see available commands

### Connection drops frequently?
- Check your internet connection
- Keep your phone connected to WiFi
- Avoid having WhatsApp open on your computer simultaneously

## 📄 License

MIT License - Feel free to use this project for your own purposes

See [LICENSE](LICENSE) for details.

## 👨‍💻 Author

[Reynoldspress50-ctrl](https://github.com/Reynoldspress50-ctrl)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

**Happy Coding! 🎉**

Made with ❤️ using whatsapp-web.js