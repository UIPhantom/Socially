module.exports.view = (req, res) => {
    res.render("user/wallposts", {
        title: "Socially | Posts"
    });
}