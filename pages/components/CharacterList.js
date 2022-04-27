import React, {useState} from "react";

const CharacterList = ({ characters,parentCallback,footer }) => {
    const showDetails= (image,name,species) =>{
        parentCallback(false,image,name,species);
    }
  return (
    <div className={footer===true?"content-container container second-page":"content-container container"}>
      <div className="row">
          <span className="footer-header" hidden={!footer}>You might want to check these out..</span>
        {characters.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <button className={footer===true?"card-button":"card-button default-style"} onClick={()=>{showDetails(item.image,item.name,item.species)}}>
            <div className={footer===true?"card":"card h-463"}>
              <img className="card-img-top" src={item.image} alt="character" />
              <div className="card-body" hidden={footer}>
                    <h5 className="card-title">Who is {item.name} ?</h5>
                    <div className="card-content">
                   <p className="card-text">Species: {item.species}</p>
                   <p className="card-text">Location: {item.location.name}</p>
               </div>
                    <div className="btn btn-primary w-100 mt-15">Details</div>
              </div>
            </div>
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
