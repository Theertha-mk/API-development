const bookshelf = require('../database');
const User = bookshelf.model('User', {
    tableName: 'users',
     });
    
    module.exports =User;