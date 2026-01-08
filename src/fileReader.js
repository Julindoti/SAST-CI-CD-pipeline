import { readFile } from "fs/promises";
import path from "path";

export default async function fileReader(tokenName) {
  const filePath = path.join(import.meta.dirname, `${tokenName}.json`);
  const reader = await readFile(filePath, "utf8");
  const jsonParser = JSON.parse(reader);
  console.log(jsonParser);
}
