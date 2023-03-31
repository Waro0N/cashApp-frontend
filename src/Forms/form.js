import React, { useState } from 'react'
import "../styles/style.css"

const Form = () => {
    const categories = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, reason: 'This is reason' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, reason: 'This is reason' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, reason: 'This is reason' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, reason: 'This is reason' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 26, reason: 'This is reason' },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, reason: 'This is reason' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, reason: 'This is reason' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, reason: 'This is reason' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, reason: 'This is reason' },
    ];

    const [input, setinput] = useState({
      debit:"",
      credit:"",
      reason:"",
      date:"",
      category:""
    });

    
    const [records, setRecords] = useState([]);

    const handelInput=(e)=>{
      const name= e.target.name;
      const value=e.target.value;
      setinput({...input, [name] : value} )

    }



    const handelSubmit =(e)=>{
        e.preventDefault();
        const newRecord ={ ...input, id:new Date().getTime().toString()}
          setRecords([...records, newRecord]);
      }


  return (
    <>
    <form action="" onSubmit={handelSubmit} >

<label htmlFor="date">Date: </label>
<input type="date" 
value={input.date}
onChange={handelInput}
name='date' id='date' />


<label htmlFor="debit">Debit: </label>
<input type="text" placeholder='Debit'
value={input.debit}
onChange={handelInput}
name='debit' id='debit' />



<label htmlFor="credit">Credit: </label>
<input type="text" placeholder='Credit'
value={input.credit}
onChange={handelInput}
name='credit' id='credit' />


<label htmlFor="Reason">Reason: </label>
<input type="text" placeholder='Reason'
value={input.reason}
onChange={handelInput}
name='reason' id='Reason' />


<label htmlFor="Category">Category: </label>
<select name="category" id="category"
value={input.category}
onChange={handelInput}
>

<option value="">--Select Category--</option>

{
categories.map((get,index)=>(
    <option value={get.age} key={index}>{get.age}</option>
))
}

</select>



<input type="submit" />
</form>

  <div>
    {
      records.map((curElem) =>{

        return(
          <div className='show'>
            
            <p> {curElem.date}</p>
          <p> {curElem.debit}</p>
            <p> {curElem.credit}</p>
            <p> {curElem.reason}</p>
            <p> {curElem.category}</p>
            </div>
        )

      })
    }
  </div>
    </>
  )
}

export default Form

