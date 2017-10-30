import { EventEmitter } from 'events';
import firebase from 'firebase';

const db = firebase.initializeApp({
  apiKey: 'AIzaSyCGSqpNlu4hGocT-6iK0lWJP-TaSVaeJbE',
  databaseURL: 'https://fir-1fdc2.firebaseio.com/',
});

const groupRef = db
  .database()
  .ref()
  .child('groups');

const studentRef = groupRef.child('student');

const store = new EventEmitter();

let groups = {};

db
  .database()
  .ref()
  .on(
    'value',
    snapshot => {
      const apData = snapshot.val();
      if (apData) {
        groups = apData.groups;
        store.emit('data-updated', groups);
      }
    },
    err => {
      throw new Error(`the read failed ${err.code}`);
    },
  );

/**
 * To simultaneously write to specific children of a node 
 * without overwriting other child nodes, use the update() method.
 */

store.addGroup = groupName => {
  groupRef.update({
    [groupName]: {
      data: '',
    },
  });
};

store.addStudent = (groupName, studentData) => {
  console.log(groupRef);
  groupRef.update({
    [groupName]: {
      data: studentData,
    },
  });
};

store.deleteGroup = groupName => {
  groupRef.child(groupName).remove();
};

export default store;
