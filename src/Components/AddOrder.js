import React,{useState,useEffect} from "react";


const AddOrder=(props)=>{

    const[Id,setId]=useState('')
    const [Price,setPrice]=useState('')
    const [Name,setName]= useState('')
    const [Table,setTable] = useState('Table1')
    const IdChangeHandler=(event)=>{
        setId(event.target.value)
    }

    const priceChangeHandler=(event)=>{
        setPrice(event.target.value)
    }

    const  nameChangeHandler=(event)=>{
        setName(event.target.value)
    }

    const TableChangeHandler=(event)=>{
        setTable(event.target.value)
       
    }

    const SubmitHandler=(event)=>{
        event.preventDefault()
        const order=[{
            id: Id,
            name: Name,
            price: Price,
            table: Table
        }]
        
      
        localStorage.setItem(JSON.stringify(order[0].id),JSON.stringify(order))
        setName('')
        setPrice('')
        setId('')
        
      
     
        
        
    }
    // useEffect(()=>{
        
    //   const kb=  setTimeout(() => {
    //     console.log("kb")
    //         orders.map((item) => {
    //             if(item.table=="Table1"){
    //                    settable1((prevdata)=>{
    //                     return [item,...prevdata]
    //                    })
                      
    //             }
    //             else if(item.table=="Table2"){
    //                 settable2((prevdata)=>{
    //                  return [item,...prevdata]
    //                 })
    //          }
    //          else if(item.table=="Table2"){
    //             settable3((prevdata)=>{
    //              return [item,...prevdata]
    //             })
    //         }
    //         })
    //     },500);
    //     return ()=>{
    //         clearTimeout(kb)
    //     }
       
    // },[Price])
    return(
     <React.Fragment>
        <form onSubmit={SubmitHandler}>
            <div>
                <label htmlFor="id">Order Id:</label>
                <input id="id" type="number" value={Id} onChange={IdChangeHandler} />
            </div>
            <div>
                <label htmlFor="price">Choose Price(Rs):</label>
                <input id="price" type="number" value={Price} onChange={priceChangeHandler} />
            </div>
            <div>
                <label htmlFor="name">Choose Dish:</label>
                <input id="name" type="text" value={Name} onChange={nameChangeHandler} />
            </div>
            <div>
                <label htmlFor="Table">Choose Table:</label>
                <select name="Table" id="Table" value={Table} onChange={TableChangeHandler}>
                    <option value="Table1">Table 1</option>
                    <option value="Table2">Table 2</option>
                    <option value="Table3" >Table 3</option>
                </select>
            </div>
            <button type="submit">Add to bill</button>
     </form>
    
     </React.Fragment>
        
    )
}

export default AddOrder