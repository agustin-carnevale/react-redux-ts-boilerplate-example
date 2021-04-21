import { Action } from '../actions';
import { ActionType } from '../action_types';

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RepositoriesState = initialState, 
    action: Action
): RepositoriesState => {
    switch (action.type) {
        case ActionType.SearchRepositories:
            return {loading: true, error: null, data: []};
        case ActionType.SearchRepositoriesSuccess:  
            return {loading: false, error: null, data: action.payload};
        case ActionType.SearchRepositoriesError:  
            return {loading: false, error: action.payload, data: []};
        default:
            return state;
    }
};

export default reducer;
