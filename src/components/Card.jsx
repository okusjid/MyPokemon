const Card = ({pokemon}) => {
    return (
        <div className=" border border-spacing-2 border-teal-700 m-5 p-4">
            <div className="card-content">
                <h3>Name: {pokemon.name}</h3>
                {/* <p>Card Description</p> */}
            </div>
        </div>
    );

}

export default Card;