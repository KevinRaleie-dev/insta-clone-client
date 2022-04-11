import React from 'react'

type ErrorLabelProps = {
    text?: string
}

export const ErrorLabel: React.FunctionComponent<ErrorLabelProps> = ({ text }) => {
    return (
        <div className='text-red-500 text-sm'>{text}</div>
    );
}