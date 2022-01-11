const User = require("../models/usermodel");


// Display list of all Users.
exports.user_list=async(req, res, next)=> {
    try{
        const users=await User.fetchAll();
        res.json({status:true,users});
    }catch(error){res.send(error)}
}

// Display Userdetails with specific id.
exports.user_id=async (req, res) => {
    try{
        var users = await User.where('id',parseInt(req.params.id)).fetch();
        res.json(users);
    }catch(error){res.send(error)}
};

// add items on Userlist
exports.user_post=async(req,res)=>{
    try{
      var users = await  User.forge({...req.body}).save();
      res.json(users);
    }catch(error){res.send(error)}
};
 
// update Useritems
exports.user_patch=async (req, res) => {
    try{
      var users = await  User.where('id',parseInt(req.params.id)).save({...req.body},{ patch: true });
      res.json(users);  
    }catch(error){res.send(error)}  
};

//delete User items
exports.user_delete= async (req, res) => {
    try{
      var users = await  User.where('id',parseInt(req.params.id)).destroy();
      res.json(users); 
    }catch(error){res.send(error)}  
};
