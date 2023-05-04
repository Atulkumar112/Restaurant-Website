import React from 'react'

const MenuCart = ({myData}) => {
    


  return (
    <>
        
        <section className="main-card--cointainer">
        {myData.map((currEle) =>{   // i used this map for DRY (Don't Reapet Yourself)
            //Destructuring. we use DRY. Now we have not neet to write currEle.id in line n0 16 and no need to write currEle.name etc
            const {id, name, category, image, description} = currEle;  
            return (
                <>
                    <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                    {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div> 
                </>
            ) 
        })}
        </section>
    </>
  )
}

export default MenuCart
