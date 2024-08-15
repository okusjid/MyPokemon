import propType from "prop-type";
const Card = ({pokemon}) => {
    return (
        <div className=" border border-spacing-2 border-teal-700 m-5 p-4 mb-5">
            <div className="card-content">
                <h3>Name: {pokemon.name}</h3>
                {/* <p>Card Description</p> */}
            </div>
        </div>
    );

}

Card.propTypes = {
    pokemon: propType.shape({
        name: propType.string.isRequired,
    }).isRequired,
};



export default Card;