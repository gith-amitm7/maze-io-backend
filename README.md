# maze-io-backend

This project uses the following technologies:

- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database

## Configuration

Make sure to add your own `MONGOURI` from your database provider in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret",
};
```

## Quick Start

```javascript
// Install dependencies for server and run in dev mode
npm install && npm run dev

// Install dependencies for server and run in server mode
npm install && npm start

// Run server
npm start

// Server runs on http://localhost:5000
```
