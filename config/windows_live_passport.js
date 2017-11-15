//  might skip this...
// passport.use(new WindowsLiveStrategy({
//   clientID: WINDOWS_LIVE_CLIENT_ID,
//   clientSecret: WINDOWS_LIVE_CLIENT_SECRET,
//   callbackURL: "http://www.example.com/auth/windowslive/callback"
// },
// function(accessToken, refreshToken, profile, cb) {
//   User.findOrCreate({ windowsliveId: profile.id }, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));