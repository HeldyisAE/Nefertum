import './Header.css';
import LogoButton from './LogoButton'
import SearchBar from './SearchBar';

function Header() {

  return (
    <div className="header">
        <div className="left">
            <LogoButton />  
        </div>

        <div className="center">
            <SearchBar/>
        </div>

        <div className="right">
            <h1>Menu</h1>
        </div>
    </div>
  );
}

export default Header;