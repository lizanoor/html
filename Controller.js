const contacts = require('./contacts');
const listContacts = function(req, res) {
  res.status(200).send(contacts);
}
module.exports = {
  listContacts
}
app.get('/contacts/1', (req, res) => {
  res.send(contacts[0])
});
