type FieldError = {
    field: string;
    message: string;
}

export const convertToObject = (array: FieldError[]) => {

    const value: Record<string, string> = {};

    array.forEach(({field, message}) => {
        value[field!] = message;
    });
    
    return value;
}