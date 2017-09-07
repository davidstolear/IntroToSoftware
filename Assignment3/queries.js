/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
  var mylisting=Listing.find({ code: 'LBW' }, function(err, Listing) {
  console.log(mylisting.code)
  if (err) throw err;
  console.log(Listing.code);
  });
  };

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.find({ code: 'CABL' }, function(err, user) {
  if (err) throw err;
  Listing.remove(function(err) {
    if (err) throw err;
    console.log('User successfully deleted!');
  });
});
};

var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOneAndUpdate({ code: 'PHL' }, { address: 'University and 22nd St' }, function(err, user) {
     if (err) throw err;

     // we have the updated user returned to us
     console.log(user);
   });
};

var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, users) {
   if (err) throw err;

   // object of all the users
   console.log(users);
 });
};

findLibraryWest();
//removeCable();
//updatePhelpsMemorial();
//retrieveAllListings();
