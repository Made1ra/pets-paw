import { createSlice, combineReducers, configureStore } from '@reduxjs/toolkit';

export const rectangles = [
    {
        backgroundColor: 'bg-indigo-300',
        url: '../src/assets/vote-table.svg',
        text: 'VOTING'
    },
    {
        backgroundColor: 'bg-green-300',
        url: '../src/assets/pet-breeds.svg',
        text: 'BREEDS'
    },
    {
        backgroundColor: 'bg-amber-200',
        url: '../src/assets/images-search.svg',
        text: 'GALLERY'
    }
];

export type Category = 'Likes' | 'Favourites' | 'Dislikes';

export type Breed = {
    reference_image_id: string;
    dateOfEditing?: string;
    category?: Category;
    url?: string;
};

export type Action = 'added to' | 'removed from';

export type Log = {
    reference_image_id: string;
    dateOfEditing: string;
    category: Category;
    action: Action;
};

const logsSlice = createSlice({
    name: 'logs',
    initialState: {
        logs: [] as Breed[]
    },
    reducers: {
        addLog: (state, action) => {
            state.logs.push(action.payload);
        }
    }
});

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
            state.breeds = state.breeds.filter((breed) => breed.reference_image_id !== action.payload.reference_image_id);
        }
    }
});

export const { addLog } = logsSlice.actions;

export const { addBreed, removeBreed } = breedsSlice.actions;

const rootReducer = combineReducers({
    breeds: breedsSlice.reducer,
    logs: logsSlice.reducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
