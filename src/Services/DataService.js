let userData = {};

const createAccount = async (createdUser) => {
    const response = await fetch('https://felipecblogapi.azurewebsites.net/User/AddUser/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdUser)
    });
    if(!response.ok){
        const message = `An Error has Occured ${response.status}`;
        throw new Error(message)
    }
    const data = await response.json();
    console.log(data);
}

const login = async (loginUser) => {
    const response = await fetch('https://felipecblogapi.azurewebsites.net/User/Login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    });

    if(!response.ok){
        const message = `An Error has Occured ${response.status}`;
        throw new Error(message)
    }
    const data = await response.json();
    console.log(data);
    return data;
}

const GetLoggedInUserData = async (username) => {
    const response = await fetch(`https://felipecblogapi.azurewebsites.net/User/Userbyusername/${username}`)
    const data = await response.json();
    userData = data;
    console.log(userData)
    return data;
}

export { createAccount, login, GetLoggedInUserData };