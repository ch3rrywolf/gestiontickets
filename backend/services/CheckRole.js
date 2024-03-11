require('dotenv').config();

function checkroleSuperAdmin(req, res, next) {
    if (
        res.locals.Role !== process.env.SUPERADMIN 
    )
    res.sendStatus(401);
    else next();
}

function checkroleAdmin(req, res, next) {
    if (
        res.locals.Role !== process.env.ADMIN 
    )
    res.sendStatus(401);
    else next();
}

function checkroleUser(req, res, next) {
    if (
        res.locals.Role !== process.env.USER 
    )
    res.sendStatus(401);
    else next();
}


module.exports = { checkroleSuperAdmin: checkroleSuperAdmin, checkroleAdmin: checkroleAdmin, checkroleUser: checkroleUser };