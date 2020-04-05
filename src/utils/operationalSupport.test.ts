import { add } from "./operationalSupport"

test("Adds two numbers correctly", () => {
    expect(add(2,3)).toEqual(5);
})