const User = require("../model/socially_model");
const alert = require("alert");
module.exports.view = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect("/user/profile");
    }
    return res.render("signup", {
        title: "Socially | Signup"
    });
}

module.exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log("No email found");
            return;
        };
        if (!user) {
            User.create(req.body, (err, newUser) => {
                if (err) throw err;
                alert("User has been created" , newUser);
                return res.redirect("signin");
            });
        }
        else {
            alert("User already exists");
            return res.redirect("back");
        }
    });
};