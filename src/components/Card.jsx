import '../components/Card.css';
import photo1 from '../images/gas.png';
import photo2 from '../images/manual.png';
import photo3 from '../images/people.png';
import heart from '../images/heart.png';
const Card = ({name,type,gasolineLiter,kindOfTransition,people,pricePerDay,img})=> {
    return(
        <>

            <article className="Card">

                <div className='carName'>
                    {name}
                    <img src={heart} alt="like image" className='like'/>
                </div>
                <div className='carType'>{type}</div>
                <div className='pict'>
                    <img src= {img} alt="Car's photo" className='image1'/>
                </div>
                <section className='part1'>
                    <div className='gasP'>
                        <img src={photo1} alt="gas quantity" className='image2'/>
                        <div className='desc'>{gasolineLiter}</div>
                    </div>
                    <div className='transP'>
                        <img src={photo2} alt="transmission" className='image3'/>
                        <div className='mec'>{kindOfTransition}</div>
                    </div>
                    <div className='peoP'>
                        <img src={photo3} alt="people" className='image4'/>
                        <div className='place'>{people}</div>
                    </div>
                </section>
                <section className='part2'>
                    <div className='price'>{pricePerDay}</div>
                    <button className='btn'>Rent Now</button>
                </section>

            </article>
        </>
    )
}
export default Card;