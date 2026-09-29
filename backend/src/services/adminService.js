import prisma from "../dbconfig/db.js";

export const getDashboard = async () => {
  const [
    totalUsers,
    totalStores,
    totalRatings
  ] = await Promise.all([
    prisma.user.count(),
    prisma.store.count(),
    prisma.rating.count()
  ]);

  return {
    totalUsers,
    totalStores,
    totalRatings
  };
};