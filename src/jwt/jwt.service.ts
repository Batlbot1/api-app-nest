import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  public generateToken(id: number) {
    return jwt.sign({ id }, 'SecretKeySecretKeyword', { expiresIn: '10m' });
  }

  public verifyToken(token: string) {
    return jwt.verify(token, 'SecretKeySecretKeyword');
  }
}
