// load up the user model
var User = require('../app/models/user');
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function (passport) {

    var serializer = require('./serializer');
    serializer(User, passport);

    var local_passport = require('./local_passport');
    local_passport(User, passport);

    var facebook_passport = require('./facebook_passport');
    facebook_passport(User, passport, configAuth);

    var spotify_passport = require('./spotify_passport');
    spotify_passport(User, passport, configAuth);

    // var windowslive_passport = require('./windowslive_passport');
    // windowslive(User, passport, configAuth);
}