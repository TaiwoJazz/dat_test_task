import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;
import loginIcon from '../../../assets/navbar/Vector.svg';
import menuIcon from '../../../assets/navbar/menu.svg';

type Link = {
  name: string;
  to: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className='navbar_wrapper'>
      <div className='navbar'>
        <ul>
          {links.map((link: Link) => {
            return (
              <li key={link.to}>
                <NavLink className='navLink' to={link.to}>
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className='divider'/>
        <div className='login'>
          <img src={loginIcon} alt='Login Icon' />
          <p>Login | Registration</p>
        </div>
        <span className='menuIcon'>
          <img src={menuIcon} alt='Login Icon' />
        </span>
      </div>
    </div>
  );
};

const NavBar: React.FC<{}> = () => {
  return (
    <div className='navbar'>
      <Links links={links} />
    </div>
  );
};

export default NavBar;
