const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello, Node.js!'));

test('GET / should return Hello, Node.js!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Node.js!');
});
