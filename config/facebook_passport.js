const FacebookStrategy = require('passport-facebook').Strategy;

function facebook_passport(User, passport, configAuth) {
    passport.use(new FacebookStrategy({
            // pull app id & secret from our auth.js
            clientID: configAuth.facebookAuth.clientID,
            clientSecret: configAuth.facebookAuth.clientSecret,
            callbackURL: configAuth.facebookAuth.callbackURL,
            passReqToCallback: true // pass in req from our route (checks if user logged in or not)
        },
        // fb sends back the token and profile
        function (req, token, refreshToken, profile, done) {

            // asynchronous
            process.nextTick(function () {
                // checks if user already loggedin
                if (!req.user) {
                    // finds user in database based on FB id
                    User.findOne({
                        'facebook.id': profile.id

                    }, function (err, user) {
                        if (err) // if error, stop everything & return that
                            return done(err);
                        if (user) { // if user found, log them in

                            // if user id already but no token (user was linked, then removed)
                            if (!user.facebook.token) {
                                user.facebook.token = token;
                                user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                                user.facebook.email = profile.emails[0].value;
                                user.save(function (err) {
                                    if (err)
                                        throw err;
                                    return done(null, user);
                                });
                            }
                            return done(null, user); // user found, return that user

                        } else {
                            // if no user found with that facebook id, create them
                            var newUser = new User();
                            // set all of the facebook information in our user model
                            newUser.facebook.id = profile.id; // set the users' FB id     
                            newUser.facebook.token = token; // we will save the token that FB provides to user
                            newUser.facebook.name = profile.name.givenName;
                            // newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                            // save our user to the database
                            newUser.save(function (err) {
                                if (err)
                                    throw err;
                                // if successful, return the new user
                                return done(null, newUser);
                            });
                        }
                    });
                } else {
                    // user already exists & logged in, have to link accounts
                    var user = req.user; // pull user out of the session
                    // update current users' FB credentials
                    user.facebook.id = profile.id;
                    user.facebook.token = token;
                    user.facebook.name = profile.name.givenName + ' ' +
                        // user.facebook.email = profile.emails[0].value;
                        user.save(function (err) { // save the user
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                }
            });
        }));
}
module.exports = facebook_passport;