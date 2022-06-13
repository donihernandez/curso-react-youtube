import { Avatar } from "../Avatar"
import { User } from "../User"
import './List.css'

const List = ({ users }) => {
    return (
        <div className="list">
            {users.map(user => (
                <div className="list-item" key={user.id}>
                    <Avatar avatar={user.avatar} size="45px" />
                    <User name={user.name} age={user.age} />
                </div>
            ))}
        </div>
    );
}

export { List }