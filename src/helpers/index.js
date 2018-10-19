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

export function firestoreObjectToArray(fsQuery) {
  const temp = [];

  fsQuery.forEach((doc) => {
    temp.push({ '.key': doc.id, ...doc.data() });
  });

  return temp;
}

export function test() {
  return true;
}
