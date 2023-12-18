// Pricing Data

// Normal Plan

export const PricingData = [
    {
        id: 0,
        price: "$15",
        name: "Normal Plan",
        planType: "normal",
        details: [
            {
                name: "Investment advisory",
                include: true,
            },
            {
                name: "Asset management",
                include: true,
            },
            {
                name: "Risk management",
                include: false,
            },
            {
                name: "Tax planning",
                include: false,
            },
            {
                name: "24/7 Support",
                include: true,
            },
        ],
    },
    // Single Plan
    {
        id: 1,
        price: "$19",
        name: "Single Plan",
        planType: "single",
        details: [
            {
                name: "Investment advisory",
                include: true,
            },
            {
                name: "Asset management",
                include: true,
            },
            {
                name: "Risk management",
                include: false,
            },
            {
                name: "Tax planning",
                include: true,
            },
            {
                name: "24/7 Support",
                include: true,
            },
        ],
    },
    // Pro Plan
    {
        id: 1,
        price: "$23",
        name: "Pro Plan",
        planType: "pro",
        details: [
            {
                name: "Investment advisory",
                include: true,
            },
            {
                name: "Asset management",
                include: true,
            },
            {
                name: "Financial Counseling",
                include: true,
            },
            {
                name: "Risk management",
                include: true,
            },
            {
                name: "Tax planning",
                include: true,
            },
            {
                name: "24/7 Support",
                include: true,
            },
        ],
    },
];
