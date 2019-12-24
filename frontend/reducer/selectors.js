export const selectAllPins = ({ entities: { pins } }) => Object.values(pins)
// Object.keys(pins).map(id => pins[id]);
export const selectPin = ({ entities: { pins } }, id) => {
    if (pins[id]) {
        const pin = pins[id];
        return pin;
    }
    return {};
};
export const selectAllBoards = ({ entities: { boards } }) => Object.values(boards)

export const selectBoard = ({ entities: { boards } }, id) => {
    if (boards[id]) {
        const board = boards[id];
        return board;
    }
    return {};
};