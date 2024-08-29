/**
 * Generates 'n' random digits
 * @param n number
 * @returns number
 */
export function generateOTP(n: number): number {
  let otp = '';
  for (let i = 0; i < n; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    otp += randomDigit.toString();
  }
  return Number(otp);
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
