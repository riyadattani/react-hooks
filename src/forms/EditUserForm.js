import React, { useState } from 'react'

const EditUserForm = ({currentUser, updateUser, setEditing}) => {
    const [user, setUser] = useState(currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                updateUser(user.id, user)
            }}
        >
            <label>Cat Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Cat Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Update Cat</button>
            <button onClick={() => setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm