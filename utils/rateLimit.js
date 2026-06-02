const rateLimit = new Map();

const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

const checkRateLimit = (userId) => {
  const now = Date.now();
  
  if (!rateLimit.has(userId)) {
    rateLimit.set(userId, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  const userLimit = rateLimit.get(userId);
  
  if (now > userLimit.resetTime) {
    rateLimit.set(userId, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  userLimit.count++;
  return { allowed: true, remaining: MAX_REQUESTS - userLimit.count };
};

module.exports = { checkRateLimit };