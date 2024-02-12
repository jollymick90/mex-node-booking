import { BaseDTO } from "@base/infrastructure/interfaces/base.interface";
import { CategoryDTO, TagDTO } from "@api/responses/LookUp/lookup.interface";

export interface OrderResponse {
    
}

export interface DishDTO extends BaseDTO {
    description?: string;
    note?: string;
    price?: number;
    categories?: CategoryDTO[];
    tags?: TagDTO[];
}