import { Inject, Service } from "typedi";
import { OpenAPI } from "routing-controllers-openapi";
import { JsonController, Get } from "routing-controllers";
import { ControllerBase } from "@base/infrastructure/abstracts/ControllerBase";
import { TruckCalendarService } from "@base/api/services/Trucks/TruckCalendarService";
import { TruckDayResponseDTO } from "@base/api/responses/Trucks/truck.interface";

@Service()
@OpenAPI({})
@JsonController('/where')
export class WhereController extends ControllerBase {

  @Inject()
  private truckCalendarService: TruckCalendarService;

  public constructor() {
    super();
  }

  @Get("/now")
  public async getWhereNow(): Promise<TruckDayResponseDTO[]> {
    return this.truckCalendarService.findNow();
  }

  @Get("/week")
  public async getWhereWeek(): Promise<TruckDayResponseDTO[]> {
    return [];
  }
}