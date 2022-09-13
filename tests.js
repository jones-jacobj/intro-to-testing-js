// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe(
    'sayHello', function() {
        it('should be a defined function', function () {
            expect(typeof sayHello).toBe('function');
        });
        it('should return Hello + name', function () {
            expect(typeof sayHello()).toBe("string")
        });
        it('should return the string "Hello, Jane!" when executed',function(){
            expect(sayHello("Jane")).toBe("Hello, Jane!");
        });
        it('should return the string "Hello, Alex!" when executed',function(){
            expect(sayHello("Alex")).toBe("Hello, Alex!");
        });
        it('should return the string "Hello, Pat!" when executed',function(){
            expect(sayHello("Pat")).toBe("Hello, Pat!");
        });
    });

describe ('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should be true if the input is 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should be false if the input is 6', function () {
        expect(isFive(6)).toBe(false);
    });
});

describe('isEven', function() {
    it('isEven should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true if passed 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true is -4 is passed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with 3', function(){
        expect(isEven(3)).toBe(false);
    });
    it("returns false when 'banana' is passed",function(){
        expect(isEven('banana')).toBe(false);
    });
    it("returns true when 8 is passed",function(){
        expect(isEven(8)).toBe(true);
    });
    it("returns false when Infinity is passed",function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('returns false when booleans input', function(){
        expect(isEven(true)).toBe(false);
    });
});

describe('isVowel', function(){
    it('should be a defined function', function(){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function(){
        expect(typeof isVowel()).toBe('boolean');
    });
    it("should return true if passed 'a'",function(){
        expect(isVowel('a')).toBe(true);
    });
    it("should return true if passed 'A'", function(){
        expect(isVowel('A')).toBe(true);
    });
    it("should return false if passed 'y'", function(){
        expect(isVowel('y')).toBe(false);
    });
    it("should return false if passed 4",function(){
        expect(isVowel(4)).toBe(false);
    });
    it("should return false if passed true",function(){
        expect(isVowel(true)).toBe(false);
    });
    it("should return false if passed false", function(){
        expect(isVowel(false)).toBe(false);
    });
});