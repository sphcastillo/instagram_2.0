// responsible for all the modal related actions
import { atom } from 'recoil';

export const modalState = atom({
    key: 'modalState',
    // we don't always want the MODAL to be open
    default: false,
});