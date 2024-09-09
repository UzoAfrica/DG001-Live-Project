export function generateOTP(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

/**
 * Generates otp expiry date
 * @param n number(seconds)
 * @returns Date object
 */
export function generateExpiryDate(n: number): Date {
  const expiryDate = new Date(Date.now() + n * 1000);
  return expiryDate;
}
