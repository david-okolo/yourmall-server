import { StrategyOptions, ExtractJwt, VerifyCallback, Strategy } from "passport-jwt";
import passport from "passport";

const jwtStrategyOptions: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY
}

const jwtVerifyCallback: VerifyCallback = (jwt_payload, done) => {
    const userName = jwt_payload?.name;

    if(!userName)
    {
        return done(new Error("Payload didn't contain userName field"), false)
    }

    
    return done(null, jwt_payload)
}

export const jwtStrategy: passport.Strategy = new Strategy(jwtStrategyOptions, jwtVerifyCallback);