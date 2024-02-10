import { UnauthorizedError } from 'routing-controllers';

export class RegistrationError extends UnauthorizedError {
  constructor() {
    super('Registration Error!');
  }
}