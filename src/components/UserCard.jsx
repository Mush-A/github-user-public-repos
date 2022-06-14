import "../style/UserCard.css"

const UserCard = (props) => {

    const {login, avatar_url, url} = props.userDetails
    const repoCount = props.repoCount

    return (
        <div className="user-card">
            <img className="user-image" src={avatar_url} alt={login} />
            <p className="user-name">{login}</p>
            <p>{`${repoCount} public repos`}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">visit profile</a>
        </div>
    )
}

export default UserCard