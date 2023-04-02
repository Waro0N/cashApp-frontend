import React, { useEffect, useState } from 'react'
import "../styles/style.css"
import axios, { Axios } from 'axios';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';



const Form = () => {

  const [input, setinput] = useState({
    debit: "0",
    credit: "0",
    reason: "",
    date: "",
    category_dashboard: "",
    created_by: 2
  });


  const [data, setData] = useState([]);
  const [category_add, setCategory_add] = useState({
    category_name: '',
    created_by: '2'
  })





  const [open, setOpen] = useState(false)
  const [records, setRecords] = useState([]);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/categories/user-categories/?created_by=2")
      .then((res) => setData(res.data)

      )
  }, [open])


  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinput({ ...input, [name]: value })

  }



  const handelSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...input, id: new Date().getTime().toString() }
    axios
      .post("http://127.0.0.1:8000/cash-flow/dashboard/", newRecord)
      .then((res) => setinput.reset())
      .catch((err) => console.log("error", err))

  }

  const handleCategory = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)

  }


  const handelCat = (e) => {
    setCategory_add({ ...category_add, [e.target.name]: e.target.value })

  }

  const handleCreate = () => {

    console.log(category_add);
    axios
      .post("http://127.0.0.1:8000/categories/user-categories/", category_add)
      .then((res) => console.log(res))
      .catch((err) => console.log("error", err))
    setOpen(false)


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
        <input type="number" placeholder='Debit' min="0"
          value={input.debit}
          onChange={handelInput}
          name='debit' id='debit' />



        <label htmlFor="credit">Credit: </label>
        <input type="number" placeholder='Credit' min="0"
          value={input.credit}
          onChange={handelInput}
          name='credit' id='credit' />


        <label htmlFor="Reason">Reason: </label>
        <input type="text" placeholder='Reason'
          value={input.reason}
          onChange={handelInput}
          name='reason' id='Reason' />


        <label htmlFor="Category">Category: </label>

        <div className='flex'>
          <select name="category_dashboard" id="category_dashboard"
            value={input.category_dashboard}
            onChange={handelInput}
          >

            <option value="">--Select Category--</option>

            {
              data.map((get) => (
                <option value={get.category_name} key={get.id}>{get.category_name}</option>
              ))
            }

          </select>
          <div>
            <Container maxWidth="xs">
              <Chip label="+ Add your Category" onClick={handleCategory} />
            </Container>
          </div>
        </div>



        <div className='submit'>

          <input type="submit" />


        </div>
      </form>

      <div>
        {
          records.map((curElem) => {

            return (
              <div className='show'>

                <p> {curElem.date}</p>
                <p> {curElem.debit}</p>
                <p> {curElem.credit}</p>
                <p> {curElem.reason}</p>
                <p> {curElem.category_dashboard}</p>
              </div>
            )

          })
        }
      </div>

      <Dialog open={open}>
        <DialogTitle>Create Your Category</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="catc"
            label="Name Your Category"
            type="text"
            fullWidth
            variant="standard"
            name='category_name'
            onChange={handelCat}
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Form