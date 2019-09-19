import React from 'react'
import UserTable from './tables/UserTable'

const App = () => {
    return (
        <div className="container">
            <h1>Your little Black Book</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add Contact</h2>
                </div>
                <div className="flex-large">
                    <h2>View All Contacts</h2>
                    <UserTable/>
                </div>
            </div>
        </div>
    )
}

export default App