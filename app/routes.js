// app/routes.js

// grab the nerd model we just created
var Item = require('./models/item');

module.exports = function(app) {
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    // sample api route
    app.get('/api/item', function(req, res) {
        // use mongoose to get all nerds in the database
        Item.find(function(err, item) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(item); // return all nerds in JSON format
        });
    });

    app.post('/api/item', function(req, res) {
        var novoItem = new Item();
        var dadosPostagem = req.body;
        novoItem.description = dadosPostagem.description;

        novoItem.save(function(err){
            if(err)
                res.send(err);

            res.json(novoItem);
        });
    });

    app.delete('/api/item/:id', function(req, res) {
        var id = req.params.id;

        Item.remove({
            _id: id
        }, function(err, nerd) {
            if (err)
                res.send(err);

            res.json({ message: 'Successo!' });
        });
    });

    app.put('/api/item/', function(req, res) {
        console.log(req.body);

        Item.findById(req.body._id, function(err, item) {
            if (err)
                res.send(err);

            item.description = req.body.description;
            item.status = req.body.status;

            item.save(function(err) {
                if (err)
                    res.send(err);

                res.json(item);
            });

        });
    });

    app.get('/', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });
};
