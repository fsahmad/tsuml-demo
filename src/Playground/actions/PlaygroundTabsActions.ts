const prefix = 'PLAYGROUND/PLAYGROUNDTABS';

export const CHANGE_TAB = `${prefix}/CHANGE_TAB`;

export function changeTab(value: any) {
    return {
        type: CHANGE_TAB,
        value
    };
}
