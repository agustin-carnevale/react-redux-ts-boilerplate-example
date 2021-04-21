import {ActionType} from '../action_types';

interface SearchRepositoriesAction {
    type: ActionType.SearchRepositories;
}
interface SearchRepositoriesSuccessAction {
    type: ActionType.SearchRepositoriesSuccess;
    payload: string[];
}
interface SearchRepositoriesErrorAction {
    type: ActionType.SearchRepositoriesError;
    payload: string;
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;
