// "use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import UserApi from '../api/userApi';
import ActionTypes from '../constants/actionTypes';

console.log('In user actions');

var UserActions = {
  createUser: function(user) {
    var newUser = UserApi.saveUser(user);

    // Notify all stores that a user was created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_USER,
      user: newUser
    });
  }
};

module.exports = UserActions;
