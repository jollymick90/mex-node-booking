import { Service } from 'typedi';
import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { AppDataSource } from '@base/config/db';
import { IRepository } from '@base/infrastructure/abstracts/IRepository';
import { Truck } from '@base/api/models/Truck';
import { Site } from '@base/api/models/Site';
import { TruckCalendars } from '@base/api/models/TruckCalendars';

@Service()
export class TruckCalendarRepository extends RepositoryBase<TruckCalendars>  implements IRepository<TruckCalendars>{

  constructor() {
    super(AppDataSource.getRepository(TruckCalendars));
  }

  public async findAllJoined() {
    return this.repository.find({
      relations: {
        trucks: true,
        site: true,
        day: true
      }
    });
  }

  public async findNow() {
    const nowWeekDay = new Date().getDay();
    const today = new Date();
    // const result = await this.repository
    //   .createQueryBuilder("tc")
    //   .where("tc.day.dayOfWeek = :day OR tc.day.customDay = CURRENT_DAY or tc.holiday = CURRENT_DAY")
    //   .setParameter("day", nowWeekDay)
    //   .getMany();
    // console.log(result);
    return this.repository.find({
      relations: {
        trucks: true,
        site: true,
        day: true
      },
      where: [
        {
        day: {
          dayOfWeek:nowWeekDay
        }
      },
      {
        day: {
          customDay: today
        }
      },
      {
        day: {
          holiday: today
        }
      }
    ]
    });
  }



}
