import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User'

class UserController {
  
  async store (request: Request, response:Response) {
    const repository = getRepository(User);
    const { nome } = request.body;
    
    const userExists = await repository.findOne({ where: { nome } })

    if (userExists) {
      return response.sendStatus(409)
    }

    const user = repository.create({ nome });
    await repository.save(user);

    return response.json(user);
  }
}

export { UserController }