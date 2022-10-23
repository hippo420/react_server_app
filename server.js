const express= require('express');
const http= require('http');
//const path= require('path');
const bodyParser = require('body-parser');
const static = require('serve-static');
const errorHandler = require('errorhandler');
const expressErrorHandler = require('express-error-handler');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
//
//모듈 로드
const user = require('./routes/users');
const config = require('./config/config');
const database_loader = require('./database/database_loader');
const route_loader = require('./routes/route_loader');
const cors = require('cors');

var app = express();


console.log('config.js [server_port] ====>[%d]',config.server_port);
app.set('port',config.server_port || 3000);
//app.use(static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret :'keyboard cat',
    resave : false,
    saveUninitialized: true,
    store : new FileStore()
}));
app.use(cors({
    origin: '*',
    credentials: 'true'
}));

route_loader.init(app,express.Router());


http.createServer(app).listen(app.get('port'),function(){
    console.log('express 서버 실행중.............',app.get('port'));
});
