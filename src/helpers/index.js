// const uniqueElementsBy = (arr, fn) =>
//   arr.reduce((acc, v) => {
//     if (!acc.some(x => fn(v, x))) acc.push(v);
//     return acc;
//   }, []);

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

  // return uniqueElementsBy(temp, (a, b) => a['.key'] === b['.key']);
  return temp;
}
