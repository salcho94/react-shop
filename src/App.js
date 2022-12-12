import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button ,Navbar,Nav ,Container,Row ,Col , Card } from 'react-bootstrap';
import Item from './page/item'
import Detail from './page/detail'
import data from './data';
import { Routes , Route , Link, useNavigate, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [shoes] = useState();
  let navigate = useNavigate();

  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">salcho-shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="" onClick={() => {navigate('/')}}>Home</Nav.Link>
                        <Nav.Link href="" onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Routes>
            {/*라우트는 페이지라고 생각하면 된다 .*/}
            <Route path="/" element={
                <>
                <div className="main-bg" style={{ backgroundImage : 'url(https://unsplash.it/1600/400?cart=9)'}}/>
                <Container>
                    <Row>
                        {
                            data.map((item,index) => {
                                return (<Item item = {item} key={index}/>)
                            })
                        }
                    </Row>
                </Container>
                </>
            } />
            <Route path="/detail" element={<Detail />} />
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
