import cameraMen from '../assets/1.jpg';
function MyImage() {
  return (
    <div className='card'>
      <h3>Name</h3>
      <img src={cameraMen} alt='stuff' />
    </div>
  );
}

export default MyImage;
