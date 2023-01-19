import { Request, Response } from "express";
import {CREATED, INTERNAL_SERVER_ERROR, CONFLICT, OK} from "http-status-codes";
import { UserService } from "../services";

const userService = new UserService();

export class UserController {
  public static async getUserProfile(req: Request, res: Response) {
    try {
      const data: any = await userService.getUserProfile(req.query);
      if (data.status) return res.status(CREATED).json(data);
      else return res.status(CONFLICT).json(data);
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({ error });
    }
  }

  public static async updateUserProfile(req: Request, res: Response) {
    try {
      const data: any = await userService.updateUserProfile(req.body);
      if (data.status) return res.status(CREATED).json(data);
      else return res.status(CONFLICT).json(data);
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({ error });
    }
  }
}
