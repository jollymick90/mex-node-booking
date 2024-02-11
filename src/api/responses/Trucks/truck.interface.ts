import { BaseDTO } from "@base/infrastructure/interfaces/base.interface";
import { SiteDTO } from "./site.interface";
import { DayDTO } from "../LookUp/lookup.interface";

export interface TruckDTO extends BaseDTO {
}
export interface TruckDayResponse { 
    dayOfWeek: number, 
    nameOfDay?: string
}
export interface TruckDayResponseDTO extends TruckDayResponse{
    siteCode: string;
    siteName: string;
    truckCode: string;
    truckName: string;
    startAt: string;
    endAt: string;
}