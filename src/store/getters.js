export default {
    animalsCount: (state) => {
        return state.length;
    },
    getAllCats: (state) => {
        return state;
    },
    getAllDogs: (state) => {
        return state
        // return state.dogs;
    }
};
