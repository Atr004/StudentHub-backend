import rateLimit from "express-rate-limit";

export const registerLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5,
    message: "Too many registration attempts. Please try again later.",
});

export const loginLimiter = rateLimit({
    windowMs : 15* 60 * 1000,
    max:5,
    message:{
        success:false,
        message:"Too many login attempts.Try again after 15 minutes",
    },
    standardHeaders:true,
    legacyHeaders: false,
});


export const listingLimiter = rateLimit({
    windowMs:10 * 60 * 1000,
    max:5,
    message:{
        success:false,
        message: "You are creating lists too fast.Please slow down",
    },
    standardHeaders: true,
    legacyHeaders: false,
});