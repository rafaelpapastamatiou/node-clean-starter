import fs from "fs/promises";
import path from "path";
import { generateSwaggerFile } from "swagger-decorators";

export async function run() {
  const docsDirectoryPath = path.join(__dirname, "src", "shared", "docs");

  try {
    await fs.access(docsDirectoryPath);
  } catch {
    await fs.mkdir(docsDirectoryPath);
  }

  await generateSwaggerFile({
    schemasGlob: path.join(__dirname, "src", "dtos", "**", "*.dto.ts"),
    controllersGlob: path.join(
      __dirname,
      "src",
      "controllers",
      "**",
      "*.controller.ts",
    ),
    swaggerFilePath: path.join(docsDirectoryPath, "swagger.json"),
    base: {
      info: {
        title: "Node Clean Starter",
        version: "1.0.0",
      },
      openapi: "3.0.0",
      servers: [],
    },
  });
}

run();
