"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
const routes_1 = require("./routes");
const app = express();
exports.app = app;
app.use(compression());
dotenv.config({ path: '.env' });
app.set('port', (process.env.PORT || 4100));
//change to 4100 for adding in 206 and local 3000 and 4000 prod
app.use(cors({
    origin: '*'
}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoded'
}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
app.use('/', express.static(path.join(__dirname, '../client')));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static('server/public'))
//use below codes
app.use(express.static('timesdocument'));
// app.use(express.static('studentdocuments'));
// app.use("/images",  express.static(path.join("server/public/")));
let mongodbURI;
if (process.env.NODE_ENV === 'test') {
    mongodbURI = process.env.MONGODB_TEST_URI;
}
else {
    mongodbURI = process.env.MONGODB_URI;
    app.use(morgan('dev'));
}
mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(db => {
    console.log('Connected to MongoDB', mongodbURI);
    routes_1.default(app);
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    });
    app.get('port');
    if (!module.parent) {
        app.listen(app.get('port'), () => console.log(`App listening on portsssssssssssssssssssssss ${app.get('port')}`));
    }
})
    .catch(err => console.error(err));
//# sourceMappingURL=app.js.map