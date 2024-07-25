let myModule = require("./main")

test("caps", () => {
    expect(myModule.capitalize("dog")).toBe("Dog");
    expect(myModule.capitalize("d")).toBe("D");
    expect(myModule.capitalize("longword")).toBe("Longword");
    expect(myModule.capitalize("")).toBe("");
})

test("rev", () => {
    expect(myModule.reverse("dog")).toBe("god");
    expect(myModule.reverse("d")).toBe("d");
    expect(myModule.reverse("longword")).toBe("drowgnol");
    expect(myModule.reverse("rAnDomCaPS")).toBe("SPaCmoDnAr");
    expect(myModule.reverse("")).toBe("");
})

test("calc", () => {
    expect(myModule.calculator.add(1, 2)).toBe(3);
    expect(myModule.calculator.add(-1, 2)).toBe(1);
    expect(myModule.calculator.add(1, 0)).toBe(1);
    expect(myModule.calculator.subtract(1, 2)).toBe(-1);
    expect(myModule.calculator.subtract(-1, 2)).toBe(-3);
    expect(myModule.calculator.subtract(1, 0)).toBe(1);
    expect(myModule.calculator.multiply(5, 2)).toBe(10);
    expect(myModule.calculator.multiply(-1, 2)).toBe(-2);
    expect(myModule.calculator.multiply(1, 0)).toBe(0);
    expect(myModule.calculator.divide(1, 2)).toBe(0.5);
    expect(myModule.calculator.divide(-1, 2)).toBe(-0.5);
    expect(myModule.calculator.divide(8, 2)).toBe(4);
})

test("caesar", () => {
    expect(myModule.caesarCipher("test", 1)).toBe("uftu");
    expect(myModule.caesarCipher("xyz", 3)).toBe("abc");
    expect(myModule.caesarCipher("", 1)).toBe("");
    expect(myModule.caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(myModule.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(myModule.caesarCipher("12", 1)).toBe("12");
})

test("array", () => {
    expect(myModule.analyzeArray([1,8,3,4,2,6])).toEqual({average:4, min:1, max:8, length:6})
})