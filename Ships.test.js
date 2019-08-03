import makeShips from "./Ships";

describe("makeShips", () => {
  it("create a ship object", () => {
    expect(makeShips()).toEqual(expect.objectContaining("5"));
  });
});
