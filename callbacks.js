const getUser = (param, callback) => {
    setTimeout(() => callback(null, { user: param }), 100);
}

const getUserImage = (param, callback) => {
    setTimeout(() => callback(null, { userImage: imageUrl }), 100);
}

const getUserWallPosts = (param, callback) => {
    setTimeout(() => callback(null, { posts }), 100);
}

const getUserMessages = (param, callback) => {
    let fakeError = false;
    if (fakeError) {
        callback(true, null);
    } else {
        callback(false, { messages })
    }
}

getUser('Bob Marley', (error, userDetails) => {
    getUserImage(userDetails, (error, userImage) => {
        getUserWallPosts(userDetails, (error, userPosts) => {
            if (error) {
                console.log('Something went wrong in getting user wall posts!');
            } else {
                getUserMessages(userDetails, (error, userMessages) => {
                    if (error) {
                        console.log('Something went wrong getting user messages!');
                        process.exit();
                    } else {
                        console.log(userDetails);
                        console.log(userImage);
                        console.log(userPosts);
                        console.log(userMessages);
                    }
                });
            }
        });
    });
});


// Mocks IGNORE
const imageUrl = 'http://www.readthespirit.com/religious-holidays-festivals/wp-content/uploads/sites/10/2015/07/Bob-Marley-headshot-laughing.jpg';
const posts = ['wall post A', 'wall post B', 'etc'];
const messages = ['hey Bobby Marley', 'Let\'s Jam'];