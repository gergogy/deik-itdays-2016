var service = require('../../helperService.js');

const sources = {
    users: './src/prezi/users.json',
    userLevels: './src/prezi/user-levels.json'
};

module.exports = {
    sources: sources,
    paths: [
        {
            path: '/users',
            method: 'GET',
            description: 'get all users',
            handle: getUsers
        },
        {
            path: '/users/levels',
            method: 'GET',
            description: 'get all user levels',
            handle: getUserLevels
        },
        {
            path: '/users/loggedin',
            method: 'GET',
            description: 'get logged in user',
            handle: getLoggedInUser
        },
        {
            path: '/user/:userId',
            method: 'GET',
            description: 'get user by ID',
            handle: getUserById
        },
        {
            path: '/user/:userId',
            method: 'PUT',
            description: 'update user by ID',
            handle: updateUserById
        }
    ]
};

function getUsers(data) {
    return {data: data.users};
}

function getUserLevels(data) {
    return {data: data.userLevels};
}

function getLoggedInUser(data) {
    const user = findUserByID(data, 1);
    return {data: user};
}

function getUserById(data, req) {
    const id = req.params.userId;
    const user = findUserByID(data, id);
    return {data: user};
}

function updateUserById(data, req) {
    const id = req.params.userId;
    const user = findUserByID(data, id);
    service.update(user, req.body);
    return {data: user};
}

/// HELPERS ///

function findUserByID(data, id) {
    const user = data.users.find(function(u) {
        return u.id == id;
    });
    if (!user) {
        throw 'User not found';
    }
    return user;
}
