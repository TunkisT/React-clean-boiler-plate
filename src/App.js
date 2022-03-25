import './App.css';
import ImageList from './components/ImageList';
import MainHeading from './components/MainHeading';
import MainText from './components/MainText';
import SubTitle from './components/Subtitle';
// import TicketCard from './components/TicketCard';
import TravelList from './components/TravelList';

function App() {
  return (
    <div className='app container'>
      <MainHeading />
      <SubTitle />
      <MainText />
      <ImageList />
      {/* <TicketCard /> */}
      <TravelList/>
    </div>
  );
}

export default App;
