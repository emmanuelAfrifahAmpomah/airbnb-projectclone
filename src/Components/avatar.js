import '../App.css';
import avatarimg from '../AirBnBImgs/Group77.png';

export default function Avatar () {
    return (
        <div className=''>
            <img src={avatarimg} alt= 'avatar logo' className='mx-auto d-block' />
            <div>
                <Paragraph />
            </div>
        </div>
    )
}

function Paragraph () {
    const styles = {
        fontSize: "70px",
    };

    const styles2 = {
        fontSize: "30px",
    };

    return( 
    <div className='container p-3'>
        <h1 style={styles}>Online Experiences</h1>
        <p style={styles2}>Join unique interactive activities led by<br /> one-of-a-kind hosts-all without leaving home</p>
    </div>
    )
}