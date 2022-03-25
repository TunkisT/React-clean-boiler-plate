import TicketCard from './TicketCard';
import photo from '../assets/2.jpg';

const travelData = [
  {
    title: 'New York',
    image: photo,
    date: 'Fri 27 Nov 2016',
  },
  {
    title: 'Paris',
    image: photo,
    date: 'Wen 15 Dec 2020',
  },
  {
    title: 'San Francisco',
    image: photo,
    date: 'Sat 03 Nov 2011',
  },
];

function TravelList() {
  return (
    <div className='tickets-div'>
      <TicketCard
        title={travelData[0].title}
        image={travelData[0].image}
        date={travelData[0].date}
      />
      <TicketCard
        title={travelData[1].title}
        image={travelData[1].image}
        date={travelData[1].date}
      />
      <TicketCard
        title={travelData[2].title}
        image={travelData[2].image}
        date={travelData[2].date}
      />
    </div>
  );
}

export default TravelList;
