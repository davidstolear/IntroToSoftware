//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://yo:davidstolear@ds123534.mlab.com:23534/introtosoftware', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyCnCz4JGzSSbrtbmZZsY8-gLuKLRUD5JG4'
  },
  port: 8080
};
