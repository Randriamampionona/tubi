export const truncatedText = (text: string, length: number = 24) => {
    if (text.length > length) {
        return text.substring(0, length) + '...'
    }

    return text
}