const getUsers = (req, res, admin) =>{
    console.log("Api works");
    res.json([{"user1":"Luis"}]);
}

module.exports = {
    getUsers
}