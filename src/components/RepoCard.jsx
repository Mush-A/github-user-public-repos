import "../style/RepoCard.css"

const RepoCard = (props) => {

    const {name, description, updated_at} = props.repo
    
    return (
        <div className="repo-card">
            <h3 className="title">{name}</h3>
            <p className="description">{description}</p>
            <small className="update-time">{updated_at}</small>
        </div>
    )
}

export default RepoCard
