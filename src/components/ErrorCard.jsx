import "../style/ErrorCard.css"

const ErrorCard = (props) => {

    const {message} = props.error

    return (
        <div className="error-card">
            <h3>{message}</h3>
        </div>
    )
}

export default ErrorCard