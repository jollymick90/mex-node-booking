import { Container, Service } from 'typedi';

import { TruckRepository } from '@base/api/repositories/Trucks/TruckRepository';
import { SiteRepository } from '@base/api/repositories/Trucks/SiteRepository';
import { DayRepository } from '@base/api/repositories/LookUp/DayRepository';
import { TruckCalendarRepository } from '@base/api/repositories/Trucks/TruckCalendarRepository';
import { TruckDayResponseDTO } from '@base/api/responses/Trucks/truck.interface';
import { TruckCalendars } from '@base/api/models/TruckCalendars';
import { mapTruckCalendarToTruckDay } from '@base/api/mappers/truck.mapper';

@Service()
export class TruckCalendarService {

    truckRepository: TruckRepository;
    siteRepository: SiteRepository;
    dayRepository: DayRepository;

    truckCalendarRespository: TruckCalendarRepository;

    constructor() {
        this.truckRepository = Container.get(TruckRepository);
        this.dayRepository = Container.get(DayRepository);
        this.siteRepository = Container.get(SiteRepository);
        this.truckCalendarRespository = Container.get(TruckCalendarRepository);
    }

    public async findAll(): Promise<TruckDayResponseDTO[]> {

        const truckCalendars: TruckCalendars[] = await this.truckCalendarRespository.findAllJoined();

        return truckCalendars.map(mapTruckCalendarToTruckDay);
    }
    public async findNow(): Promise<TruckDayResponseDTO[]> {

        const truckCalendars: TruckCalendars[] = await this.truckCalendarRespository.findNow();

        return truckCalendars.map(mapTruckCalendarToTruckDay);
    }
    public async findWeek(): Promise<TruckDayResponseDTO[]> {

        const truckCalendars: TruckCalendars[] = await this.truckCalendarRespository.findWeek();

        return truckCalendars.map(mapTruckCalendarToTruckDay);
    }
    
}
