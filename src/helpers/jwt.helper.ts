import { sign, SignOptions, VerifyOptions, verify } from "jsonwebtoken";

export class JwtHelperClass {
  constructor() {}

  public generateToken(payload: any) {
        // SIGNING OPTIONS
        const signOptions: SignOptions = {
          issuer: process.env.ISSUER as string,
          expiresIn: process.env.EXPIRES_IN as string,
          jwtid: process.env.JWT_ID as string,
        };
    
        //Token generation
        const secret = process.env.JWT_SECRET as string;
        let token = sign(payload, secret, signOptions);
        return `Bearer ${token}`;
  }

  public verifyToken(token: string) {
    try {
    // VERIFY OPTIONS
    const verifyOptions: VerifyOptions = {
      issuer: process.env.ISSUER as string,
      // expiresIn: process.env.EXPIRES_IN as string,
      jwtid: process.env.JWT_ID as string,

    };

    const secret = process.env.JWT_SECRET as string;
    // verify token and return
      const ValidToken = verify(token, secret, verifyOptions);
      return ValidToken;
    } catch (error) {
      throw { message: "Token is invalid" };
    }
  }
}
