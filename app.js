const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Cukup ini saja untuk semua file di dalam folder public
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => console.log('Server running on port 3000'));