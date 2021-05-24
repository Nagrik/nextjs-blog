import {useMemo} from 'react'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import {PostsActionType} from "./actions/postActions";
import {DELETE_POST, SET_LOADED_POSTS, SET_POSTS} from "./constants";

let store

type InitialStatePostsType = {
    posts:Array<string>,
    isLoadedPosts: boolean
}

const initialState:InitialStatePostsType = {
    posts:[],
    isLoadedPosts:false,
}

const reducer = (state = initialState, action:PostsActionType ) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                isLoadedPosts: true,
                posts: action.payload,
            }
        case DELETE_POST:
            return {
                ...state,
                id: action.payload,
            }
        case SET_LOADED_POSTS:{
            return {
                ...state,
                isLoadedPosts: action.payload
            }
        }
        default:
            return state
    }
}

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}

