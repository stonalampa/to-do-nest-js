import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class ToDoGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    if (req.headers.authorization !== 'jesamadminmajkemi') {
      return false;
    }

    return true;
  }
}
