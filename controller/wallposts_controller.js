const PostModel = require("../model/posts_model");
module.exports.view = (req, res) => {
    if(req.isAuthenticated()){
        PostModel.find({},).sort({createdAt: -1}).populate("user").exec((err, posts)=>{
            return res.render("user/wallposts", {
                title: "Socially | Posts",
                post: posts
            });
        });
    }
    else{
        return res.redirect("/signin");
    }
}

module.exports.post = (req, res) => {
    PostModel.create({
        post: req.body.post,
        user: req.user._id
    }, function (err, post){
        if(err){
            
            console.log("error in creating a post", err);
            return;
        }
        return res.redirect("back");
    });
}

module.exports.delete = (req, res) => {
    PostModel.findById(req.params.id,function (err, post) {
        if(err) throw err;
        if(post.user == req.user.id){
            post.remove();
            return res.redirect("back");
        }
        else{
            return res.redirect("back");
        }
    });
}

module.exports.photos = (req, res) => {
  res.render("user/photos", {
      title : "Socially | Photos"
  });  
}