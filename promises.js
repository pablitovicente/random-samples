const getUser = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ user: param }), 100);
    });
}

const getUserImage = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ userImage: imageUrl }), 100);
    });
}

const getUserWallPosts = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ posts }), 100);
    });
}

const getUserMessages = (param) => {
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

const userHomePage = {};

getUser('Bob Marley')
    .then((user) => {
        userHomePage.user = user;
        return getUserImage(user);
    })
    .then((userImage) => {
        userHomePage.userImage = userImage;
        return getUserWallPosts(userHomePage.user);
    })
    .then((userWallPosts) => {
        userHomePage.posts = userWallPosts;
        return getUserMessages(userHomePage.user);
    })
    .then((userMessages) => {
        userHomePage.messages = userMessages;
        return;
    })
    .then((final) => {
        console.log(JSON.stringify(userHomePage, null, 2));
    })
    .catch((reason) => {
        console.log('Something went wrong!!!!');
        console.log(reason);
    });


// Mocks IGNORE
const imageUrl = 'http://www.readthespirit.com/religious-holidays-festivals/wp-content/uploads/sites/10/2015/07/Bob-Marley-headshot-laughing.jpg';
const posts = ['wall post A', 'wall post B', 'etc'];
const messages = ['hey Bobby Marley', 'Let\'s Jam'];