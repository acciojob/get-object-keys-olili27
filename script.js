//your JS code here. If required.
let obj = {
  name: "student"
};

let student.__proto__.getKeys = function() {
	return Object.keys(this);
}