function type(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

export function isPlainObject(val) {
  return type(val) === 'object';
}

export function isArray(val) {
  return Array.isArray(val);
}

export function isFunction(val) {
  return typeof val === 'function';
}

export function isEmpty(val) {
  return val == null || val === '';
}

export function warn(message) {
  try {
    throw new Error(message);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}
