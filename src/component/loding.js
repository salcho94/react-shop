import Spinner from 'react-bootstrap/Spinner';

const Loding = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

export default Loding;