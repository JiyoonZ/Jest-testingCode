const fn = require("./fn");

//toBeNull
//toBeUndefined
//toBeDefined
test("null 은 null 입니다.", () => {
  expect(null).toBeNull();
});

// toBeTruty
// toBeFalsy
test("0은 false 입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});
test("빈문자열이 아닌 문자열은 true 입니다.", () => {
  expect(fn.add("Hello", " World!")).toBeTruty();
});
