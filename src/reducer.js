export const initialState = {
    basket: [
        {
            id: "23445930",
            title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
            price: 98.99,
            rating: 5,
            image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
        },
    ],
    user: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            return { state };
        default:
            return state;
    }
}

export default reducer;
