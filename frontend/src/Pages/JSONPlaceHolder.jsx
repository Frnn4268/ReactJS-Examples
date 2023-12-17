import { useEffect, useState, useRef } from 'react'

export const JSONPlaceHolder = () => {

  const ENDPOINT = "https://jsonplaceholder.typicode.com/posts/";

  const [users, setUsers] = useState([])
  const dialogRef = useRef(null)
  const dialogDeleteRef = useRef(null)
  const [currentUser, setCurrentUser] = useState({
    userId: 0,
    id: 0,
    title: '',
    completed: '',
  })

  const getAll = async () => { // Function to fetch all users from the API
    let fetchResp = await fetch(ENDPOINT)
    let dataJson = await fetchResp.json()
    setUsers(dataJson)
  }
  useEffect(() => { // Function to fetch all users from the API
    (async () => {
        await getAll()
    })()
  }, [])

  const newUserClick = (e) => { // Event handler for the "New User" button click
    e.preventDefault()
    dialogRef.current.showModal()
  }

  const closeNewUserModal = (e) => { // Event handler for closing the "New User" modal
    e.preventDefault()
    dialogRef.current.close()
  }

  const valueHasChanged = (e) => { // Event handler for input value changes
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    })
  }

  const formSubmit = async (e) =>{ // Event handler for form submission
    e.preventDefault()
    if (currentUser.id <= 0){
      //Create
      await postData(currentUser)  // Create new user 
    }
    else{
      await updateData(currentUser) // Update existing user
    }
    setCurrentUser({
      userId: 0,
      id: 0,
      title: '',
      completed: '',
    })
    dialogRef.current.close()
  }

  const postData = async (data) => { // Function to post new user data to the API
    let fetchResp = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      })
      let json = await fetchResp.json()
      await getAll()
  }


  const updateData = async (data) => { // Function to update user data in the API
    let fetchResp = await fetch(ENDPOINT + "/" + data.id, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      })
      let json = await fetchResp.json()
      await getAll()
  }

  const deleteRow = async (row)=>{ // Function to prompt for user deletion
    setCurrentUser(row)
    dialogDeleteRef.current.showModal()
  }

  const deleteData = async (row) => {  // Function to delete user data from the API
    let fetchResp = await fetch(ENDPOINT + "/" + row.id, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
      })
      let json = await fetchResp.json()
      await getAll()
  }

  const confirmDelete = async(e) => { // Event handler for confirming user deletion
    e.preventDefault();
    await deleteData(currentUser)
    dialogDeleteRef.current.close()
  }

  const showEdit = (row) => { // Function to show the edit modal
    setCurrentUser(row)
    dialogRef.current.showModal()
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <h4>New User</h4>
        <form onSubmit={formSubmit} className="w3-container">
          <label htmlFor="userid">userId</label>
          <input
            type="text"
            id="userid"
            name="userid"
            className="w3-input"
            value={currentUser.userId}
            onChange={valueHasChanged}
          />
          <label htmlFor="id">id</label>
          <input
            type="text"
            id="id"
            name="id"
            className="w3-input"
            value={currentUser.id}
            onChange={valueHasChanged}
          />
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w3-input"
            value={currentUser.title}
            onChange={valueHasChanged}
          />
          <label htmlFor="body">body</label>
          <input
            type="text"
            id="body"
            name="body"
            className="w3-input"
            value={currentUser.body}
            onChange={valueHasChanged}
          />
          <div className="w3-row">
            <div className="w3-col m4">
              <button type="submit" className="w3-button w3-green">Save</button>         
            </div>
            <div className="w3-col m4">
              <button className="w3-button w3-red" onClick={closeNewUserModal}>Close</button>
            </div>
          </div>
        </form>
      </dialog>
      
      <h1>JSON Placeholder</h1>
      <h3>Users Content</h3>
      <button onClick={newUserClick} style={
          { 
            backgroundColor: 'blue', 
            color: 'white', 
            borderRadius: '5px', 
            borderColor: 'blue',
            padding: '5px 10px', 
            margin: '10px 0',
            fontSize: '18px'
          }
        }>New User</button>
      <table className="w3-table w3-striped w3-bordered w3-border">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row) => (
            <tr key={'user' + row.id} style={{backgroundColor: row.status === "I" ? "olive": ""}}>
              <td>{row.userId}</td>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.body}</td>
              <td>
                <button className="w3-button w3-yellow" onClick={(e)=> { showEdit(row) }}>Edit</button>
                <button className="w3-button w3-red" onClick={(e)=> {deleteRow(row)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog ref={dialogDeleteRef}>
        <h4>Delete confirmation</h4>
        <form onSubmit={confirmDelete} className="w3-container">
           
            Are you sure you want to delete {currentUser.title}
            <div className='w3-row'>
              <div className='w3-col m6'>
                <button className="w3-button w3-red" type="submit">Confirmar</button>
              </div>
              <div className='w3-col m6'>
                  <button className="w3-button w3-blue" onClick={(e)=>{
                  e.preventDefault()
                  dialogDeleteRef.current.close()
                }} >Cancel</button>
              </div>
            </div>
        </form>
      </dialog>
    </>
  )
}
