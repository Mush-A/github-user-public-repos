const CardHolder = ({refProp, children}) => {
    return (
        <div className="cardholder" ref={refProp}>
            {children}
        </div>
    )
}

export default CardHolder