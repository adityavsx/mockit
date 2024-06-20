import { configureStore } from '@reduxjs/toolkit'
import sectionReducer from './section/sectionSlice'
import addSectionReducer from './section/addSectionSlice'
export const makeStore = () => {
    return configureStore({
        reducer: {
            section: sectionReducer,
            addSection : addSectionReducer
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
