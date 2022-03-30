import React from 'react'
import './Style.css'

export default function ListElement({users}) {
return (
    <div>
        <div>
            <h4>Name: {users.name}</h4>
            <h4>Surname: {users.username}</h4>
            <h4>Mail: {users.email}</h4>
        </div>
    </div>
)
}
