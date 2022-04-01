interface IInputProps {
    type: string;
    placeholder: string;
    inputLabel: string;
}

const Input: React.FunctionComponent<IInputProps> = ({
    type,
    placeholder,
    inputLabel,
}) => {
    return (
        <div className='space-y-1'>
            <label
            className='text-sm font-medium text-gray-700'
            htmlFor={inputLabel}
            >{inputLabel}</label>
            <input
            placeholder={placeholder}
            className='w-full p-2 border rounded-sm bg-gray-100/100 focus:bg-white outline-none'
            type={type} />
        </div>
    )
}

export default Input;