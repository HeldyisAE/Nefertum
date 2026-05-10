import './Lobby.css'
import NewReleases from '../components/NewReleases';

function Lobby() {
  return (
    <div className="lobby-wrapper">
      <div className="toplayout">
        <NewReleases/>
      </div>
      <div className="collagenotes-wrapper">
        <h1> adios </h1>
      </div>
      <div className="discover-wrapper">
        <h1> pan </h1>
      </div>
      <div className="carousel-wrapper">
        <h1> men </h1>
      </div>
      <div className="comments">
        <h1> ola </h1>
      </div>
    </div>
  ); 
}

export default Lobby;
