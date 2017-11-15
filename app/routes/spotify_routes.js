// TODO 
//  spotify route authentication and login
function spotify_routes(app, passport) {
    console.log('inside spotify routes');
    app.get('/auth/spotify', passport.authenticate('spotify', {
        scope: 'email'
    }));

    //handle callback after spotify authenticated user
    app.get('/auth/spotify/callback',
        passport.authenticate('spotify', {
            successRedirect: '/calandarandprofile',
            failureRedirect: '/'

        }));

    //send  spotify  do authentication
    app.get('/connect/spotify', passport.authorize('spotify', {
        scope: 'email'
    }));

    //handle  callback after facebook authorized user
    app.get('/connect/spotify/callback',
        passport.authorize('spotify', {
            successRedirect: '/calandarandprofile',
            failureRedirect: '/'
        }));
    //unlink
    app.get('/unlink/spotify', function (req, res) {
        var user = req.user;
        user.spotify.token = undefined;
        user.save(function (err) {
            res.redirect('/calandarandprofile');
        });
    });
}
module.exports = spotify_routes;