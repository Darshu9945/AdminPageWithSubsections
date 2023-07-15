import React, { useState, useEffect } from "react";
import Table1 from "./Table/Table1";


const Orders = (props) => {
// const [table1,settable1]=useState([])
// const [table2,settable2]=useState([])
// const [table3,settable3]=useState([])
// useEffect(()=>{
//     console.log(props.pass,"kb")
//     props.pass.map((item) => {
//         if(item.table=="Table1"){
//                settable1((prevdata)=>{
//                 return [item,...prevdata]
//                })
              
//         }
//         else if(item.table=="Table2"){
//             settable2((prevdata)=>{
//              return [item,...prevdata]
//             })
//      }
//      else if(item.table=="Table2"){
//         settable3((prevdata)=>{
//          return [item,...prevdata]
//         })
//     }
//     })
// },[props.pass.table])

    return (
        <div>
<div>
    <h1>tabl1</h1>
    {props.table1.map((item)=>{
        return <div>{item.table}</div>
    })}
</div>
<div>
    <h1>tabl2</h1>
    {props.table2.map((item)=>{
      return  <div>{item.table}</div>
    })}
</div>
<div>
    <h1>tabl3</h1>
    {props.table3.map((item)=>{
     return   <div>{item.table}</div>
    })}
</div>

</div>
    )
            
        }

  

export default Orders