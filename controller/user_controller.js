const User = require("../model/socially_model");
module.exports.view = (req, res) => {
    // let id = req.cookies.user_id;
    //  let name = req.cookies.name;
    // if (id != undefined) {
        return res.render("user/profile", {
            title: `Socially | `
        });
    // }
    // return res.redirect("../");
};

module.exports.endSession = (req , res) => {
    req.logout();
    return res.redirect("/");
}