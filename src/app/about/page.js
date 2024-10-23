import React from 'react';
import Link from 'next/link';
import "@/app/globals.css";


function Header(){
  return(
    <div className="header">
      <h1>What I do</h1>
    </div>
  )
}

function Intro(){
  const resume = "/files/Julkar_Reedoy_resume.pdf";
  return(
    <div className="text">
      <div>
        <p>
          I am a 2nd year Computing Science Student at Simon Fraser University. <br></br>
          My preferred languages are:<br></br><br></br> 
        </p>

        <ul>
          <li>👉 Python</li>
          <li>👉 Java</li>
          <li>👉 JavaScript</li>
          <li>👉 C</li>
        </ul>
        <br></br>

        <p>   
          I mostly work on front-end applications with React and Python.<br></br>
          I have experience working with abstract data structures in C and C++.<br></br>
          Currently, I am learning Object Oriented Programming with Java.
          <br></br><br></br>Take a look at my resume by clicking on this little icon 👉 <Link href={resume} className='link' target="_blank">📃</Link>
        </p>

      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Header/>
      <Intro/>
    </div>
  );
}
