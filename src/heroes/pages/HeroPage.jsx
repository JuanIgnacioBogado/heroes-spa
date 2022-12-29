import { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) return <Navigate replace to="/" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <Link to={-1} className="btn btn-outline-primary">
          Back
        </Link>
      </div>
    </div>
  );
};
