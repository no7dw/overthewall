express = require 'express'
superagent = require 'superagent'
app = express.createServer()

app.use '/assets', express.static(__dirname + '/assets')

app.get '/heartbeat', (req, res) ->
    superagent.get("https://drive.google.com")
        .timeout(4000)
        .end (err, resp)->
            if err and /timeout/.test err.toString()
                res.status(400).send("Bad Request");
            else
                if resp and resp.text and /Redirecting/.test resp.text
                    res.status(200).send('Success Request');
                else
                    res.status(500).send('Backend Error!');
app.listen(8888)