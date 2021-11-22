const User = require("../model/socially_model");

module.exports.view = (req, res) => {
    const firstName = res.locals.user.firstname;
    const lastName = res.locals.user.lastname;
    const email = res.locals.user.email;
    // let id = req.cookies.user_id;
    //  let name = req.cookies.name;
    // if (id != undefined) {
        return res.render("user/profile", {
            title: `Socially | ${firstName} ${lastName}`,
            name: `${firstName} ${lastName}`,
            email: email,
        });
    // }
    // return res.redirect("../");
};

module.exports.endSession = (req , res) => {
    req.logout();
    return res.redirect("/");
}