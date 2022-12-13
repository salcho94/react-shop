import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
import mainImg from './img/bg.png';
import { Button ,Navbar,Nav ,Container,Row ,Col , Card } from 'react-bootstrap';
import Item from './page/item'
import Detail from './page/detail'
import Loding from './component/loding'
import data from './data';
import { Routes , Route , Link, useNavigate, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function App() {
  let [loding , setLoding] = useState(false);
  let [ shoes ,setShoes] = useState(data);
  let [moreBtn, setMoreBtn] = useState(1);
  let navigate = useNavigate();

  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="" onClick={() => navigate('/')}>salcho-shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav>
                        <Nav.Link href="" onClick={() => {navigate('/')}}>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Routes>
            {/*라우트는 페이지라고 생각하면 된다 .*/}
            <Route path="/" element={
                <>
                    <div className="main-bg" style={{ backgroundImage : 'url('+mainImg+')'}}/>
                    <Container>
                        <Row>
                            {
                                shoes.map((item,index) => {
                                    return (<Item item = {item} key={index} navigate={navigate} />)
                                })
                            }
                        </Row>
                        {loding && <Loding/>}
                    </Container>

                    {moreBtn < 3 &&
                        <button className="btn btn-primary m-5" onClick={ () => {
                            setLoding(loding = true);
                        axios.get(`https://codingapple1.github.io/shop/data${moreBtn+1}.json`)
                            .then((data) => {
                                let newShoes = [...shoes, ...data.data];
                                setMoreBtn(moreBtn + 1);
                                setShoes(newShoes);
                                setLoding(loding = false);
                            })
                            .catch(()=>{
                                alert("데이터가 존재하지 않습니다 !!");
                                setLoding(loding = false);
                            })
                    }}> MORE</button>
                    }
                </>

            } />
            <Route path="/detail/:id" element={<Detail  data = {data} navigate={navigate}/>} />
            <Route path="/event" element={<Event />} >
                <Route path="one" element={<div>첫 주문시 양배추 서비스</div>} />
                <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
            </Route>
            <Route path="*" element={<div>이딴 페이지는 없어 !!!</div>} />
        </Routes>


        <Card className="text-center" bg="dark" >
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    </div>
  );
}


function Event(){
    return (
        <div>
            <h4>Today Event!!</h4>
            <Outlet></Outlet>
        </div>
    )
}
export default App;
