import prisma from "../config/db.js";


export async function getStoreDashboard(req, res) {
    try {
        const ownerId = req.user.id;

        const stores = await prisma.store.findMany({
            where: {
                ownerId: ownerId
            },
            select: {
                id: true,
                name: true,
                email: true,
                address: true,

                ratings: {
                    select: {
                        rating: true
                    }
                }
            }
        });

        if (stores.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No store found for this owner"
            });
        }

        const result = stores.map(store => {
            const ratings = store.ratings;

            const averageRating =
                ratings.length > 0
                    ? ratings.reduce(
                        (sum, item) => sum + item.rating,
                        0
                    ) / ratings.length
                    : 0;

            return {
                id: store.id,
                name: store.name,
                email: store.email,
                address: store.address,
                totalRatings: ratings.length,
                averageRating: Number(averageRating.toFixed(2))
            };
        });

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch store dashboard"
        });
    }
}


export async function getStoreRatings(req, res) {
    try {
        const ownerId = req.user.id;

        const stores = await prisma.store.findMany({
            where: {
                ownerId: ownerId
            },
            select: {
                id: true,
                name: true,

                ratings: {
                    select: {
                        id: true,
                        rating: true,
                        createdAt: true,

                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                address: true
                            }
                        }
                    },

                    orderBy: {
                        createdAt: "desc"
                    }
                }
            }
        });

        if (stores.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No store found for this owner"
            });
        }

        const result = stores.map(store => ({
            storeId: store.id,
            storeName: store.name,
            ratings: store.ratings.map(item => ({
                ratingId: item.id,
                rating: item.rating,
                ratedAt: item.createdAt,
                user: item.user
            }))
        }));

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch store ratings"
        });
    }
}


// export async function  verifyPassword(req,res) {
//     const ownerId = req.user.id;
//         const { password } = req.body;

//         if (!password) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Password is required"
//             });
//         }

// }
export async function updatePassword(req, res) {
    try {
        const ownerId = req.user.id;
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required"
            });
        }

        await prisma.user.update({
            where: {
                id: ownerId
            },
            data: {
                passwordHash: password
            }
        });

        res.status(200).json({
            success: true,
            message: "Password updated successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to update password"
        });
    }
}