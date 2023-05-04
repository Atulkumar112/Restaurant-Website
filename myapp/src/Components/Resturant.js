import React, {useState} from 'react'
import "./Style.css";
import MenuCart from './MenuCart'
import MenuApi from './MenuApi'
import Navbar from './Navbar'

// we use spread opertor when we want to see our data in pure array
const uniqueList = [...new Set(MenuApi.map((currEle) =>{  // these ... dost (three dost) are know as spread operator most imp.
  return currEle.category;
})), "All"] 

// console.log(uniqueList);


const Resturant = () => {
    const[menuData, setMenuData] = useState(MenuApi);
    const[menuList, setMenuList] = useState(uniqueList);
    
    // this belew method is used for onclick method (or we can say it's a routing)
    const filterItem = (categ) =>{
      if(categ==="All"){
        
          setMenuData(MenuApi);
        return;
      }

      const updatedList = MenuApi.filter((currEle) => {
        return currEle.category === categ;
      });
      setMenuData(updatedList);
    }

  return (
    <>
        
      <Navbar filterItem={filterItem} menuList = {menuList}/>         {/* two propes passing in a single line   */}

      <MenuCart myData = {menuData}/>  
    </>
  )
}

export default Resturant
