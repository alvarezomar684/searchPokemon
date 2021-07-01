const Pokemon = ({title, imgUrl}) => {
    return(
        <div>
            <h6>{title}</h6>
            <img src={imgUrl} alt={title} />
        </div>
    )
}

export default Pokemon