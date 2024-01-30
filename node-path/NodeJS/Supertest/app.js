const express = require('express');
const app = express();
const request = require('supertest');

app.use(express.urlencoded({ extended: false }));

const indexRouter = require('./index');
app.use('/', indexRouter);

test('index route works', (done) => {
  request(app).get('/').expect('Content-Type', /json/).expect({ name: 'frodo' }).expect(200, done);
});

test('testing route works', (done) => {
  request(app)
    .post('/test')
    .type('form')
    .send({ item: 'hey' })
    .then(() => {
      request(app)
        .get('/test')
        .expect({ array: ['hey'] }, done);
    });
});

app.listen(3000, () => console.log('running'));
