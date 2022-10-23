
function sessionCheck(req){
    console.log('req====>');
    console.log('S아이디'+req.session.user_id);

    if(req.session.user_id==null)
        return false;
    else
        return true;
}

module.exports = sessionCheck;