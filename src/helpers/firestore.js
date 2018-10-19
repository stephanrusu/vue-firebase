import { firestore } from '../firebase';

// return a promise
export function getAllData(collection) {
  // firestore
  //   .collection(TYPE_MESSAGES)
  //   .get()
  //   .then((query) => {
  //     const temp = firestoreObjectToArray(query);
  //     commit('setLoadedMessages', temp);
  //   });
  // firestore
  //   .collection(TYPE_MESSAGES)
  //   .onSnapshot((query) => {
  //     const temp = firestoreObjectToArray(query);
  //     commit('setLoadedMessages', temp);
  //   });

  return firestore
    .collection(collection)
    .get();
}


export function addData(collection, collectionItem) {
  const newCollectionItem = Object.assign({}, collectionItem);
  newCollectionItem.date = new Date();

  return firestore
    .collection(collection)
    .add(newCollectionItem);
}

export function updateData(collection, collectionItem) {
  const key = collectionItem['.key'];
  const newCollectionItem = Object.assign({}, collectionItem);
  delete newCollectionItem['.key'];

  return firestore
    .collection(collection)
    .doc(key)
    .set(newCollectionItem);
}

export function removeData(collection, key) {
  return firestore
    .collection(collection)
    .doc(key)
    .delete();
}
