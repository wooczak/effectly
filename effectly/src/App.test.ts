// Test file for Vitest
import { describe, expect, it } from "vitest";

describe("WHEN the user uses a simple function", () => {
    it("THEN should return the correct result", () => {
        expect(2 + 2).toEqual(4);
    });
});
