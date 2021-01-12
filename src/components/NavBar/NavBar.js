import React from "react";
import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";


const  NavBar =()=>{
    return(
        
        <header className="bg-black ">
            
            <div className="container mx-auto flex justify-between ">


                <nav className="flex-row md:justify-between">
                    
                <NavLink 
                to="/"
                exact
                activeClassName="text-gray-400"
                className="inflex-flex items-center py-6 px-3 mr-4 text-gray-50 hover:text-gray-400 text-4xl font-bold cursive tracking-widest"
                
                >Home</NavLink>

                 <NavLink
                 to="/about"
                 className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-50 hover:text-gray-400"
                 activeClassName="text-gray-400"

                 >About</NavLink>
                 <NavLink to="/posts" 
                 exact
                 className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-50 hover:text-gray-400"
                 activeClassName="text-gray-400"
                 >Blog posts</NavLink>
                <NavLink
                 to="/project"
                 className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-50 hover:text-gray-400"
                 activeClassName="text-gray-400"
                 
                 >Projects</NavLink>
                </nav>

                <div className="inline-flex py-3 px-3 my-6">
        <SocialIcon
        url="https://twitter.com/AKahmed_khaled"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{height:35,width:35}}
        
        
        />

        <SocialIcon
        url="https://www.linkedin.com/in/ahmed-khaled-9702a8154/"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{height:35,width:35}}
        
        
        />
      

        </div>

            </div>
        
        </header>
   
    
    )
}
export default NavBar
