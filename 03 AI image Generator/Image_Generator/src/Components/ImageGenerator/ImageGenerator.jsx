import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/minions.png'

const ImageGenerator = () => {
  return (
    <div className = 'ai-image-generator'>
        <div className="header">AI image <span>GENERATOR</span></div>
        <div className="img-loading">
          <div className="image">
            <img src={default_image} alt="" />
          </div>
        </div>
        <div className="search-box">
          <input type=" " className="search-input" placeholder="Search" />
          <div className="generate-btn">Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator