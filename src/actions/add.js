/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

import { getState, setState } from "../store"

const add = element => {
    if (typeof(element) === 'string')
        getState().push(element);
    else if (Array.isArray(element))
        setState([...getState(), ...element]);
};

export default add;
