# 🚀 Quick Deployment Checklist

## Pre-Deployment Checklist

Use this checklist before deploying your WhatsApp bot to production.

### System Requirements

- [ ] **Node.js** installed (v14 or higher)
  ```bash
  node --version
  ```

- [ ] **npm** installed
  ```bash
  npm --version
  ```

- [ ] **Git** installed
  ```bash
  git --version
  ```

### Project Setup

- [ ] **Repository cloned**
  ```bash
  git clone https://github.com/Reynoldspress50-ctrl/press-whatssap-bot.git
  cd press-whatssap-bot
  ```

- [ ] **Dependencies installed**
  ```bash
  npm install
  ```

- [ ] **package.json exists**
  ```bash
  ls -la package.json
  ```

- [ ] **index.js exists**
  ```bash
  ls -la index.js
  ```

### Configuration

- [ ] **.env file created**
  ```bash
  cat .env
  # Should contain:
  # NODE_ENV=development
  ```

- [ ] **Logs directory exists**
  ```bash
  mkdir -p logs
  ```

- [ ] **Authentication directory ready**
  ```bash
  mkdir -p .wwebjs_auth
  ```

### Local Testing

- [ ] **Bot runs locally**
  ```bash
  npm start
  ```

- [ ] **QR code appears**
  - Check terminal for QR code
  - Should see emoji and QR pattern

- [ ] **Successfully linked to WhatsApp**
  - Scan QR with phone
  - Bot should say "✅ WhatsApp Bot is ready!"

- [ ] **Test a command**
  ```
  Send: !help
  Expected: Command list appears
  ```

### Security Check

- [ ] **.env file in .gitignore**
  ```bash
  grep "\.env" .gitignore
  ```

- [ ] **Auth files in .gitignore**
  ```bash
  grep ".wwebjs_auth" .gitignore
  ```

- [ ] **node_modules in .gitignore**
  ```bash
  grep "node_modules" .gitignore
  ```

- [ ] **No secrets in code**
  - No API keys in files
  - No passwords hardcoded

### Production Process Manager

- [ ] **PM2 installed** (optional but recommended)
  ```bash
  sudo npm install -g pm2
  pm2 --version
  ```

- [ ] **PM2 startup configured** (optional)
  ```bash
  pm2 startup
  pm2 save
  ```

### Deployment Platform Choice

Choose one:

- [ ] **DigitalOcean** - Recommended
  - [ ] SSH key configured
  - [ ] Droplet created
  - [ ] Node.js installed on server
  - [ ] Code cloned on server
  - [ ] PM2 configured

- [ ] **Heroku** - Easiest
  - [ ] Heroku account created
  - [ ] Heroku CLI installed
  - [ ] Procfile created
  - [ ] Deployed with `git push heroku main`

- [ ] **Docker** - Containerized
  - [ ] Docker installed
  - [ ] Dockerfile created
  - [ ] docker-compose.yml configured
  - [ ] Built: `docker build -t whatsapp-bot .`
  - [ ] Running: `docker run -d whatsapp-bot`

- [ ] **AWS EC2** - Scalable
  - [ ] EC2 instance running
  - [ ] Security groups configured
  - [ ] SSH access working
  - [ ] Node.js installed
  - [ ] Bot deployed and running

- [ ] **Railway** - Modern
  - [ ] Railway account created
  - [ ] GitHub connected
  - [ ] Repository deployed
  - [ ] Deployment successful

### Monitoring Setup

- [ ] **Logs being created**
  ```bash
  ls -la logs/
  ```

- [ ] **Daily log rotation working**
  - Check if new logs created daily
  - Format: YYYY-MM-DD.log

- [ ] **PM2 monitoring enabled** (if using PM2)
  ```bash
  pm2 monit
  ```

- [ ] **Auto-restart configured** (if using PM2)
  ```bash
  pm2 startup
  ```

### Testing in Production

- [ ] **Bot is responding**
  - Send test message to bot
  - Check if response received

- [ ] **Commands work**
  ```
  !help
  !ping
  !time
  !joke
  ```

- [ ] **Logs are being recorded**
  - Check logs/today.log
  - Verify messages logged

- [ ] **No errors in logs**
  ```bash
  pm2 logs whatsapp-bot
  # or
  docker logs -f whatsapp-bot
  ```

- [ ] **Rate limiting working**
  - Send 6 commands in quick succession
  - 6th command should be rate limited

### Backup & Recovery

- [ ] **Backup strategy in place**
  - Logs backed up daily
  - Config backed up
  - Code versioned in Git

- [ ] **Recovery procedure documented**
  - Steps to restart bot
  - Steps to restore from backup
  - Emergency contacts/support channels

### Final Steps

- [ ] **Documentation updated**
  - README.md current
  - Deployment guide updated
  - Contact info documented

- [ ] **Team notified**
  - All team members know bot is live
  - Support channel set up
  - Escalation process defined

- [ ] **Monitoring alerts set** (optional)
  - Email alerts on crash
  - Slack notifications
  - Daily status report

---

## Automated Deployment Check

Run the automated script:

```bash
bash scripts/deployment-check.sh
```

This will verify:
- ✅ Node.js installed
- ✅ npm installed
- ✅ Git installed
- ✅ package.json exists
- ✅ Dependencies installed
- ✅ .env file exists
- ✅ index.js exists
- ✅ logs directory exists
- ✅ README.md exists
- ✅ PM2 installed

---

## Quick Deployment Commands

### Local Development
```bash
npm install
npm start
```

### Production with PM2
```bash
npm install --production
pm2 start index.js --name "whatsapp-bot"
pm2 startup
pm2 save
pm2 logs whatsapp-bot
```

### Docker Deployment
```bash
docker build -t whatsapp-bot .
docker run -d --name whatsapp-bot whatsapp-bot
docker logs -f whatsapp-bot
```

### DigitalOcean Deployment
```bash
# SSH to server
ssh root@your_ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repo
git clone https://github.com/Reynoldspress50-ctrl/press-whatssap-bot.git
cd press-whatssap-bot

# Install and run
npm install
pm2 start index.js --name "whatsapp-bot"
pm2 startup && pm2 save
```

---

## Health Check

Verify bot is running:

```bash
# With PM2
pm2 status
pm2 logs whatsapp-bot

# With Docker
docker ps
docker logs whatsapp-bot

# Manual check
ps aux | grep node
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Bot not starting | Check logs: `pm2 logs` or `docker logs` |
| QR code not appearing | Ensure terminal supports emoji |
| Commands not working | Check command prefix is `!` |
| High CPU usage | Check for infinite loops in logs |
| Memory issues | Increase max_memory_restart in PM2 |
| Can't scan QR | Check WhatsApp Web accessibility |

---

**Status:** ✅ Ready to Deploy!

Next: Choose your deployment platform and follow the specific instructions.
