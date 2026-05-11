import './UserButton.css'
import { LuUserRound } from "react-icons/lu";


function UserButton() {

    return (
        <div className="user-section">
            <button className="userbutton">
                <LuUserRound className="user-icon"/>
            </button>
        </div> 
    );
}

export default UserButton;