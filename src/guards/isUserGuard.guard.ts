import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { ROLES } from '../constants/role.constants';

@Injectable()
export class IsUserGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.user.role !== ROLES.USER) {
      throw new UnauthorizedException('No tienes permisos para acceder a este recurso');
    }

    return true;
  }
}