const contacts = require('../models/contact');
const student2 = function(req, res) {
    res.send(contacts[1]);
}
module.exports = {
  student2
}
