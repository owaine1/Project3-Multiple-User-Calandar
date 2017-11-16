module.exports = function (app, passport) {
    console.log('loaded routes');

    var local_routes = require('./local_routes');
    local_routes(app, passport);

    var facebook_routes = require('./facebook_routes');
    facebook_routes(app, passport);

    var spotify_routes = require('./spotify_routes');
    spotify_routes(app, passport); // TODO 

    // HOME PAGE (with login links) ========
    app.get('/', function (req, res) {
        console.log('getting index.ejs');
        res.render('index.ejs'); // loads index.ejs
    });
    // profile
    // app.get('/calandarandprofile', isLoggedIn, function (req, res) {
    //     console.log('getting calandarandprofile');
    //     res.render('calandarandprofile.ejs', {
    //         user: req.user // get the user out of session and pass to template
    //     });
    // });
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {
    // route middleware. User logged in? If user authenticated in session, carry on 
    if (req.isAuthenticated())
        return next();
    //  user NOT authenticated, redirect
    res.redirect('/');
}