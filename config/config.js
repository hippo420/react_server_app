var path ='../routes/users';

module.exports = {
    server_port : 3333,
    db_url :'mongodb://localhost:27017/local',
    db_schema: [{
        file:'../database/user_schema',
        collection:'users',
        schemaName:'UserSchema',
        modelName:'UserModel'
    }],
    route_info: [{
        file : path,
        path: '/login',
        method : 'login',
        type : 'post'
    },{
        file : path,
        path: '/adduser',
        method : 'adduser',
        type : 'post'
    }],
};