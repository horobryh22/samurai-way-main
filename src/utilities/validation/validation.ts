export const requiredValue = (value: string) => {
    if (value) return undefined;
    return 'Enter correct value';
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value?.length > maxLength) return `You entered more than ${maxLength} symbols`;
    return undefined;
}