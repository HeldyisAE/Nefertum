import './Header.css';
import LogoButton from './LogoButton'

function Header() {

  return (
    <div className="header">
        <div className="left">
            <LogoButton />  
        </div>

        <div className="center">
            <h1>Search</h1>
        </div>

        <div className="right">
            <h1>Menu</h1>
        </div>
    </div>
  );
}

export default Header;