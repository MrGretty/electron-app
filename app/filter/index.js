export default function filter(list, key) {
  const searched = {};
  Object.values(list).forEach((student, index) => {
    if (student.surname.toLowerCase().startsWith(key.toLowerCase())) {
      Object.defineProperty(searched, Object.keys(list)[index], {
        value: student,
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }
  });
  return searched;
}
