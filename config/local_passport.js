// using named strategies. Have 1 for login, 1 for signup
// by default, if no name, would be called 'local'
const LocalStrategy = require('passport-local').Strategy;

function local_passport(User, passport) {
    passport.use('local-signup', new LocalStrategy({
            // default, local strategy uses username & password, will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows pass back  entire request to callback
        },
        function (req, email, password, done) {
            // asynchronous. User.findOne wont fire unless data is sent back
            process.nextTick(function () {

                // find user whose email is same as the forms' email
                // checks if user trying to login already exists
                User.findOne({
                    'local.email': email
                }, function (err, user) {
                    if (err)
                        return done(err);

                    // checks if there's a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // if no user with that email, create user
                        var newUser = new User();
                        newUser.local.email = email; // set user's local credentials
                        newUser.local.password = newUser.generateHash(password);
                        newUser.save(function (err) { // save the user
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
    // LOCAL LOGIN using named strategies, since have 1 for login and 1 for signup
    // default, if no name, would just be called 'local'

    passport.use('local-login', new LocalStrategy({
            // default, local strategy uses username and password, will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows to pass back entire request to callback
        },
        function (req, email, password, done) {
            // callback with email and password from our form
            console.log('finding user in mongodb');
            // find user whose email is same as forms' email
            // checking if user trying to login already exists
            User.findOne({
                'local.email': email
            }, function (err, user) {

                if (err) // if any errors, return error before anything else
                    return done(err);

                if (!user) // if no user found, return the message
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is to set flashdata (data shown once and the n destroyed) using connect-flash
                    
                // if user found but password is wrong
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Wrong password. Try again.')); // create loginMessage & save to session as flashdata
                return done(null, user); // return successful user
            });
        }));
}
module.exports = local_passport;