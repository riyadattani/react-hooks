import React, { useState } from 'react'
import UserTable from './tables/UserTable'

const usersData = [
    { id: 1, name: 'Riya', username: 'browncat' },
    { id: 2, name: 'Chris', username: 'coolcat' },
    { id: 3, name: 'Lisa', username: 'vegancat' },
    { id: 3, name: 'Tamara', username: 'sportycat' }
]

const App = () => {
    const [users, setUsers] = useState(usersData)
    return (
        <div className="container">
            <h1>Your Little Contact Book</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add Contact</h2>
                </div>
                <div className="flex-large">
                    <h2>View All Contacts</h2>
                    <UserTable users={users} />
                </div>
            </div>
        </div>
    )
}

export default App