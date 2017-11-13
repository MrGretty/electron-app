export default function filter(groupName, key) {
  return groupName.filter(student => {
    return student === key;
  });
}
