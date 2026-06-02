const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import command handlers
const commandHandler = require('./handlers/commandHandler');
const { logMessage } = require('./utils/logger');

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
  logMessage('BOT', 'Bot initialized and ready');
});

// Handle incoming messages
client.on('message', async (message) => {
  try {
    // Get contact info
    const contact = await message.getContact();
    const isGroup = message.isGroupMsg;
    const groupName = isGroup ? (await message.getChat()).name : 'Direct';
    
    console.log(`📨 [${isGroup ? 'GROUP' : 'DIRECT'}] ${contact.name || contact.number} (${groupName}): ${message.body}`);
    logMessage(contact.name || contact.number, message.body, isGroup ? groupName : 'Direct');

    // Check if message starts with command prefix
    if (message.body.startsWith('!')) {
      await commandHandler.handleCommand(client, message, contact);
    }
  } catch (error) {
    console.error('Error handling message:', error);
    logMessage('ERROR', error.message);
  }
});

// Handle authentication failure
client.on('auth_failure', () => {
  console.error('❌ Authentication failed!');
  logMessage('ERROR', 'Authentication failed');
});

// Handle disconnection
client.on('disconnected', (reason) => {
  console.warn(`⚠️ Client disconnected: ${reason}`);
  logMessage('WARNING', `Client disconnected: ${reason}`);
});

// Handle errors
client.on('error', (error) => {
  console.error('Client error:', error);
  logMessage('ERROR', `Client error: ${error.message}`);
});

// Start the client
client.initialize();

console.log('🚀 Starting WhatsApp Bot...');

module.exports = client;