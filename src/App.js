import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from "./forms/EditUserForm";

const usersData = [
    { id: 1, name: 'Riya', username: 'browncat' },
    { id: 2, name: 'Chris', username: 'coolcat' },
    { id: 3, name: 'Lisa', username: 'vegancat' },
    { id: 4, name: 'Tamara', username: 'sportycat' }
]


const App = () => {

    //add a user
    const [users, setUsers] = useState(usersData)
    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    //delete a user
    const deleteUser = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
    }
    // edit a user
    const[editing, setEditing] = useState(false)
    const initialFormState = { id:null, name: '', username: ''}
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const editRow = user => {
        setEditing(true)
        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }
    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id? updatedUser : user)))
    }

    return (
        <div className="container">
            <h1>Little CatBook</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit Cat</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add Cat</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View all Cats</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                </div>
            </div>
        </div>
    )
}

export default App