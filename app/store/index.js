import { EventEmitter } from 'events';
import firebase from 'firebase';

const db = firebase.initializeApp({
  apiKey: '#',
  databaseURL: '#',
});

const groupRef = db
  .database()
  .ref()
  .child('groups');

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

//  studentData - object
store.addStudent = (groupName, studentData) => {
  groupRef.child(groupName).push(studentData);
};

store.deleteGroup = groupName => {
  groupRef.child(groupName).remove();
};

export default store;
