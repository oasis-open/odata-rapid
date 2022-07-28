import test from 'ava'
import { join } from "path";
import { readFileSync } from "fs";
import { validateRSDL } from "../src/components/validateRSDL"


test('Test valid RSDL', async (t) => {
    const file = readFileSync(join(__dirname, "./minimal.graphql"), "utf8");

    t.notThrows(() => {
        validateRSDL(file);
    })
});


test('Test invalid scalar', async (t) => {
    t.throws(() => {
        validateRSDL(`
        type Person {
            ValueInt: Int!
            Condition: Invalid
        }
        `);
    })
});

test('Test missing ID', async (t) => {
    t.throws(() => {
        validateRSDL(`
        type Person {
            ValueInt: Int!
        }
        `);
    })
});





