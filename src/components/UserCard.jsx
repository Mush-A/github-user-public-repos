const UserCard = (props) => {

    const {login, avatar_url} = props.userDetails

    return (
        <div className="usercard">
            <img src={avatar_url} alt={login} />
            <h3 className="title">{login}</h3>
        </div>
    )
}

export default UserCard