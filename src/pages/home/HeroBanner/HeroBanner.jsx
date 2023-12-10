import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeroBanner = () => {
    const [Background, setBackground] = useState("")
    const [Quary, setQuary] = useState("")
const navgate = useNavigate()
    const searchQuaryHandler = (e) =>{
if(e.key === "Enter" && Quary.length > 0 ){
navgate(`/search/${Quary}`)
}
    }
  return (
    <div>
        <div className="heroBanner">
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subtitle">Lorem ipsum dolor sit amet.</span>
                    <div className="searchInput">
                        <input
                         type="text"
                         placeholder='Search movies and tv shows'
                         onKeyUp={searchQuaryHandler}
                         onClick={(e)=>setQuary(e.target.value)}
                         />
                         <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner