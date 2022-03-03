import React from "react";

import Data from "./scidata"

const science = () => {
    return (
        <>
          <div className="m-3 p-2">
                  <p className=" heading ">ROCK DATABASE</p>
         {Data.map((item) => {

                return (
                  
            
          <div className="col-12 d-none my-5 d-sm-flex justify-content-around mx-auto ">
            <img
              loading="lazy"
              className="col-6 col-lg-3 py-3 img-fluid pic"
              src={item.Pic}
              alt={item.Rock_Name}
            />
            <div className="col-6 col-lg-4 p-4 my-auto text-start border bg-light info">
              <p className="fs-4 "><b>Rock Name:</b> {item.Rock_Name}</p>
              <p className="fs-6 "><b>Chemical Composition:</b> {item.Chemical_Composition} </p>
              <p className="fs-6"><b>Type:</b> {item.Type} </p>
              <p className="fs-6"><b>Color:</b> {item.Color} </p>
              <p className="fs-6"><b>Transparency:</b> {item.Transparency} </p>
              <p className="fs-6"><b>Origin And Formation:</b> {item.Origin_and_Formation} </p>
              <p className="fs-6"><b>Inferences:</b> {item.Inferences} </p>
              <p className="fs-6"><b>Availability On Mars:</b>{item.Availability_on_Mars} </p>
            </div>
          </div>
        
            );
        })}
  </div>

          {/* <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
            <img
              loading="lazy"
              className="col-10 mx-auto img-fluid"
              src="SubsystemLogo/ai.gif"
              alt="Ai"
            />
            <div className="col-10 mx-auto text-center">
              <p className="fs-3">Artificial Intelligence & Automation</p>
              <p className="fs-6 ">
                The AI & Automation subsystem is an integral part of the
                project. The subsystem deals with processing and interpreting
                data from various sensors like cameras, GPS, LiDARS, IMUs,
                etc. This enables the rover to traverse autonomously without
                human interference. The subsystem also deals with designing
                deep learning architectures to solve various state of the art
                problems encountered while the development of rover.
              </p>
            </div>
          </div> */}
         
        </>
    );
}

export default science