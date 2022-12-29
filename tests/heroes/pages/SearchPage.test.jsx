import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchPage } from '../../../src/heroes';

const mockedSetSearchParams = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [
    jest.requireActual('react-router-dom').useSearchParams()[0],
    mockedSetSearchParams
  ]
}));

describe('SearchPage', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should to show correctly whit default values', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should to show Batman and input whit the queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search a hero/i);
    expect(input.value).toBe('batman');

    const h5 = screen.getByRole('heading', { name: /batman/i });
    expect(h5).toBeTruthy();

    const img = screen.getByAltText(/batman/i);
    expect(img.src).toContain('/heroes/dc-batman.jpg');
  });

  test('should to show an error if hero not found', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=calamardo']}>
        <SearchPage />
      </MemoryRouter>
    );

    const alertError = screen.getByText(/no hero with/i);
    expect(alertError).toBeTruthy();
  });

  test('should to call setSearchParams', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search a hero/i);
    fireEvent.input(input, { target: { value: 'superman' } });
    fireEvent.submit(input);

    expect(mockedSetSearchParams).toBeCalledWith({ q: 'superman' });
  });
});
