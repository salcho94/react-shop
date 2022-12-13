import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import DetailTaps from "./detailTap";
import styled from 'styled-components'
import {forEach} from "react-bootstrap/ElementChildren";

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
    let [count ,setCount] = useState(5);
    let [itemCount ,setItemCount] = useState(0);

    useEffect(() => {
        let time;

        if (isNaN(itemCount) == true){
            alert('숫자만 입력이 가능합니다');
            document.getElementById('itemCount').value = 0;
        }

        if(count > 0){
            time =  setTimeout(() => {setCount(count - 1)}, 1000);
        }

        return () => {
            clearTimeout(time)
            // useEffect 동작전에 기존 timer 제거 한다.
        }
        console.log('//mount or update 시 실행 !!')
    },[count,itemCount]);


   let {id} =  useParams();
   let openYn = false;
   props.data.map((result) => {
       if(result.id == id){
           openYn = true ;
       }
   })

 return (
     <>
     {openYn ?
         <div className="container">
             {
             count > 0 && <div className="alert alert-warning" id="saleDiv">
                 {count} 초 ⏲ 이내 구매시 할인 됩니다 !!😍
             </div>
             }
             <div className="row">
                 <div className="col-md-6">
                     <img src={props.data[id].src} width="80%" />
                 </div>
                 <div className="col-md-6">
                     <h4 className="pt-5">{props.data[id].title}</h4>
                     <p>{props.data[id].content}</p>
                     <p>수량 :<input type="text" id="itemCount" defaultValue={itemCount} onChange={(e) => { setItemCount(e.target.value)}}/></p>
                     <p>{props.data[id].price}</p>
                     <button className="btn btn-warning" onClick={() => props.navigate(-1)} >취소</button>
                     <button className="btn btn-danger">주문하기</button>
                    {/* {count}
                     <button className="btn btn-danger" onClick={() => {setCount(count+1)}}>update</button>*/}
                 </div>
             </div>
             <div className="row">
                 <DetailTaps />
             </div>
         </div>
     :
         <div className="container">
             <div className="row">
                <div className="col-md-12">
                    <h1>해당 상품은 존재하지 않습니다.</h1>
                </div>
             </div>
         </div>
     }
     </>

 )
}

export default Detail;