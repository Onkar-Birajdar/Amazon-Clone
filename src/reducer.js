export const initialState = {
    basket: [
        {           id :  "12321341",
                    title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
                    price: 11.96,
                    rating: 5,
                    image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
         }
    ],
    user: null,
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                );
            }

            return {
                ...state,
                basket: newBasket,
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;
