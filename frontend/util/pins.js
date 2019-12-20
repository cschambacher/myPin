export const getPins = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pins'
    })
};

export const getSinglePin = id => (
    $.ajax({
        method: 'GET',
        url: `api/pins/${id}`
    })
);

export const createPin = (pin) => {
    return $.ajax({
        method: 'POST',
        url: '/api/pins',
        data: { pin }
    });
};

