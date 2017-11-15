
// will need to test if works ... should almost work
const SpotifyStrategy = require('passport-spotify').Strategy;

function spotify_passport(User, passport, configAuth) {

    passport.use(new SpotifyStrategy({ // pull app id & secret from our auth.js
            clientID: configAuth.spotifyAuth.clientID,
            clientSecret: configAuth.spotifyAuth.clientSecret,
            callbackURL: configAuth.spotifyAuth.callbackURL,
            passReqToCallback: true // pass in req from our route (checks if user logged in or not)
        },
        
        // fb sends back the token and profile
        function (req, token, refreshToken, profile, done) {

            // asynchronous
            process.nextTick(function () {

                // checks if user already loggedin
                if (!req.user) {
                    // finds user in database based on spotify id
                    User.findOne({
                        'spotify.id': profile.id
                    }, function (err, user) {
                        // if error, stop everything & return that
                        // i.e. an error connecting to database
                        if (err)
                            return done(err);

                        // if user found, log them in
                        if (user) {
                            // if user id already but no token (user was linked and then removed)
                            if (!user.spotify.token) {
                                user.spotify.token = token;
                                user.spotify.name = profile.name.givenName + ' ' + profile.name.familyName;
                                user.spotify.email = profile.emails[0].value;

                                user.save(function (err) {
                                    if (err)
                                        throw err;
                                    return done(null, user);
                                });
                            }

                            return done(null, user); // user found, return that user
                        } else {
                            // if no user found with that spotify id, create them
                            var newUser = new User();
                            // set all of the spotify information in our user model
                            newUser.spotify.id = profile.id; // set the users' spotify id
                            newUser.spotify.token = token; // we will save the token that spotify provides to user                    
                            newUser.spotify.name = profile.name.givenName;
                            // newUser.spotify.email = profile.emails[0].value; // spotify can return multiple emails so we'll take the first
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
                    // update current users' spotify credentials

                    user.spotify.id = profile.id;
                    user.spotify.token = token;
                    user.spotify.name = profile.name.givenName + ' ' +
                        // user.spotify.email = profile.emails[0].value;
                        // save the user
                        user.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                }
            });
        }));
}
module.exports = spotify_passport;