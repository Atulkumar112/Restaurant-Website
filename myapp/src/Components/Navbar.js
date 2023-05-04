import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
      <nav className='navbar'>
            <div className='btn-group'>
                {
                    menuList.map((currEle) =>{
                        return(
                            <button className='btn-group__item' onClick={() => filterItem(currEle)}>{currEle}</button>
                        )
                        
                    })
                }
                
                 {/* below here you again reapting so that why i used here menuList above. */}
                {/* <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
                <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
                <button className='btn-group__item' onClick={() => filterItem("evening")}>Snekes</button> */}
                
            </div>
            
        </nav>
    </>
  )
}

export default Navbar
