import { useParams } from 'react-router-dom';
import styled from 'styled-components'

let YellowBtn = styled.button`
              background: ${props => props.bg};
              color:${props => props.bg == 'white' ? 'black' : 'white'};
              padding:10px;
            `
let BlackDiv = styled.div`
                background: black;
              padding: 10px;
`
//   <YellowBtn bg="white" >tests</YellowBtn>
// style이 다른 페이지로 오염되지 않는다
// loding 속도의 단축이 일어난다 로딩시간의 향상

const Detail = (props) => {

   let {id} =  useParams();
   let openYn = false;
   props.data.map((result) => {
       if(result.id == id){
           openYn = true ;
       }
   })
    console.log(openYn);
 return (
     <>
     {openYn ?
         <div className="container">
             <div className="row">
                 <div className="col-md-6">
                     <img src={props.data[id].src} width="80%" />
                 </div>
                 <div className="col-md-6">
                     <h4 className="pt-5">{props.data[id].title}</h4>
                     <p>{props.data[id].content}</p>
                     <p>{props.data[id].price}</p>
                     <button className="btn btn-warning" onClick={() => props.navigate(-1)}>취소</button>
                     <button className="btn btn-danger">주문하기</button>
                 </div>
             </div>
         </div>
     :
         <div className="container">
             <div className="row">
                <div><h1>해당 상품은 존재하지 않습니다.</h1></div>
             </div>
         </div>
     }
     </>

 )
}

export default Detail;