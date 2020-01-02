export const getPins = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/pins`
    })
};

export const getHomePins = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/home'
    })
};

export const getSinglePin = (pinId)=> (
    $.ajax({
        method: 'GET',
        url: `api/pins/${pinId}`
    })
);

export const createPin = (pin) => {
    return $.ajax({
        method: 'POST',
        url: `/api/pins`,
        data: pin,
        contentType: false,
        processData: false
    });
};

export const updatePin = (pin, pinId) => {
    debugger;
    return $.ajax({
        url: `/api/pins/${pinId}`,
        method: 'patch',
        data: pin,
        contentType: false,
        processData:false
    })
};

export const deletePin = (pinId) => (
    $.ajax({
        url: `/api/pins/${pinId}/`,
        method: 'DELETE'
    })
)