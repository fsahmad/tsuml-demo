import { Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import * as fetch from 'isomorphic-fetch';

const prefix = 'PLAYGROUND/PLAYGROUNDTABS';

export const CHANGE_TAB = `${prefix}/CHANGE_TAB`;

export const CODE_UPDATE = `${prefix}/CODE_UPDATE`;

export const REQUEST_SAMPLE_FETCH = `${prefix}/REQUEST_SAMPLE_FETCH`;
export const SUCCESS_SAMPLE_FETCH = `${prefix}/SUCCESS_SAMPLE_FETCH`;
export const FAILURE_SAMPLE_FETCH = `${prefix}/FAILURE_SAMPLE_FETCH`;

export enum CodeSample {
    Simple,
    Raytracer
}

export const samples = [
    {
        id: CodeSample.Simple,
        label: 'Simple',
    },
    {
        id: CodeSample.Raytracer,
        label: 'Raytracer',
    },
];

export function changeTab(value: string) {
    return {
        type: CHANGE_TAB,
        value
    };
}

export function updateCode(code: string) {
    return {
        type: CODE_UPDATE,
        code
    };
}

export function fetchSampleRequest(sample: CodeSample) {
    return {
        type: REQUEST_SAMPLE_FETCH,
        sample
    };
}

export function selectSample(sample: CodeSample) {
    let url = window.location.origin + window.location.pathname;
    switch (sample) {
        case CodeSample.Simple:
            url = url + 'example/simple.ts';
            break;
        case CodeSample.Raytracer:
            url = url + 'example/raytracer.ts';
            break;
        default:
            return fetchSampleRequest(sample);
    }

    const thunkAction: ThunkAction<
        Promise<{ type: string; content: string; } | { type: string; error: any} >,
        any,
        null
        > = (dispatch: Dispatch<{}>) => {
            dispatch(fetchSampleRequest(sample));

            return fetch(url)
                .then(response => response.text())
                .then(
                content => dispatch(fetchSampleSuccess(content)),
                error => dispatch(fetchSampleFailure(error))
                );
        };
    return thunkAction;
}

export function fetchSampleSuccess(content: string) {
    return {
        type: SUCCESS_SAMPLE_FETCH,
        content
    };
}

export function fetchSampleFailure(error: any) {
    return {
        type: FAILURE_SAMPLE_FETCH,
        error
    };
}
