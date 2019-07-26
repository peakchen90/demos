import { isFunction, isPlainObject } from '../../utils';
import ActionTypes from './actionTypes';

export default function createStore(reducer, preloadState, enhancer) {
  if (isFunction(preloadState) && enhancer === undefined) {
    enhancer = preloadState;
    preloadState = undefined;
  }

  const currentReducer = reducer;
  let currentState = preloadState;
  let listeners = [];
  let isDispatching = false;

  function getState() {
    if (isDispatching) {
      throw new Error('在reducer执行中不能调用store.getState()');
    }

    return currentState;
  }

  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('action必须是一个普通对象');
    }

    if (action.type === undefined) {
      throw new Error('action必须要有type属性');
    }

    if (isDispatching) {
      throw new Error('在reducer执行中不能调用store.dispatch()');
    }

    try {
      // 设置标志，防止在执行reducer函数过程中调用其他方法
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    // 触发监听器
    listeners.forEach(listener => listener());

    return action;
  }

  function subscribe(listener) {
    if (!isFunction(listener)) {
      throw new Error('listener必须为一个方法');
    }

    if (isDispatching) {
      throw new Error('在reducer执行中不能调用store.subscribe()');
    }

    listeners.push(listener);

    return function unsubscribe() {
      listeners = listeners.filter(item => item !== listener);
    };
  }

  dispatch({ type: ActionTypes.INIT });

  return {
    getState,
    dispatch,
    subscribe
  };
}
