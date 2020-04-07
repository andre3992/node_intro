const url = require('url');
const goodBye = url();



goodBye.get('/goodbye', function(req, res) {
    res.send('goodbye')
})
goodBye.listen(3000)