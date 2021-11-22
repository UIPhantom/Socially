const User = require("../model/socially_model");
// const alert = require("alert");
module.exports.view = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect("/user/profile");
    }
    return res.redirect("/");
};

// module.exports.signin = (req, res) => {
//     User.findOne({ email: req.body.email }, (err, user) => {
//         if (err) throw err;
//         if (user) {
//             if (user.password != req.body.password) {
//                 alert("Email or Password is not matched");
//                 return res.redirect("back");
//             }
//             res.cookie("user_id", user.id);
//             res.cookie("name", user.name);
//             return res.redirect("user/profile");
//         }
//         else {
//             return res.redirect("back");
//         }
//     });
// }
//sign in and create session
module.exports.createSession = function(req, res){
    return res.redirect("user/profile");
}