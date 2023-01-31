import { Request, Response } from "express";
import {CREATED, INTERNAL_SERVER_ERROR, CONFLICT, OK, StatusCodes} from "http-status-codes";
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

  public static async deleteUserProfile(req: Request, res: Response) {
    try {
      const data: any = await userService.deleteUserProfile(req.query);
      if (data.status) return res.status(CREATED).json(data);
      else return res.status(CONFLICT).json(data);
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({ error });
    }
  }

  public static async addUserFollower(req: Request, res: Response) {
    try {
        const data: any = await userService.addUserFollower(req);
        if (data.status) {
            return res.status(StatusCodes.OK).json(data);
        } else {
            return res.status(StatusCodes.UNAUTHORIZED).json(data);
        }
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).send({error});
    }
}

public static async updateUserFollow(req: Request, res: Response) {
  try {
      const data: any = await userService.updateUserFollow(req);
      if (data.status) {
          return res.status(StatusCodes.OK).json(data);
      } else {
          return res.status(StatusCodes.UNAUTHORIZED).json(data);
      }
  } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({error});
  }
}

public static async getUserFollowers(req: Request, res: Response) {
  try {
      const data: any = await userService.getUserFollowers(req);
      if (data.status) {
          return res.status(StatusCodes.OK).json(data);
      } else {
          return res.status(StatusCodes.UNAUTHORIZED).json(data);
      }
  } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({error});
  }
}

public static async getUserFollowing(req: Request, res: Response) {
  try {
      const data: any = await userService.getUserFollowing(req);
      if (data.status) {
          return res.status(StatusCodes.OK).json(data);
      } else {
          return res.status(StatusCodes.UNAUTHORIZED).json(data);
      }
  } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).send({error});
  }
}

public static async updateUserPassword(req: Request, res: Response) {
  try {
    const data: any = await userService.updateUserPassword(req);
    if (data.status) {
      return res.status(StatusCodes.CREATED).json(data);
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json(data);
    }
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send({error});
  }
}

public static async updateForgotUserPassword(req: Request, res: Response) {
  try {
    const data: any = await userService.updateForgotUserPassword(req);
    if (data.status) {
      return res.status(StatusCodes.CREATED).json(data);
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json(data);
    }
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send({ error });
  }
}

public static async addContentReportIssue(req: Request, res: Response) {
  try {
    const data: any = await userService.addContentReportIssue(req);
    if (data.status) {
      return res.status(StatusCodes.CREATED).json(data);
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json(data);
    }
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send({ error });
  }
}
  
public static async getContentReportIssueList(req: Request, res: Response) {
  try {
    const data: any = await userService.getContentReportIssueList(req);
    if (data.status) {
      return res.status(StatusCodes.CREATED).json(data);
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json(data);
    }
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send({ error });
  }
  
}


}
