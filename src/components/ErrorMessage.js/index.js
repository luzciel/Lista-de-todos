import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ErrorMessage = ({ closeError }) => {
  return (
    <ToastContainer className="p-2" position="middle-center">
      <Toast
        className="d-inline-block m-2 p-2"
        bg="danger"
        onClose={closeError}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body className="text-white fw-bolder">
          Sorry, an error occurred. Try again
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ErrorMessage;
