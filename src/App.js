import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const usersData = [
    { id: 1, name: 'Riya', username: 'browncat' },
    { id: 2, name: 'Chris', username: 'coolcat' },
    { id: 3, name: 'Lisa', username: 'vegancat' },
    { id: 4, name: 'Tamara', username: 'sportycat' }
]


const App = () => {
    const [users, setUsers] = useState(usersData)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div className="container">
            <h1>Your Little Contact Book</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add Contact</h2>
                    <AddUserForm addUser={addUser} />
                </div>
                <div className="flex-large">
                    <h2>View All Contacts</h2>
                    <UserTable users={users} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}

export default App