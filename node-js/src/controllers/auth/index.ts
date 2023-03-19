import { Router } from 'express';
import jwtTokenMiddleware from 'middlewares/jwt-token-middleware';
import { register } from './methods/register';
import { login } from './methods/login';
import { auth } from './methods/auth';

const authController = Router();

authController.post('/register', register);
authController.post('/login', login);
authController.post('/auth', jwtTokenMiddleware, auth);

export default authController;
