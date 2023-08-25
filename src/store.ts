import { createSlice, configureStore, createSelector } from '@reduxjs/toolkit';

export type Breed = {
    reference_image_id: string;
    dateOfEditing?: string;
    category?: string;
};

const breedsSlice = createSlice({
    name: 'breeds',
    initialState: {
        breeds: [] as Breed[]
    },
    reducers: {
        addBreed: (state, action) => {
            if (!state.breeds.includes(action.payload)) {
                state.breeds.push(action.payload);
            }
        },
        removeBreed: (state, action) => {
            state.breeds = state.breeds.filter((breed) => breed.reference_image_id !== action.payload);
        },
    }
});

export const { addBreed, removeBreed } = breedsSlice.actions;

const selectSelf = (state: { breeds: Breed[] }) => state;

export const selectBreeds = createSelector(
    selectSelf,
    (state) => state.breeds || []
);

const store = configureStore({
    reducer: breedsSlice.reducer
});

export default store;
