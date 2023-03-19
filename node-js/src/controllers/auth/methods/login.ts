import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import BcryptService from 'services/bcrypt-service';
import UserModel from '../../../models/user-model';
import createAuthResponse from '../helpers/create-auth-respose';
import { AuthResponse, Credentials } from '../types';
import credentialsValidationSchema from '../validation-schemas/credentials-validation-schema';

export const login: RequestHandler<
{},
AuthResponse | ErrorResponse,
Partial<Credentials>,
{}
> = async (req, res) => {
  try {
    const credentials = credentialsValidationSchema.validateSync(req.body, { abortEarly: false });
    const userEntity = await UserModel.getUserByEmail(credentials.email);

    const passwordIsCorrect = BcryptService.compare(credentials.password, userEntity.password);
    if (!passwordIsCorrect) throw new Error('Invalid password');

    res.json(createAuthResponse(userEntity));
  } catch (err) {
    handleRequestError(err, res);
  }
};
