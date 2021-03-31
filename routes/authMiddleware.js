module.exports.isAuth = (req, res, next) => {
    if(req.isAuthenticated()){
        next()
    } else {
        res.status(401).json({msg: 'You are not authorized to view this resource'})
    }
}

module.exports.isAdmin = (req, res, next) => {
    console.log(req.user)
    if(req.isAuthenticated() && req.user.admin){
        next()
    } else {
        res.status(401).json({msg: 'You are not authorized to view this resource becoz you are not admin'})
    }
}

