const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/socially_model");
passport.use(new LocalStrategy({
    usernameField: "email",
},
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log("User not found");
                return done(err);
            }
            if (!user || user.password != password) {
                console.log("Wrong username/password");
                return done(null, false);
            }
            return done(null, user);
        });
    }
));


//Serializing sending to cookies
passport.serializeUser(function(user , done){
    done(null, user.id);
});

//deserializing
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log("User not found");
                return done(err);
        }
        return done(null, user);
    });
});

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect("/signin");
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    return next();
}
module.exports = passport;