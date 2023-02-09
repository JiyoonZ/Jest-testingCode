import TextInput from './components/TextInput';

function App() {
  console.error('에러 콘솔');
  console.warn('콘솔 찍어보자');
  console.log('test');

  return (
    <>
      <h1>로그인</h1>
      <TextInput />
    </>
  );
}

export default App;
