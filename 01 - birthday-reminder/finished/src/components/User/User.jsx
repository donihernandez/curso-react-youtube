import './User.css'

const User = ({ name, age }) => {
    return (
        <div className='user-info'>
            <h4 className='user-name'>{name}</h4>
            <p className='user-age'>{age}</p>
        </div>
    )
}

export { User }