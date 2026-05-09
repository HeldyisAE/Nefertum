import './Header.css';
import LogoButton from './LogoButton'
import SearchBar from './SearchBar';
import UserButton from './UserButton';

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
            <UserButton/>
        </div>
    </div>
  );
}

export default Header;