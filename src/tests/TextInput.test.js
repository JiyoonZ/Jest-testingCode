import { render, screen } from '@testing-library/react';
import TextInput from '../components/TextInput';
import { SIGN_IN } from '../utils/constants';

it('input 태그', () => {
  const type = 'email';
  render(<TextInput type={type} />);
  const input = screen.getByPlaceholderText('이메일 주소를 입력하세요.');
  expect(input).toBeInTheDocument();
});
