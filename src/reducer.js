export const SongReducer = (state, action) => {
    switch (state.type) {
        case 'PLAY_SONG':
            return { ...state, isPlaying: true }
        case 'PAUSE_SONG':
            return { ...state, isPlaying: false }
        case 'CHANGE_SONG':
            return {
                ...state, song: action.payload.music
            }
        default:
            return state;
    }
}

export const QueueReducer = (state, action) => {
    switch (state.type) {
        case 'ADD_QUEUE':
            if (state.includes(action.payload.music))
                return state
            else
                return [...state, action.payload.music]
        case 'REMOVE_QUEUE':
            return state.filter(m => m.id !== action.payload.music.id)
        default:
            return state;
    }
}