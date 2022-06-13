import { List } from '../List'
import './Card.css'

const Card = ({ users, clearList }) => {
    return (
        <div className="card">
            <h1>5 Birthdays Today</h1>
            <List users={users} />
            <button onClick={clearList} className='list-button'>Clear List</button>
        </div>
    )
}

export { Card }