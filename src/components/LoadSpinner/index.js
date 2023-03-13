import Spinner from 'react-bootstrap/Spinner';

const LoadSpinner = () => {
  return (
    <div className="p-5 d-flex justify-content-center" >
      <Spinner className='p-5 float-center' animation="border" variant="primary" role="status" size="lg">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>

  );
}

export default LoadSpinner;