function randomString() {
  return Math.random().toString(36).slice(2);
}

const ActionTypes = {
  INIT: `@@redux/INIT__${randomString()}`,
  REPLACE: `@@redux/REPLACE__${randomString()}`,
};

export default ActionTypes;
