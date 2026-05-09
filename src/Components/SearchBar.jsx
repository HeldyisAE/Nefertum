import { IoSearch } from "react-icons/io5";
import './SearchBar.css'

function SearchBar() {

    return (
        <div className="search-wrapper">
            <button className="search-button">
                <IoSearch className="search-icon"/>
            </button>

            <input 
                type="text"
                placeholder="Find perfumes, accords, houses, collections..."
                className="searchbar"
                aria-label="Search"
            />
        </div>
    );
}

export default SearchBar;