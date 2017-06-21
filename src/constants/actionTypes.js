"use strict";

var keyMirror = require('react/lib/keyMirror');

/*
    with key mirror we only need to define the value in the left side of the list and keyMirror reflects in the value

    example without keymirror { CREATE_AUTHOR: CREATE_AUTHOR, DELETE_AUTHOR: DELETE_AUTHOR }
    example with keymirror { CREATE_AUTHOR: null, DELETE_AUTHOR: null }
    
*/

module.exports = keyMirror({
    INITIALIZE: null,
    CREATE_AUTHOR: null,
    UPDATE_AUTHOR: null    
});