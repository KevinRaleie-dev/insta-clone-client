import React from 'react'

interface ICardProps {
    leftElement?: React.ReactElement;
    rightElement?: React.ReactElement; 
}

export const Card: React.FunctionComponent<ICardProps> = ({
    leftElement,
    rightElement,
}) => {
  return (
    <figure className=' flex rounded-md shadow-sm border h-[549px]'>
        <div className=' flex-initial w-80 pr-2'>
            {leftElement}
        </div>
        <div className=' flex-initial w-80'>
            {rightElement}
        </div>
    </figure>
  )
}