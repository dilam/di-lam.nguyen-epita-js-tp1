/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import { getState } from "../store";

const get = i => {
    let state = getState
    if (i < state.length) {
        return state[i];
    } else {
        return null;
    }
};

export default get;
