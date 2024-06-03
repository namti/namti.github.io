import { NavLink, NavLinkProps } from 'react-router-dom';
import Logo from '../assets/logo.svg?component';

const NavBar = () => {
  const navLinkProps: Partial<NavLinkProps> = { className: ({ isActive }) => `tab ${isActive ? 'tab-active border-b-2' : ''}` };

  return (
    <div className="flex align-middle justify-between px-3 py-3">

      <div>
        <Logo />
      </div>

      <div role="tablist" className="tabs">

        <NavLink
          role="tab"
          to="/"
          { ...navLinkProps }
        >Home</NavLink>

        <NavLink
          role="tab"
          to="/about"
          { ...navLinkProps }
			 >About Me</NavLink>

        <NavLink
          role="tab"
          to="/works"
          { ...navLinkProps }
			 >Works</NavLink>

        <NavLink
          role="tab"
          to="/cv"
          { ...navLinkProps }
        >CV</NavLink>

      </div>
    </div>
  );
};

export default NavBar;