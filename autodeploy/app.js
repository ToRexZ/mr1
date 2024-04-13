var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var exec = require('child_process').exec;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
        console.log('get /');
});

app.get('/payload', function (req, res) {
    res.sendStatus(200);
        console.log('get /payload');
});

app.post('/payload', function (req, res) {
    // Verify that the payload is a push from the correct repo
    // very repository.name == 'mr1' or repository.full_name == 'ToRexZ/mr1'
    console.log(req.body.pusher.name + - ' just pushed to ' + req.body.repository.name);

    console.log('pulling code from GitHub...');

    // reset any changes that have been made locally
    exec('git -C ~/mr1 reset --hard', execCallback);

    // and ditch any files that have been added locally too
    exec('git -C ~/mr1 clean -df', execCallback);

    // now pull down the latest
    exec('git -C ~/mr1 pull -f', execCallback);

});

app.listen(5000, function () {
    console.log('app listening on port 5000!');
});

function execCallback(error, stdout, stderr) {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
}