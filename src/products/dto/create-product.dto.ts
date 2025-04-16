import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: true })
  price: number;

  @ApiProperty({ required: true })
  image: string;

  @ApiProperty({ required: true })
  categoryId: number;
}
