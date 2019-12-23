export const getPins = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pins'
    })
};

export const getHomePins = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pins/homeindex'
    })
};

export const getSinglePin = pinId => (
    $.ajax({
        method: 'GET',
        url: `api/pins/${pinId}`
    })
);

export const createPin = (pin) => {
    return $.ajax({
        method: 'POST',
        url: '/api/pins',
        data: pin,
        contentType: false,
        processData: false
    });
};

export const updatePin = pin => (
    $.ajax({
        url: `/api/pins/${pin.id}`,
        method: 'patch',
        data: pin,
        contentType: false,
        processData:false
    })
);

export const deletePin = pinId => (
    $.ajax({
        url: `/api/pins/${pinId}/`,
        method: 'DELETE'
    })
)