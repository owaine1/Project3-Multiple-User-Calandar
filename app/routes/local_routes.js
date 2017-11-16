function local_routes(app, passport) {
    // LOGIN show the login form
    app.get('/login', function (req, res) {
        console.log('doing signup');
        // render the page and pass in any pre-existing data if it exists
        res.render('login.ejs', {
            message: req.flash('loginMessage')
        });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {

        successRedirect: '/calandarandprofile', // redirect to the secure calandarandprofile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    //signup form
    app.get('/signup', function (req, res) {
        console.log('doing signup');
        // render page & pass in flash data if exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    // process signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/calandarandprofile', // redirect to secure calandarandprofile section
        failureRedirect: '/signup', // redirect back to signup page if error
        failureFlash: true // allow flash messages
    }));

    // AUTHORIZE (ALREADY LOGGEDIN / CONNECTING OTHER SOCIAL ACCOUNT)
    // local
    app.get('/connect/local', function (req, res) {
        res.render('connect_local.ejs', {
            message: req.flash('loginMessage')
        });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/calandarandprofile', // redirect to secure calandarandprofile
        failureRedirect: '/connect/local', // redirect back to signup page if an error
        failureFlash: true // allow flashup messages
    }));


    // unlink
    app.get('/unlink/local', function (req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            res.redirect('/calandarandprofile');
        });
    });


}

module.exports = local_routes;

// app.get('/test', function (req, res) {
//     res.render('test') })