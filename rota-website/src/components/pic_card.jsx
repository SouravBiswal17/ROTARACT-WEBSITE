import React from 'react'

export default function PicCard({imageUrl}) {
    return(
        <img 
        src={imageUrl} 
        alt='pic' 
        className='w-full h-auto object-cover shadow-md'  />
       
    )
}