const fn = require("./fn");

/**
 * 1. toBe()
 */
test("1더하기 2는 3이야", () => {
  expect(fn.add(1, 2)).toBe(3);
});

//아래코드는 error 객체나 배열을 재귀적으로 돌면서 toEqual 을 사용해야함
test("이름과 나이를 전딜받아 객체를 반환", () => {
  expect(fn.makeUser("Zeeyoon", 27)).toBe({
    name: "Zeeyoon",
    age: 27,
  });
});

/**
 * 2. toEqual
 */
// toEqual 을 사용해서 깊은 비교
test("이름과 나이를 전달받아 객체를 반환", () => {
  expect(fn.makeUser("Zeeyoon", 27)).toEqual({
    name: "Zeeyoon",
    age: 27,
  });
});

/**
 * toStrictEqual
 */
// 좀더 엄격하게 검사하기위해서는 toStrictEqual() 사용 (undefined 값까지 엄격하게 검사)
test("이름과 나이와 성별을 전달받아 객체를 반환", () => {
  expect(fn.makeUser("Zeeyoon", 27)).toStrictEqual({
    name: "Zeeyoon",
    age: 27,
  });
});
