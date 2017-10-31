import { EventEmitter } from 'events';
import firebase from 'firebase';
import { remote } from 'electron';

const myWindow = remote.getCurrentWindow();

const db = firebase.initializeApp({
  apiKey: 'AIzaSyCGSqpNlu4hGocT-6iK0lWJP-TaSVaeJbE',
  databaseURL: 'https://fir-1fdc2.firebaseio.com/',
});

const groupRef = db
  .database()
  .ref()
  .child('groups');

const store = new EventEmitter();
const localData = [];

db
  .database()
  .ref()
  .on(
    'value',
    snapshot => {
      const apData = snapshot.val();
      if (apData) {
        const { groups } = apData;
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

store.collectLocalGroupData = data => {
  localData.push(data);
};

store.changeNameGroups = () => {
  let cloneData = {};
  localData.forEach(el => {
    groupRef.child(...Object.keys(el)).on('value', snapshot => {
      cloneData = snapshot.val();
    });
    groupRef.child(...Object.values(el)).set(cloneData);
    groupRef.child(...Object.keys(el)).remove();
  });
};
store.max = () =>
  myWindow.isMaximized() ? myWindow.unmaximize() : myWindow.maximize();
store.min = () => myWindow.minimize();
store.exit = () => {
  store.changeNameGroups();
  myWindow.close();
};

export default store;
