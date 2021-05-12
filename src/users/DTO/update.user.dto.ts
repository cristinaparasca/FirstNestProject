import { PartialType } from "@nestjs/mapped-types";
import { CreatedUserDto } from "./create.user.dto";

export class UpdatedUserDto extends PartialType(CreatedUserDto){}