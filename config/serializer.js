function serializer(User, passport) {
    // to serialize user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // to deserialize user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}
module.exports = serializer;