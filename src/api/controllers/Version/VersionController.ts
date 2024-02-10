import {
  Get,
  JsonController,
} from 'routing-controllers';
import { Service } from 'typedi';

import { ControllerBase } from '@base/infrastructure/abstracts/ControllerBase';

@Service()
  // @OpenAPI({
  //   tags: ['Auth'],
  // })
  @JsonController('/version')
  export class VersionController extends ControllerBase {

    @Get()
    public async getTest() {
      return "0.0.1";
    }
  }