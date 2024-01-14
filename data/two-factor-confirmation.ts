import { db } from '@/lib/db';

export const getTwoFactorConfirmationByUserId = async (
  userId: string,
) => {
  try {
    const twoFactorConfirmation =
      await db.twoFatcorConfirmation.findUnique({
        where: {
          userId,
        },
      });
    return twoFactorConfirmation;
  } catch (error) {
    return null;
  }
};
