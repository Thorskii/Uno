import React from 'react';
  
const About = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden h-[120px] md:h-[200px] lg:h-[400px]">
                    <img className="" style={{width: "100vw", opacity: 0.5}} src="https://i.imgur.com/EcgdqlR.png" alt=""/>
            </div>
            <div className="space-y-4 w-11/12 lg:w-10/12 xl:w-1200 m-auto py-8 md:py-16">
                <br></br>
                <h1 className="font-bold text-4xl">About</h1>
                <br></br>
                <ul>
                    <li><strong>Placeholder</strong></li>
                    <li>
                    <br></br>
                    Placeholder
                    <br></br>
                    Placeholder
                    </li>
                </ul>
            </div>

        </div>

    )
  }

  export default About