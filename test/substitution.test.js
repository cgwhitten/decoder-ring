// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if no alphabet is included", () => {
    const input = 'check';
    const actual = substitution(input);
    const expected = false
    expect(actual).to.equal(expected)
    });
  it("should return false if the alphabet longer than 26 characters", () => {
    const input = 'check';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz@#'
    const actual = substitution(input, alphabet);
    const expected = false
    expect(actual).to.equal(expected)
    });
  it("should return false if the alphabet shorter than 26 characters", () => {
    const input = 'check';
    const alphabet = 'abcdefghijklmnopqrstuvw'
    const actual = substitution(input, alphabet);
    const expected = false
    expect(actual).to.equal(expected)
    });
  it("should return false if the alphabet contains duplicate characters", () => {
    const input = 'check';
    const alphabet = 'abcabcabcabcabcabcabcabcab'
    const actual = substitution(input, alphabet);
    const expected = false
    expect(actual).to.equal(expected)
    });
  it("should properly encode a message", () => {
    const input = 'check';
    const alphabet = 'xy!#@ubcpaln%rtvzioeq&^()+';
    const actual = substitution(input, alphabet);
    const expected = '!c@!l';
    expect(actual).to.eql(expected); 
    });
  it("should ignore capital letters", () => {
    const input = 'CHeCk';
    const alphabet = 'xy!#@ubcpaln%rtvzioeq&^()+';
    const actual = substitution(input, alphabet);
    const expected = '!c@!l';
    expect(actual).to.eql(expected); 
    });
  it("should properly maintain spaces while encoding a message", () => {
    const input = 'c heck';
    const alphabet = 'xy!#@ubcpaln%rtvzioeq&^()+';
    const actual = substitution(input, alphabet);
    const expected = '! c@!l';
    expect(actual).to.eql(expected); 
    });
  it("should properly decode a message", () => {
    const input = '!c@!l';
    const alphabet = 'xy!#@ubcpaln%rtvzioeq&^()+';
    const actual = substitution(input, alphabet, encode = false);
    const expected = 'check';
    expect(actual).to.eql(expected); 
    });
  it("should properly decode a message", () => {
    const input = '! c@!l';
    const alphabet = 'xy!#@ubcpaln%rtvzioeq&^()+';
    const actual = substitution(input, alphabet, encode = false);
    const expected = 'c heck';
    expect(actual).to.eql(expected); 
    });
});
