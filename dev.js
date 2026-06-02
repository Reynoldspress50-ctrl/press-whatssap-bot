#!/usr/bin/env node

/**
 * WhatsApp Bot Development Server
 * 
 * This file starts the bot with nodemon for development
 * Run with: npm run dev
 */

const client = require('./index');

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n⏹️  Shutting down bot...');
  await client.destroy();
  process.exit(0);
});

console.log('🔧 Development mode enabled with auto-reload');