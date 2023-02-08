import { render, screen } from '@testing-library/react';
import App from '../App';

it('로그인 화면 렌더링', () => {
  render(<App />);
  const linkElement = screen.getByText('로그인');
  expect(linkElement).toBeInTheDocument();
});
