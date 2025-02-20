import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { asyncHandler } from './asyncHandler';
import { db } from '../drizzle/db';
import { UserTable } from "../drizzle/schema/user";
import { eq } from 'drizzle-orm';

interface DecodedToken {
  userId: number;
}

interface CustomRequest extends Request {
  user?: any;
}

export const isAuthenticate = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
  let token: string | undefined;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
      const [user] = await db.select().from(UserTable).where(eq(UserTable.id, decoded.userId));
      if (!user) {
        res.status(401);
        throw new Error("Not authorized, user not found.");
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, token not found");
  }
});

export const isAdmin = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
  
  const decoded = jwt.verify(req.body.jwt, process.env.JWT_SECRET as string) as DecodedToken;
  const [user] = await db.select().from(UserTable).where(eq(UserTable.id, decoded.userId));
  if (user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin.");
  }
});