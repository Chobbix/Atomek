function getConfigHeader() {
    const user = JSON.parse(localStorage.getItem("UserSession"));
    
    const Config = {
        headers: {
            Authorization: `Bearer ${user.userToken}`
        }
    }

    return Config;
}

export default getConfigHeader