import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action_types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SearchRepositories
        });

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',{
                params: {
                    text: term
                }
            });

            const names = data.objects.map((result: any) => result.package.name);

            dispatch({
                type: ActionType.SearchRepositoriesSuccess,
                payload: names
            })
        } catch (error) {
            dispatch({
                type: ActionType.SearchRepositoriesError,
                payload: error.message
            });
        }
    };
};