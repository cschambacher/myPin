export const getUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    })
};

export const getSingleUser = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`
    })
);