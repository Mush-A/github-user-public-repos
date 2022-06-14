import "../style/RepoCard.css"

const RepoCard = (props) => {

    const {name, description, updated_at, language, topics, html_url} = props.repo
    
    return (
        <div className="repo-card">
            <div className="repo-card-header">
                <p className="repo-name">{name}</p>
                <p className="repo-lang">{`<${language} />`}</p>
            </div>

            <p className="repo-description">{description}</p>
            <div className="repo-topics">
                {
                    topics.map(topic => {
                        return <Topics topic={topic} />
                    })
                }
            </div>

            <div className="repo-card-footer">
                <small className="repo-update-time">{"Last updated " + Date(updated_at).split(" ").slice(1, 6).join(" ")}</small>
                <a href={html_url} className="">View Repo</a>
            </div>
        </div>
    )
}

const Topics = ({topic}) => {
    return (
        <span className="repo-topic">
            {topic}
        </span>
    )
}

export default RepoCard
