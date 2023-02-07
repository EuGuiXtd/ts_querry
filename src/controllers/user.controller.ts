import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    
    const userCreated = await this.userService.create(user);
    const token = jwt.sign({ data: { userId: userCreated.id } }, secret);
    res.status(201).json({ token });
  };
}

export default UserController;