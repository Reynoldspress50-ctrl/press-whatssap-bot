const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('dotenv').config();

// Initialize the WhatsApp client
const client = new Client({
  authStrategy: new LocalAuth(),
});

// QR Code generation for authentication
client.on('qr', (qr) => {
  console.log('\n📱 Scan this QR code with your WhatsApp:');
  qrcode.generate(qr, { small: true });
});

// Client is ready
client.on('ready', () => {
  console.log('✅ WhatsApp Bot is ready!');
});

// Handle incoming messages
client.on('message', async (message) => {
  console.log(`📨 Message from ${message.from}: ${message.body}`);

  // Echo bot - responds with the same message
  if (message.body.toLowerCase() === 'hi') {
    message.reply('👋 Hello! How can I help you?');
  }

  // Help command
  if (message.body.toLowerCase() === 'help') {
    message.reply(`📋 Available commands:\n\n• hi - Say hello\n• help - Show this message\n• time - Get current time`);
  }

  // Time command
  if (message.body.toLowerCase() === 'time') {
    const time = new Date().toLocaleTimeString();
    message.reply(`⏰ Current time: ${time}`);
  }
});

// Handle authentication failure
client.on('auth_failure', () => {
  console.error('❌ Authentication failed!');
});

// Handle disconnection
client.on('disconnected', (reason) => {
  console.warn(`⚠️ Client disconnected: ${reason}`);
});

// Start the client
client.initialize();

console.log('🚀 Starting WhatsApp Bot...');