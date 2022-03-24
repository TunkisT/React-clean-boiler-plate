import newYork from '../assets/2.jpg';
import Button from './BlackBtn';

const data = {
  image: newYork,
  title: 'New York',
  date: 'Fri 27 Nov 2016',
  para: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
};

const TicketImage = () => (
  <img src={data.image} alt='york' className='ticket-image' />
);

function TextPart() {
  return (
    <div className='ticket-text'>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p>{data.para}</p>
    </div>
  );
}



function TicketCard() {
  return (
    <div className='tickets-div'>
      <div className='ticket-div'>
        <TicketImage />
        <TextPart />
        <Button />
      </div>
    </div>
  );
}
export default TicketCard;
