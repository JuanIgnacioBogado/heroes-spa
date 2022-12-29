import { Link, NavLink /* , useNavigate */ } from 'react-router-dom';
import { useAuthContext } from '../../auth';

export const Navbar = () => {
  const { logout, user } = useAuthContext();
  // const navigate = useNavigate();

  // const onNavigate = () => {
  //   logout();
  //   navigate('login', { replace: true });
  // };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Heroes SPA
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="marvel">
              Marvel
            </NavLink>
            <NavLink className="nav-item nav-link" to="dc">
              DC
            </NavLink>
            <NavLink className="nav-item nav-link" to="search">
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            {user && (
              <span className="nav-item nav-link text-primary">
                {user?.name}
              </span>
            )}
            <Link
              replace
              to="login"
              className="nav-item nav-link"
              onClick={logout}
            >
              Logout
            </Link>
            {/* <button className="nav-item nav-link" onClick={onNavigate}>
              Logout
            </button> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
