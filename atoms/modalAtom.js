// responsible for all the modal related actions
import { atom } from 'recoil';

export const currentModalState = atom({
    key: 'currentModalState', // unique ID (with respect to other atoms/selectors)
    // we don't always want the MODAL to be open
    default: false,
});