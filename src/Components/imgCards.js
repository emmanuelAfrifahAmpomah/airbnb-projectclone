import '../App.css';
import zafares from '../AirBnBImgs/image_12.png';
import star from '../AirBnBImgs/Star_1.png';
import carnival from '../AirBnBImgs/joel-mott-EKCmf5-O3bU-unsplash.jpg';
import house from '../AirBnBImgs/spacejoy-ml2RSaDME-k-unsplash.jpg';
import food from '../AirBnBImgs/peter-dawn-sxZ_Ca6MkWM-unsplash.jpg';




export const cardDetails = [
    {
    id:1,
    picture: zafares,
    rating: 5.0,
    totalRating: 6,
    title: "Life lessons with Katie Zafares",
    price: 136,
},
{
    id:2,
    picture: carnival,
    rating: 5.0,
    totalRating: 30,
    title: "Discover festivals in the country",
    price: 50,
},
{
    id:3,
    picture: house,
    rating: 4.9,
    totalRating: 18,
    title: "Learn interior design from the best",
    price: 100,
},
{
    id:4,
    picture: food,
    rating: 5.0,
    totalRating: 30,
    title: "Go on a food tour with friends",
    price: 126,
},
];


export default function Card(props) {

    const imageStyle = {
        width: "176px", height: "235px"
    }

    const contentStyle = {
        width: "176px", height: "58px"
    }

    const starStyles = {
        width: "12px", height: "12px"
    }

    return (

            <div className='col'>
            <div className="card">
             <img src = {props.picture} className="card-img-top pt-3 rounded" alt="an athlete" style={imageStyle} />
             <div className='py-1'>
                <img src = {star} className="me-1" alt="a red star" style={starStyles}  />
                <b className='starContents'>{props.rating}</b><span> ({props.totalRating}) . USA</span>
             </div>
              <div className="card-body p-0" style={contentStyle}>
               <p className="card-title">{props.title}</p>
               <p className='starContents'><b>From ${props.price}</b> / Person</p>
              </div>
            </div>
            </div>
    )
}