import * as bookMark from '../actions/bookmark.actions';

export interface BookMarkReducer {
  bookmarkReducer: any;
}

export interface BookMarkState extends BookMarkReducer{
    bookmark: any;
}

export const initialState: BookMarkState = {
  bookmark: null,
  bookmarkReducer: null,
};

export function bookmarkReducer(state = initialState, action: bookMark.Actions) {
    switch (action.type) {
        case bookMark.GET_BOOK_MARK:
            return {
                ...state,
                id: action.payload
            };
        case bookMark.GET_BOOK_MARK_SUCCESS:
            return {
                ...state,
                bookmark: action.payload
            };
        case bookMark.BOOK_MARK_COURSE:
        case bookMark.UNDO_BOOK_MARK_COURSE:
            return {
                ...state,
                userId: action.payload.userId,
                courseId: action.payload.courseId
            };
        default:
            return state;
    }
}

