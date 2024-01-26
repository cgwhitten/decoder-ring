// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return a string", () => {
      const input = 'check';
      const actual = typeof polybius(input);
      const expected = 'string';
      expect(actual).to.equal(expected);
    });
    it("should return false if the number of characters in the input while decoding is odd", () => {
        const input = '31325131525';
        const actual = polybius(input, decode = false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = 'Check';
        const actual = polybius(input);
        const expected = '3132513152'
        expect(actual).to.eql(expected);
    });
    it("should encode a message properly", () => {
        const input = 'check';
        const actual = polybius(input);
        const expected = '3132513152';
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces properly when encoding", () => {
        const input = 'c heck';
        const actual = polybius(input);
        const expected = '31 32513152';
        expect(actual).to.eql(expected);
    });
    it("should encode both i and j as 42", () => {
        const input = 'its jumbled';
        const actual = polybius(input);
        const expected = '424434 42542321135141';
        expect(actual).to.eql(expected);
    });
    it("should decode a message properly", () => {
        const input = '3132513152';
        const actual = polybius(input, encode = false);
        const expected = 'check';
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces properly when decoding", () => {
        const input = '31 32513152';
        const actual = polybius(input, decode = false);
        const expected = 'c heck';
        expect(actual).to.equal(expected);
    });
    it("should decode 42 as (i/j)", () => {
        const input = '424434 42542321135141';
        const actual = polybius(input, decode = false);
        const expected = '(i/j)ts (i/j)umbled';
        expect(actual).to.eql(expected);
    });
    
});  