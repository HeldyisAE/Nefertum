import './Lobby.css'
import NewReleases from '../components/NewReleases';
import CollageNotes from '../components/CollageNotes';
import DiscoverSection from '../components/discoverSection';
import CategoryCarousel from '../components/CategoryCarousel';

function Lobby() {
  return (
    <div className="lobby-wrapper">
      <div className="toplayout">
        <NewReleases/>
      </div>
      <div className="collagenotes-wrapper">
        <CollageNotes/>
      </div>
      <div className="discover-wrapper">
        <DiscoverSection/>
      </div>
      <div className="carousel-wrapper">
        <CategoryCarousel/>
      </div>
    </div>
  ); 
}

export default Lobby;
