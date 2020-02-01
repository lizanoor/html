const contacts = require('../models/contact');
const student1 = function(req, res) {
    res.send(contacts[0]);
}
module.exports = {
  student1
}
