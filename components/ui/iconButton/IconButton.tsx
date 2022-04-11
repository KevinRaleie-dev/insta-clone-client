import React from 'react'

type IconButtonProps = {
    icon: React.ReactElement;
}

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
    icon,
}) => {
  return (
    <div className="w-6 h-6 cursor-pointer">
        {icon}
    </div>
  )
}