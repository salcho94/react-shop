import {Col} from "react-bootstrap";

const Item = (props) => {
    return (
        <Col onClick={() => {props.props.navigate('/detail/'+props.item.id)}}>
            <img src={props.item.src} width="80%" />
            <h4>{props.item.title}</h4>
            <p>{props.item.content}</p>
            <p>가격:  {props.item.price}</p>
        </Col>
    )
}

export default Item;