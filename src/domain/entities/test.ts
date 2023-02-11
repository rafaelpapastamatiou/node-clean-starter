import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    collection: "tests",
  },
})
export class Test {
  @prop({
    required: true,
  })
  firstName: string;

  @prop({
    required: true,
  })
  lastName: string;

  @prop({
    required: true,
  })
  email: string;

  @prop({
    required: true,
  })
  password: string;
}
