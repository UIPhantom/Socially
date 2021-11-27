module.exports.view = (req, res) => {
    const firstName = res.locals.user.firstname;
    const lastName = res.locals.user.lastname;
    const email = res.locals.user.email;
    res.render("user/wallposts", {
        title: "Socially | Posts",
        name: `${firstName} ${lastName}`,
        email: `${email}`
    });
}