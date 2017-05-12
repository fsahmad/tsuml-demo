const prefix = 'PLAYGROUND/PLAYGROUNDTABS';

export const CHANGE_TAB = `${prefix}/CHANGE_TAB`;

export const CODE_UPDATE = `${prefix}/CODE_UPDATE`;

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
