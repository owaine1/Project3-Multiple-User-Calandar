    //  facebook route authentication and login
    function facebook_routes(app, passport) {
        console.log('inside FB routes');
        app.get('/auth/facebook', passport.authenticate('facebook', {
            scope: 'email'
        }));

        //handle callback after facebook authenticated user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect: '/calandarandprofile',
                failureRedirect: '/'

            }));

        //send  facebook  do authentication
        app.get('/connect/facebook', passport.authorize('facebook', {
            scope: 'email'
        }));

        //handle  callback after facebook authorized user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect: '/calandarandprofile',
                failureRedirect: '/'
            }));

        //unlink
        app.get('/unlink/facebook', function (req, res) {
            var user = req.user;
            user.facebook.token = undefined;
            user.save(function (err) {
                res.redirect('/calandarandprofile');
            });
        });
    }
    module.exports = facebook_routes;