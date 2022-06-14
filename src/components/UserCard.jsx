import "../style/UserCard.css"

const UserCard = (props) => {

    const {login, avatar_url} = props.userDetails

    return (
        <div className="user-card">
            <img className="user-image" src={avatar_url} alt={login} />
            <h3 className="user-name">{login}</h3>
        </div>
    )
}

export default UserCard