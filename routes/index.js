var express = require('express');
var router = express.Router();
var path = require('path');

require('dotenv').config();
const Client = require('pg').Client;

const client = (() => {
  if (process.env.NODE_ENV !== 'production') {
      return new Client({
          connectionString: process.env.DATABASE_URL,
          ssl: false
      });
  } else {
      return new Client({
          connectionString: process.env.DATABASE_URL,
          ssl: {
              rejectUnauthorized: false
            }
      });
  } })();

client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res) {
  res.sendFile(path.join(__dirname,'..','public','profile.html'));
});

router.get('/menu', function(req, res) {
  res.sendFile(path.join(__dirname,'..','public','menu.html'));
});

/*router.post('/menu',function(req, res, next) {
  client.query('SELECT * FROM usersinfo WHERE username = $1', [req.user.username], function(err, result) {
    if (err) {
      console.log("unable to query SELECT");
      next(err);
    }
    if (result.rows.length > 0) {
        console.log("User's info exist. Update user's info");
        client.query('UPDATE usersinfo SET address=$1, city=$2, state=$3, zipcode=$4, phone=$5 WHERE username=$6', [req.body.address, req.body.city, req.body.state, req.body.zipcode, req.body.phone, req.user.username], function(err, result) {
          if (err) {
            console.log("unable to query UPDATE");
            next(err);
          }
          console.log("User's info update is successful");
        });
    }
    else {
      console.log("user's info doesn't exist");
      client.query('INSERT INTO usersinfo (username, address, city, state, zipcode, phone) VALUES($1, $2, $3, $4, $5, $6)', [req.user.username, req.body.address, req.body.city, req.body.state, req.body.zipcode, req.body.phone], function(err, result) {
        if (err) {
          console.log("unable to query INSERT");
          next(err);
        }
        console.log("User's info insertion is successful");
      });    
    }
  });
});*/

function placeOrder(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/users/login?message=Please+log+in+to+place+an+order.');
  }
}

router.get('/placeorder', placeOrder, function(req, res){
  res.sendFile(path.join(__dirname,'..', 'public','placeorder.html'));
});

module.exports = router;
