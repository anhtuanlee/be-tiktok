import { NextFunction, Request, Response } from 'express';

import { ApiResponse } from 'utils/rest';
import * as service from './service';

const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const result = await service.login(req, next);
  if (result) new ApiResponse(result, 'OK', 200, Date.now() - req.startTime).send(res);
};

export { login };
