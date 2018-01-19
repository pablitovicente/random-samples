const getUser = async(param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ user: param }), 100);
    });
}

const getUserImage = async(param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ userImage: imageUrl }), 100);
    });
}

const getUserWallPosts = async(param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ posts }), 100);
    });
}

const getUserMessages = async(param) => {
    let fakeError = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fakeError) {
                reject(new Error('Can not get user messages!'));
            } else {
                resolve({ messages })
            }
        }, 100);
    });
}



const getUserHomePage = async() => {
    let userHomePage = {};
    try {
        const user = await getUser('Bob Marley');
        const userImage = await getUserImage(user);
        const userWallPosts = await getUserWallPosts(user);
        const userMessages = await getUserMessages(user);
        userHomePage = {...user, ...userImage, ...userWallPosts, ...userMessages }
    } catch (reason) {
        throw new Error(reason);
    }
    return userHomePage;
}


getUserHomePage()
    .then((userHomePage) => {
        console.log(JSON.stringify(userHomePage, null, 2));
    })
    .catch((reason) => {
        console.log('Something went wrong!!!!!!!!!');
        console.log(reason);
    });

// Mocks IGNORE
const imageUrl = 'http://www.readthespirit.com/religious-holidays-festivals/wp-content/uploads/sites/10/2015/07/Bob-Marley-headshot-laughing.jpg';
const posts = ['wall post A', 'wall post B', 'etc'];
const messages = ['hey Bobby Marley', 'Let\'s Jam'];