module.exports.view = (req, res) => {
    const firstName = res.locals.user.firstname;
    const lastName = res.locals.user.lastname;
    const email = res.locals.user.email;
    
    if(req.isAuthenticated()){
       return res.render("user/wallposts", {
            title: "Socially | Posts",
            name: `${firstName} ${lastName}`,
            email: `${email}`
        });
    }
    return res.redirect("/signin");
}

module.exports.photos = (req, res) => {
  res.render("user/photos", {
      title : "Socially | Photos"
  });  
}