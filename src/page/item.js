import {Col} from "react-bootstrap";
import shoes3 from '../img/shoes3.jpg'
const Item = (props) => {
    return (
        <Col className="col-4" onClick={() => {props.navigate('/detail/'+props.item.id)}}>
            <img src={!props.item.src ? shoes3 :props.item.src} width="80%" />
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
            <p>가격:  {props.item.price}</p>
        </Col>
    )
}

export default Item;