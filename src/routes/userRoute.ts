import express from "express";
import {
  authentication,
  getUser,
  createUser,
  updateUser,
  dropUser,
} from "../controllers/userControllers";
import {
  verifyAddUser,
  verifyEditUser,
  verifyAuthentication,
} from "../middlewares/verifyUser";

const app = express.Router();
app.use(express.json());

/** add middleware process to verify token */
app.get(`/`, getUser);

/** add middleware process to verify token and verify request data */
app.post(`/`, [verifyAddUser], createUser);

/** add middleware process to verify token and verify request data */
app.put(`/:id_user` , [verifyEditUser], updateUser);

/** add middleware process to verify token */
app.delete(`/:id_user`, dropUser);

/** add middleware process to verify token */
app.post(`/auth`, [verifyAuthentication], authentication);

export default app;
