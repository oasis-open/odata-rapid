import test from 'ava'
import { join } from "path";
import { readFileSync } from "fs";
import { transformToCSDLJSON } from "../src/components/transform"


test('Test multiple ID keys', async (t) => {
  const file = readFileSync(join(__dirname, "./multiplekeys.graphql"), "utf8");
  const json: any = transformToCSDLJSON(file);

  t.deepEqual(json.RapidModels.Person.$Key, [
    "UserName",
    "FirstName"
  ])
});



