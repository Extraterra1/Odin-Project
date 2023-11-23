import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log('listening');
});
