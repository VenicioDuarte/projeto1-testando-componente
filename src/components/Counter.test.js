import React from 'react'; // Importar o React
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

test('deve exibir "Contagem: 0" inicialmente e "Contagem: 1" após clicar no botão', () => {
  render(<Counter />);

  const countText = screen.getByText(/Contagem: 0/i);
  expect(countText).toBeInTheDocument();

  const incrementButton = screen.getByText(/Incrementar/i);
  fireEvent.click(incrementButton);

  const updatedCountText = screen.getByText(/Contagem: 1/i);
  expect(updatedCountText).toBeInTheDocument();
});
