import React from 'react'
import './Instaapi.css'
import { InstagramEmbed } from 'react-social-media-embed';
 
const Instaapi = () => { 
  
  return (
    <div className='Instaapi'>
    <h1>Social Media Feed</h1>
    <div className='Insta-data1'> <InstagramEmbed url="https://www.instagram.com/p/Cy-ynRcI2dk/?utm_source=ig_embed&ig_rid=de4a4148-6b12-415f-b7d8-bc4b4c298731"  /></div>
 <div className='Insta-data2'> <InstagramEmbed url="https://www.instagram.com/p/Cy-JcxvoX-j/?utm_source=ig_embed&ig_rid=4131a537-2704-4e39-9b87-d34d65f947d2"  /></div>
 <div className='Insta-data3'> <InstagramEmbed url="https://www.instagram.com/p/Cy0AT3uobFO/?utm_source=ig_embed&ig_rid=113f06d0-8d19-4e24-854f-e785fcea3a9a"/></div>
 
</div>

  
    
    
  );
}

export default Instaapi