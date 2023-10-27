import { State, Action } from "@/types";

const actionTypes = {
    SET_ROLE: "SET_ROLE",
    SET_USER: "SET_USER",

    SET_POSITIONS: "SET_POSITIONS",
    ADD_POSITION: "ADD_POSITION",
    DELETE_POSITION: "DELETE_POSITION"
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.SET_ROLE:
            return {
                ...state,
                role: action.payload
            }
        case actionTypes.SET_POSITIONS:
            return {
                ...state,
                positions: action.payload
            }
        case actionTypes.ADD_POSITION:
            return {
                ...state,
                positions: [...state.positions, action.payload]
            }
        case actionTypes.DELETE_POSITION:
            // Filter out the position to be deleted by comparing _id
            const updatedPositions = state.positions.filter(
                (position) => position._id !== action.payload._id
            );
            return {
                ...state,
                positions: updatedPositions
            };
    }
}

export default reducer