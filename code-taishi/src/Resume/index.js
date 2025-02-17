import { useState } from 'react'
import './index.css'
import Navbar from '../Navbar'

const Resume = () =>{


    const [image, setImage] = useState("")

    const check = (photo) =>{

        setImage(`./Images/${photo}`)

    }
    const imageCancel = document.getElementById('cv')

    return(
        <div>
              <Navbar/>
            <img  src= {image} alt='' id='cv'/>
            <span class="close" onClick={()=>{
                    imageCancel.style.display = "none"
                }}>&times;</span>

            <div id='the-team'>
            <h1 id='heading'>MEET <label id='the'>the</label> TEAM</h1>

            <img  src= {image} alt='' id='cv'/>
            <span class="close" onClick={()=>{
                    imageCancel.style.display = "none"
                }}>&times;</span>

            <div className='team'>

            <div className='member'>
                <img src="./Images/Pearl.png" alt="Pearl" className="profile"/>
                <h2 className='name'>Pearl C.</h2>
                <button className='viewButton' onClick= {() => {check("Pearl's CV.png");
                   const imageCancel = document.getElementById('cv')
                   if(imageCancel){
                    imageCancel.style.display = "block"
                   }}} ><b>VIEW CV</b></button>
                 </div>

            <div className='member'>
                <img src="./Images/lavender.png" alt="Lavender" className="profile"/>
                <h2 className='name'>Lavender A.</h2>
                <button className='viewButton' onClick= {() => {check("Lavender CV.png"); 
                 if(imageCancel){
                    imageCancel.style.display = "block"
                   }
                }}><b>VIEW CV</b></button>
            </div>

            <div className='member'>
                <img src="./Images/Patricia.png" alt="Patricia" className="profile"/>
                <h2 className='name'>Patricia A.</h2>
                <button className='viewButton' onClick= {() => {check("Patricia CV.png"); 
                 if(imageCancel){
                    imageCancel.style.display = "block"
                   }
                }}><b>VIEW CV</b></button>
            </div>

            </div>

                <div className='team2'>

            <div className='member'>
                <img src="./Images/Nancy.png" alt="Nancy" className="profile"/>
                <h2 className='name'>Nancy N.</h2>
                <button className='viewButton' onClick= {() => {check("Nancy CV.png"); 
                 if(imageCancel){
                    imageCancel.style.display = "block"
                   }
                }} ><b>VIEW CV</b></button>
            </div>

            <div className='member'>
                <img src="./Images/Latifa.png" alt="Latifa" className="profile"/>
                <h2 className='name'>Latifa U.</h2>
                <button className='viewButton' onClick= {() => {check("Latifa's CV.jpg"); 
                 if(imageCancel){
                    imageCancel.style.display = "block"
                   }
                }} ><b>VIEW CV</b></button>
            </div>


            {/* <div className='member'>
                <img src="./Images/Shalom.png" alt="Shalom" className="profile"/>
                <h2 className='name'>Shalom U.</h2>
               <button className='viewButton'  onClick= {() => {check("Shalom.png");
                if(imageCancel){
                    imageCancel.style.display = "block"
                   }
                }} id='click'><b>VIEW CV</b></button>
            </div> */}

            </div>

            </div>
          
        </div>

    )
}

export default Resume;