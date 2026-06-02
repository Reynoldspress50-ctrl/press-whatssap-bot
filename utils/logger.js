const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '../logs');

// Create logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const getLogFileName = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}.log`;
};

const logMessage = (sender, message, group = 'Direct') => {
  const timestamp = new Date().toISOString();
  const logContent = `[${timestamp}] [${group}] ${sender}: ${message}\n`;
  const logFile = path.join(logsDir, getLogFileName());
  
  fs.appendFileSync(logFile, logContent);
};

const getLogContent = (date) => {
  const logFile = path.join(logsDir, `${date}.log`);
  if (fs.existsSync(logFile)) {
    return fs.readFileSync(logFile, 'utf8');
  }
  return 'No logs found for this date';
};

module.exports = { logMessage, getLogContent };