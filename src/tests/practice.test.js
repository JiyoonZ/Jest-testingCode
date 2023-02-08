function ErrorTrigger() {
  throw new Error('Error Message');
}

test('에러가 잘 발생하고 있나요?', () => {
  expect(ErrorTrigger).toThrow();
  expect(ErrorTrigger).toThrow(Error);
  expect(ErrorTrigger).toThrow('Error');
  //  Expected substring: "jdk"
  // Received message:   "you are using the wrong JDK"

  expect(ErrorTrigger).toThrow('Error Messag');
  expect(ErrorTrigger).toThrow(/error/i);
});
