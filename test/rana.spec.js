/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../rana.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<rana></rana>");
    assert.strictEqual(_element.hello, "Hello World!");
  });
});
