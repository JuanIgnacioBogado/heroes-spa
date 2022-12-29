import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { HeroCard } from '../components';
import { useForm } from '../../hooks';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(() => searchParams.get('q'), [searchParams.get('q')]);
  const heroes = useMemo(() => (query ? getHeroesByName(query) : []), [query]);

  const { searchText, handleInputChange } = useForm({
    searchText: query || ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    const inputValue = searchText.trim();
    if (!inputValue) return;

    setSearchParams({ q: inputValue });
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {!query && (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          )}

          {query && !heroes?.length && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              No hero with <b>{query}</b>
            </div>
          )}

          {Boolean(heroes.length) && (
            <div className="d-grid gap-3">
              {heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
