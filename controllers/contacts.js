const contacts = require('../models/contact');
const listContacts = function(req, res) {
  const format = req.query.format;
  if(format === 'json') {
    res.send(contacts);
  } else {
    const html = contacts.map((contact) => {
      return `<strong>${contact.name}</strong>: ${contact.email}`
    }).join('<br />')
    res.send(html)
  }
}
module.exports = {
  listContacts
}
