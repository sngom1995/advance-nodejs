import dotenv from 'dotenv';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { findUser } from '../services/users.js';
dotenv.config();
const { JWT_SECRET } = process.env || 'secret';
console.log("secret",JWT_SECRET);
const strategy = new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    },
   async (payload, done) => {
      try {
        const user = await findUser({ id: payload.id });
        if (!user) {
          const error = new Error('User not found');
          error.statusCode = 404;
          throw error;
        }
        done(null, user);
      }
        catch (err) {
            done(err);
        }
    }
);

passport.use(strategy);

export const initialize = () => passport.initialize();
export const authenticate = passport.authenticate('jwt', { session: false });


