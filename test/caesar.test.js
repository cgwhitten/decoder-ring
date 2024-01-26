
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return false if the shift is 0", () => {
      const input = 'check';
      const shift = 0;
      const actual = caesar(input, shift);
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift is too high", () => {
        const input = 'check';
        const shift = 26;
        const actual = caesar(input, shift);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift is too low", () => {
        const input = 'check';
        const shift = -27;
        const actual = caesar(input, shift);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should encode a message properly", () => {
        const input = 'check';
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = 'fkhfn';
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const input = 'Check';
        const shift = 3
        const actual = caesar(input, shift);
        const expected = 'fkhfn'
        expect(actual).to.eql(expected);
    });
    it("should decode a message properly", () => {
        const input = 'hire';
        const shift = 3;
        const actual = caesar(input, shift, encode = false);
        const expected = 'efob';
        expect(actual).to.eql(expected);
    });
    it("should handle letters shifting at the beginning of the aphabet", () => {
        const input = 'check';
        const shift = 3;
        const actual = caesar(input, shift, encode = false);
        const expected = 'zebzh';
        expect(actual).to.eql(expected);
    });
    it("should handle letters shifting at the end of the aphabet", () => {
        const input = 'zebra';
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = 'cheud';
        expect(actual).to.eql(expected);
    });
  it("should handle spaces appropriately", () => {
        const input = 'z ebra';
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = 'c heud';
        expect(actual).to.eql(expected);
  });
});
