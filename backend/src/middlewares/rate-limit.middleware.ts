import { rateLimit } from 'express-rate-limit';

const rateLimitRoute = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10, // Limit each IP to 10 requests per 15 minutes).
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});

export default rateLimitRoute;
