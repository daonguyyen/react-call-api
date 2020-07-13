const { act } = require("react-dom/test-utils");

var initialState = [
    {
        id : 1,
        name : 'iPhone X',
        price : 500,
        status : true
    },
    {
        id : 2,
        name : 'Samsung GLX',
        price : 300,
        status : true
    },
    {
        id : 3,
        name : 'Oppo',
        price : 100,
        status : false
    }
];
const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products;