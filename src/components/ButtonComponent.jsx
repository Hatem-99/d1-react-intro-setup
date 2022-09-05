function ButtonComponent (props) {
    console.log(props)
    return(
        <button className="btn btn-primary">{props.name}</button>
    )
}

export default ButtonComponent