//your JS code here. If required.
let student = {
  name: "student"
};

student.__proto__.getKeys = function() {
	return Object.keys(this);
}