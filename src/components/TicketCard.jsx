import Button from './BlackBtn';

const data = {
  para: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
};

function TicketCard(props) {
  console.log('props ===', props.image);
  return (
    <div className='ticket-div'>
      <img src={props.image} alt='york' className='ticket-image' />
      <div className='ticket-text'>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{data.para}</p>
      </div>
      <Button />
    </div>
  );
}

export default TicketCard;
