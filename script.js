//your JS code here. If required.
let obj = {
  name: "student",
  getKeys() {
    let keys = Object.keys(obj);
    return keys.filter((key) => key !== this.getKeys.name);
  },
};

let student = Object.create(obj)