import { transformToCSDLJSON } from "../../src/components/transform"
import { readFileSync } from "fs";


test('Test minimal set of the RSDL components: RapidID and Required Flags', async () => {
  const file = readFileSync("./minimal.graphql", "utf8");
  expect(transformToCSDLJSON(file)).toMatchSnapshot();
});



