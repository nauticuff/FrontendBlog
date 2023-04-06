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

const GetPublishedBlogItems = async () => {
    const response = await fetch('https://felipecblogapi.azurewebsites.net/Blog/GetPublishedItems')
    const data = await response.json();
    return data;
}

const checkToken = () => {
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData != true){
        result = true;
    }
    return result;
}

const loggedInData = () => {
    return userData;
}

const addBlogItem = async (blogItem) => {
    const response = await fetch('https://felipecblogapi.azurewebsites.net/Blog/AddBlogItem/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogItem)
    });
    if(!response.ok){
        const message = `An Error has Occured ${response.status}`;
        throw new Error(message)
    }
    const data = await response.json();
    console.log(data);
}

const getBlogItemsByUserId = async (userId) => {
    const response = await fetch(`https://felipecblogapi.azurewebsites.net/Blog/GetItemsByUserId/${userId}`)
    const data = await response.json();
    userData = data;
    console.log(userData)
    return data;
}

const updateBlogItem = async (blogItem) => {
    const response = await fetch('https://felipecblogapi.azurewebsites.net/Blog/UpdateBlogItem/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogItem)
    });
    if(!response.ok){
        const message = `An Error has Occured ${response.status}`;
        throw new Error(message)
    }
    const data = await response.json();
    console.log(data);
}

export { createAccount, login, GetLoggedInUserData, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem };