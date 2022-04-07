/* eslint-disable react/display-name */
import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputWrapperProps = {
  inputLabel: string;
  rightElement?: React.ReactElement;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) =>
    (
        <input
        {...props}
        ref={ref}
        className='w-full p-2 border rounded-sm bg-gray-100/100 focus:bg-white outline-none' />
));

export const InputWrapper: React.FunctionComponent<InputWrapperProps> = ({ children, inputLabel, rightElement }) => {
    return (
        <div className='space-y-1'>
          <div className='flex flex-row justify-between'>
            <label
            className='text-sm font-medium text-gray-700'
            htmlFor={inputLabel}
            >{inputLabel}</label>
            <div>
              {rightElement}
            </div>
          </div>
          {children}
        </div>
    )
}