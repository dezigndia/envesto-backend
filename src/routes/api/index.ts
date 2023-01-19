import { Router } from "express";
import authRouter from "./auth.route";
import feedbackRouter from "./feedback.route";
import feedRouter from './feed.route';
import userRouter from './user.route';
import categoryRouter from "./category.route";

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/feedback', feedbackRouter);
apiRouter.use('/feed', feedRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/category', categoryRouter);

export default apiRouter;