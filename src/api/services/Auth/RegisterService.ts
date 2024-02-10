import Container, { Service } from 'typedi';
import { UserRepository } from '@api/repositories/Users/UserRepository';
import { EventDispatcher, EventDispatcherInterface } from '@base/decorators/EventDispatcher';
import { AuthService } from '@base/infrastructure/services/auth/AuthService';
import { RegistrationError } from '@base/api/exceptions/Auth/RegistrationError';
import { RegisterRequest } from '@base/api/requests/Auth/RegisterRequest';

@Service()
export class RegisterService {

  // @Inject()
  private userRepository: UserRepository;

  constructor(
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    private authService: AuthService,
  ) {
    this.userRepository = Container.get(UserRepository);
  }

  public async register(data: RegisterRequest) {
    console.log("register", data)

    // 
    try {
      const userCreated = await this.userRepository.findOneByEmail(data.email);
      if (userCreated) {
        throw new RegistrationError();
      }
      const user = await this.userRepository.createUser(data);
      return Promise.resolve({ ...user });
    } catch (E) {
      console.log("EE", E)
    }




    // this.eventDispatcher.dispatch('onUserRegister', userCreated);

    // return this.authService.sign(
    //   {
    //     userId: userCreated.id,
    //     email: userCreated.email,
    //     role_id: userCreated.roleId,
    //     role: userCreated.role.name,
    //   },
    //   { user: { id: userCreated.id, email: userCreated.email, role: userCreated.role.name } },
    // );
  }
}
