import { LookUpEntityBase } from "@base/infrastructure/abstracts/LookUpEntityBase";
import { BaseDTO } from "@base/infrastructure/interfaces/base.interface";

export function mapLookUpDTO(input: LookUpEntityBase): BaseDTO {

    return {
        code: input.code,
        name: input.name
    }
}