import { Request, Response } from 'express';
import { getRepository, Index } from 'typeorm';

import { User } from '../models/User'

class UserController {

  async index( request: Request, response: Response) {
    const user = await getRepository(User).find();
    return response.json(user);
  }

  async store (request: Request, response:Response) {

    const repository = getRepository(User);
    const { nome, email, cidade, uf } = request.body;
    
    const userExists = await repository.findOne({ where: { email } })
    const nomeExists = await repository.findOne({ where: { nome } })

    if (userExists) {
      return response.json({ message: 'email cadastrado'});
    }

    if (nomeExists) {
      return response.json({ message: 'nome cadastrado' });
    }

    const user = repository.create({ nome, email, cidade, uf });
    await repository.save(user);

    return response.json(user);
  }
}

export { UserController }
