import './index.css'
import Navbar from '../Navbar';

const Resume = () =>{
    return(
        <div>
            <Navbar />
            <h1 id='heading'>MEET <label id='the'>the</label> TEAM</h1>

            <div className='team'>

            <div className='member'>
                <img src="./Images/Shalom.png" alt="Shalom" className="profile"/>
                <h2 className='name'>Shalom U.</h2>
                <button className='viewButton'><b>VIEW CV</b></button>
            </div>

            <div className='member'>
                <img src="./Images/lavender.png" alt="Lavender" className="profile"/>
                <h2 className='name'>Lavender A.</h2>
                <button className='viewButton'><b>VIEW CV</b></button>
            </div>

            <div className='member'>
                <img src="./Images/Patricia.png" alt="Patricia" className="profile"/>
                <h2 className='name'>Patricia A.</h2>
                <button className='viewButton'><b>VIEW CV</b></button>
            </div>

            </div>

                <div className='team'>

            <div className='member'>
                <img src="./Images/Nancy.png" alt="Nancy" className="profile"/>
                <h2 className='name'>Nancy N.</h2>
                <button className='viewButton'><b>VIEW CV</b></button>
            </div>

            <div className='member'>
                <img src="./Images/Latifa.png" alt="Latifa" className="profile"/>
                <h2 className='name'>Latifa U.</h2>
                <button className='viewButton'><b>VIEW CV</b></button>
            </div>

            <div className='member'>
                <img src="./Images/Pearl.png" alt="Pearl" className="profile"/>
                <h2 className='name'>Pearl C.</h2>
                <button className='viewButton'><b>VIEW CV</b></button>
            </div>

            </div>
                   

        </div>

    )
}

export default Resume;