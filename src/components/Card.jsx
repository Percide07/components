import '../components/Card.css'
const Card = ({name,type,gasolineLiter,kindOfTransition,people,pricePerDay,img})=> {
    return(
        <>
            <article className="Card">
                <div>
                    <h1>{name}</h1>
                    <h2>{type}</h2>
                </div>
                <div>
                    <img src= {img} alt="Car's photo" />
                </div>
                <div>
                    <p>{gasolineLiter}</p>
                    <p>{kindOfTransition}</p>
                    <p>{people}</p>
                </div>
                <div>
                    <p>{pricePerDay}</p>
                </div>
                <button>Rent Now</button>

            </article>
        </>
    )
}
export default Card;