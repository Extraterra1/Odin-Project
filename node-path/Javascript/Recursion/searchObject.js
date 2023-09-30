let counter = 0;

function contains(obj, val) {
  if (obj === val) return true;
  if (Object.keys(obj).length === 0 || typeof obj !== 'object') return false;

  for (const key in obj) {
    if (obj[key] == val) return contains(val, val);
    return contains(obj[key], val);
  }
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
};

console.log(
  contains(nestedObject, 44) // true
);
