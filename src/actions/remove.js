/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import { getState } from "../store";

const remove = element => {
    let i = getState().indexOf(element);
    if (i > -1) {
        getState().splice(i, 1);
    }
};

export default remove;
