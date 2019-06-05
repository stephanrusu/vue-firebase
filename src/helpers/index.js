export function firebaseObjectToArray(fbObject) {
  const temp = [];
  // eslint-disable-next-line
  for (const key in fbObject) {
    if (Object.hasOwnProperty.call(fbObject, key)) {
      temp.push({ '.key': key, ...fbObject[key] });
    }
  }
  return temp;
}

export function test() {
  return true;
}

export function objectFlip(obj) {
  const ret = {};
  Object.keys(obj).forEach((key) => {
    ret[obj[key]] = key;
  });
  return ret;
}
