import { Request, Response } from 'express';


class UserController {
  store (request: Request, response:Response) {
    return response.send('ok')
  }
}

export default new UserController();