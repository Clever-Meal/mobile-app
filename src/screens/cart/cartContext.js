import React, { useReducer, createContext, useContext } from 'react';

const CartContext = createContext();

const initialState = {}
function reducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_ITEM': {
            return {
                ...state,
                ...payload,
            };
        };
        case 'REMOVE_ITEM': {
            const { id } = payload;
            return state.filter((item) => item.id != id);
        };
        case 'UPDATE_ITEM': {
            const { id } = payload;
            const newState = state.filter((item) => item.id != id);
            return {
                ...newState,
                ...payload,
            };
        };
        case 'RESET_CART': {
            return initialState;
    };
};
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value={{
            state, dispatch
        }} >
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const { state, dispatch } = useContext(CartContext);
    const addItem = (payload) => dispatch({ type: "ADD_ITEM", payload });
    const removeItem = (payload) => dispatch({ type: "REMOVE_ITEM", payload });
    const updateItem = (payload) => dispatch({ type: "UPDATE_ITEM", payload });
    const resetCart = () => dispatch({ type: "RESET_CART" });
    return (
        state,
        addItem,
        resetCart,
        removeItem,
        updateItem
    );
};

export { useCart, CartProvider}