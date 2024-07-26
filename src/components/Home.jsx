import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram} from  "react-icons/ai"



const Home = () => {
  return (  
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechStar</h1>
            <p>Solution to all ypur problems</p>
        </main>
    </div>

    <div className="home2"> 
        
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one amd only solution to the tech problems
                you face
                every day. We are leading  tech company whose aim is to
                increase the 
                problem solving ability in the children


            </p>
        </div>

        </div>
        
        <div className="home3" id="about">
            <div>
                <h1>who we are </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eligendi quis deleniti, tenetur consectetur ipsum fuga voluptate nulla voluptas culpa magni vero maxime obcaecati expedita totam maiores quam perferendis, voluptatibus temporibus dignissimos! Cupiditate animi culpa dolorem ullam reprehenderit accusamus consequatur ratione, quae ad ducimus molestiae veritatis voluptas laboriosam ipsa eos esse quaerat dolor optio! Expedita pariatur eaque quos doloribus excepturi.</p>
            </div>
         </div>

        
         
         
         <div className="home4" id="brands" >
         <div>

         <h1>Brands</h1>

         <article>

         <div
         style={{animationDelay:"0.3s"}}
         >
            <AiFillGoogleCircle/>
            <p>Google</p>

         </div>

         <div
         style={{animationDelay:"0.5s"}}
         >
            <AiFillAmazonCircle/>
            <p>Amazon</p>

         </div>

         <div
         style={{animationDelay:"0.7s"}}
         >
            <AiFillInstagram/>
            <p>Instagram</p>

         </div>

         <div
         style={{animationDelay:"0.1s"}}
         >
            <AiFillYoutube/>
            <p>Youtube</p>

         </div>

         

         </article>

         </div>

         </div>
    </>
  );
    
  
};

export default Home