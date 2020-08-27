export default(sunrise) => {
    const date = new Date(sunrise * 1000);
    return `${date.getHours()}:${(date.getMinutes() < 10) ? '0'+ date.getMinutes() : date.getMinutes()}`;
}



