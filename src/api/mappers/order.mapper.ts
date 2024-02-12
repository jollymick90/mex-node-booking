import { Dish } from "@api/models/Dish";
import { DishDTO } from "@api/responses/Orders/order.interface";
import { CategoryDTO, TagDTO } from "@api/responses/LookUp/lookup.interface";
import { Category } from "../models/Category";
import { Tag } from "../models/Tag";
import { mapLookUpDTO } from "./lookup.mapper";

export function mapDishToDTO(input: Dish): DishDTO {
    const response: DishDTO = {
        code: input.code,
        name: input.name,
        description: input.description,
        note: input.note,
        categories: mapCategories(input.categories),
        tags: mapTags(input.categories)
    }

    return response;

}

function mapCategories(categories: Category[]): CategoryDTO[] | undefined {
    if (!categories) return;

    return categories.map(mapCategoryDTO);
}

function mapTags(tags: Tag[]): TagDTO[] | undefined {
    if (!tags) return;

    return tags.map(mapTagDTO);
}

const mapCategoryDTO = (cateogry: Category): CategoryDTO => ({ ...mapLookUpDTO(cateogry) })
const mapTagDTO = (tag: Tag): TagDTO => ({ ...mapLookUpDTO(tag) })

