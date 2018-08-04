module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    app.get('/api/example', (req, res) => {
        res.send({text: 'Hello World'});
    })
}