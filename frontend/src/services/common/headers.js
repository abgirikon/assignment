export const createHeaders = () => {
    const authentication = JSON.parse(localStorage.getItem('authentication'));
    return {
        "accept": "application/json",
        "Content-Type": "application/json",
        "x-api-key": authentication?.access_token
    };
};