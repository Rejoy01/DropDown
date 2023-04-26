import React from 'react'
import { useState,useEffect } from 'react'
import "./drop.css"
import categoriesData from "../categories/categories.json";

const Dropdown = () => {
    const [categories, setCategories] = useState([]);
    const [currentSubcategories, setCurrentSubcategories] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const handleCategoryHover = (subcategories) => {
      setCurrentSubcategories(subcategories);
      setCurrentItems([]);
    };
    const handleSubcategoryHover = (items) => {
      setCurrentItems(items);
    };
  

    useEffect(() => {
      setCategories(categoriesData.categories);
    }, []);

  return (
    <>
    <div className="main">
  <div className="dropdown_1">
    <button className="dropbtn" onClick={()=>setIsShown(true)}>Shop By Category</button>
    {isShown &&(
        <div className="dropdown-content">
        <nav>
          <ul>
            <li className="dropdown">
            {categories.map((category) => (
                <a href="#"
                key={category.name}
                onMouseEnter={()=>handleCategoryHover(category.subcategories)}>
                {category.name}
                
              </a>
            ))}
              
              
              <ul >
                
                <li  className="dropdown_two" >
                {currentSubcategories.map((subcategory) => (
                  <a href="#"
                    key={subcategory.name}
                    onMouseEnter={()=>handleSubcategoryHover(subcategory.items)}
                    
                   
                  >{subcategory.name}</a>

                ))}
                  
                  
                  <ul>
                    <li>
                    {currentItems.map((item) => (
                        <a href="#"
                        
                          key={item}
                          
                        >{item}</a>
                    ))}
                      
                    </li>
                    
                  </ul>
                </li>
                
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )}
    
  </div>
  <div className="dropdown_1">
    <button className="dropbtn_offer">Offers</button>
    <div className="dropdown-content">
      <h1>coming soon</h1>
    </div>
  </div>
</div>

    </>
  )
}

export default Dropdown