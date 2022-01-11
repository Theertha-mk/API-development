const User = require("../models/usermodel");


// Display list of all Users.
exports.user_list=async(req, res, next)=> {
    const users=await User.fetchAll();
    res.json({status:true,users});
}

// Display Userdetails with specific id.
exports.user_id=async (req, res) => {
    var users = await User.where('id',parseInt(req.params.id)).fetch();
    res.json(users);
};

// add items on Userlist
exports.user_post=async(req,res)=>{
    var users = await  User.forge({...req.body}).save();
    res.json(users);
};

// update Useritems
exports.user_put=async (req, res) => {
    var users = await  User.where('id',parseInt(req.params.id)).save({...req.body},{ patch: true });
    res.json(users);  
}

//delete User items
exports.user_delete= async (req, res) => {
    var users = await  User.where('id',parseInt(req.params.id)).destroy();
    res.json(users);  
}