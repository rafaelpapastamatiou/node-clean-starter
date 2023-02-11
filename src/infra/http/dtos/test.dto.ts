import { IsEmail, IsString } from "class-validator";
import { ApiSchema, ApiSchemaProperty } from "swagger-decorators";

@ApiSchema()
export class TestBodyInputDTO {
  @ApiSchemaProperty({
    required: true,
    example: "John Doe",
  })
  @IsString()
  name: string;

  @ApiSchemaProperty({
    required: true,
    example: "johndoe@gmail.com",
  })
  @IsEmail()
  email: string;
}

@ApiSchema()
export class TestOutputDTO {
  @ApiSchemaProperty({
    required: true,
    example: "John Doe",
  })
  @IsString()
  name: string;

  @ApiSchemaProperty({
    required: true,
    example: "johndoe@gmail.com",
  })
  @IsEmail()
  email: string;
}
