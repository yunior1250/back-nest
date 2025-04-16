import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoryDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  description: string;
}
