import React from 'react';
import Image from 'next/image';

const PlacholderImage = () => {
  return (
    <Image
    className='rounded-l-md'
    height={560}
    width={320}
    objectFit="cover"
    src="https://images.unsplash.com/photo-1647858879339-f5ee23145f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
    alt="image of person" />
  )
}

export default PlacholderImage;