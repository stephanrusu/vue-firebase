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

  // return firestore
  //   .collection(collection)
  //   .onSnapshot((doc) => {
  //     doc.docChanges().forEach((snapshot) => {
  //       switch (snapshot.type) {
  //         case 'added':
  //           console.info('added', snapshot);
  //           break;
  //         case 'removed':
  //           console.info('removed', snapshot);
  //           break;
  //         case 'modified':
  //           console.info('modified', snapshot);
  //           break;
  //         default: break;
  //       }
  //     });
  //   });

  return firestore
    .collection(collection)
    .get();
}

export function addData(collection, collectionItem) {
  const newCollectionItem = { ...collectionItem };
  newCollectionItem.date = new Date();

  return firestore
    .collection(collection)
    .add(newCollectionItem);
}

export function updateData(collection, collectionItem) {
  const key = collectionItem['.key'];
  const newCollectionItem = { ...collectionItem };
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

export function getDocument(collection, documentId) {
  const docRef = firestore.collection(collection).doc(documentId);

  return docRef.get();
}
