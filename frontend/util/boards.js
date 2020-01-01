export const getBoards = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/boards`
    })
};

export const getSingleBoard = boardId => (
    $.ajax({
        method: 'GET',
        url: `api/boards/${boardId}`
    })
);

export const createBoard = (board) => {
    return $.ajax({
        method: 'POST',
        url: '/api/boards',
        data: {board},
    });
};

export const updateBoard = board => {
    debugger;
    return $.ajax({
        url: `/api/boards/${board.id}`,
        method: 'patch',
        data: {board},
    });
};

export const deleteBoard = boardId => (
    $.ajax({
        url: `/api/boards/${boardId}/`,
        method: 'DELETE'
    })
)