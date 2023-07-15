import React,{useState,useEffect} from 'react';
import AddOrder from './Components/AddOrder';
import Orders from './Components/Orders';


function App() {
  const Dummy_orders={}
  const [table11,settable1]=useState([])
  const [table22,settable2]=useState([])
  const [table33,settable3]=useState([])

  const AddProductHandler=(table1,table2,table3)=>{
    settable1(table1)
    settable2(table2)
    settable3(table3)
    
  
  }
  let k2=[]
  console.log(localStorage)
  Object.keys(localStorage).forEach((key) => {
    let k1=localStorage.getItem(key);
    console.log(JSON.parse(k1)[0].table,key)
    k2.push(JSON.parse(k1)[0])
//     if(JSON.parse(k1)[0].table=="Table1"){
//       settable1((prevdata)=>{
//        return [JSON.parse(k1)[0],...prevdata]
//       })
     
// }
// else if(JSON.parse(k1)[0].table=="Table2"){
//    settable2((prevdata)=>{
//     return [JSON.parse(k1)[0],...prevdata]
//    })
// }
// else if(JSON.parse(k1)[0].table=="Table3"){
// settable3((prevdata)=>{
// return [JSON.parse(k1)[0],...prevdata]
// })
// }
  })
  let k3=localStorage.length
console.log(k3,"hvc")
  useEffect(()=>{
    console.log(k2,"kb")
   k2.map((item) => {
        if(item.table=="Table1"){
               settable1((prevdata)=>{
                return [item,...prevdata]
               })
              
        }
        else if(item.table=="Table2"){
            settable2((prevdata)=>{
             return [item,...prevdata]
            })
     }
     else if(item.table=="Table3"){
        settable3((prevdata)=>{
         return [item,...prevdata]
        })
    }
    })
},[])
  console.log(k3)
  return(
    <React.Fragment>
       <AddOrder onAdd={AddProductHandler}/>
       <Orders table1={table11}  
       table2={table22}  
       table3={table33}  
       />
       
    </React.Fragment>
  )
  
}

export default App;
