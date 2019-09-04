import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly filename: string;

  @ApiModelProperty()
  readonly views: number;

  @ApiModelProperty()
  readonly isPublished: boolean;
}