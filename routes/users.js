var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var path = require('path');
var env = require('dotenv').config();
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
client.connect(); //connect to database

var passport = require('passport');
var bcrypt = require('bcryptjs');

router.get('/logout', function(req, res){
  req.logout(); //passport provide it
  res.redirect('/'); // Successful. redirect to localhost:3000/
});

function loggedIn(req, res, next) {
  if (req.user) {
    next(); // req.user exists, go to the next function (right after loggedIn)
  } else {
    res.redirect('/users/login'); // user doesn't exists redirect to localhost:3000/users/login
  }
}

router.get('/profile',loggedIn, function(req, res){
  // req.user: passport middleware adds "user" object to HTTP req object
  res.sendFile(path.join(__dirname,'..', 'public','profile.html'));
});

function notLoggedIn(req, res, next) {
  if (!req.user) {
    next();
  } else {
    let prefer = req.user.prefer;
    res.redirect('/users/profile?name='+prefer);
  }
}

// localhost:3000/users/login
router.get('/login', notLoggedIn, function(req, res){
  //success is set true in sign up page
  res.sendFile(path.join(__dirname,'..', 'public','login.html'));
});

// localhost:3000/users/login
router.post('/login',
  // This is where authentication happens - app.js
  // authentication locally (not using passport-google, passport-twitter, passport-github...)
  passport.authenticate('local', { failureRedirect: 'login?message=Incorrect+credentials', failureFlash:true }),
  function(req, res,next) {
    let prefer = req.user.prefer;
    console.log("fullname: ", prefer);
    res.redirect('/users/profile?name='+prefer); // Successful. redirect to localhost:3000/users/profile
});


router.get('/signup',function(req, res) {
  // If logged in, go to profile page
  if(req.user) {
    let prefer = req.user.prefer;
    return res.redirect('/users/profile?name='+prefer);
  }
  res.sendFile(path.join(__dirname,'..', 'public','signup.html'));
});

function createUser(req, res, next){
  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(req.body.password, salt);

  client.query('INSERT INTO users (username, password, fullname, prefer) VALUES($1, $2, $3, $4)', [req.body.username, password,req.body.fullname,req.body.prefer], function(err, result) {
    if (err) {
      console.log("unable to query INSERT");
      return next(err); // throw error to error.hbs.
    }
    console.log("User creation is successful");
    res.redirect('/users/login?message=We+created+your+account+successfully!');
  });
}

router.post('/signup', function(req, res, next) {
  client.query('SELECT * FROM users WHERE username=$1',[req.body.username], function(err,result){
    if (err) {
      console.log("sql error ");
      next(err); // throw error to error.hbs.
    }
    else if (result.rows.length > 0) {
      console.log("user exists");
      res.redirect('/users/signup?error=User+exists');
    }
    else {
      console.log("no user with that name");
      createUser(req, res, next);
    }
  });
});

router.get('/changePassword',function(req, res, next) {
  res.sendFile(path.join(__dirname,'..', 'public','changePassword.html'));
});

router.post('/changePassword',function(req, res, next){
  var matched = bcrypt.compareSync(req.body.password, req.user.password);
    if (!matched) {
      res.redirect('/users/changePassword?message=Current+password+does+not+match.');
    }
    else {
      if (req.body.newpw == req.body.newpw1) {
        var salt = bcrypt.genSaltSync(10);
        var password = bcrypt.hashSync(req.body.newpw, salt);
        client.query('UPDATE users set password = $1 where username=$2', [password, req.user.username], function(err, result) {
          if (err) {
            console.log("unable to query UPDATE");
            return next(err); // throw error to error.hbs.
          }
          console.log("Password change is successful");
          res.redirect('/users/changePassword?message=Password+change+successful.');
        });
        req.user.password = password
      }
      else {
        res.redirect('/users/changePassword?message=The+two+passwords+you+entered+are+different.');
      }
    }
});

router.get('/changeUsername',function(req, res, next) {
  res.sendFile(path.join(__dirname,'..', 'public','changeUsername.html'));
});

router.post('/changeUsername',function(req, res, next){
  if (req.body.newusername == req.body.newusername1) {
    client.query('UPDATE users set username = $1 where username=$2', [req.body.newusername, req.user.username], function(err, result) {
      if (err) {
        console.log("unable to query UPDATE");
        return next(err); // throw error to error.hbs.
      }
      console.log("Username change is successful");
      res.redirect('/users/changeUsername?message=Username+change+successful.');
    });
    req.user.username = req.body.newusername
  }
  else {
    res.redirect('/users/changeUsername?message=The+two+usernames+you+entered+are+different.');
  }
});

router.get('/changeFullname',function(req, res, next) {
  res.sendFile(path.join(__dirname,'..', 'public','changeFullname.html'));
});

router.post('/changeFullname',function(req, res, next){
  if (req.body.newfullname == req.body.newfullname1) {
    client.query('UPDATE users set fullname = $1 where username=$2', [req.body.newfullname, req.user.username], function(err, result) {
      if (err) {
        console.log("unable to query UPDATE");
        return next(err); // throw error to error.hbs.
      }
      console.log("Fullname change is successful");
      res.redirect('/users/changeFullname?message=Full+name+change+successful.');
    });
    req.user.fullname = req.body.newfullname
  }
  else {
    res.redirect('/users/changeFullname?message=The+two+full+names+you+entered+are+different.');
  }
});

router.get('/changePrefer',function(req, res, next) {
  res.sendFile(path.join(__dirname,'..', 'public','changePrefer.html'));
});

router.post('/changePrefer',function(req, res, next){
  if (req.body.newprefer == req.body.newprefer1) {
    client.query('UPDATE users set prefer = $1 where username=$2', [req.body.newprefer, req.user.username], function(err, result) {
      if (err) {
        console.log("unable to query UPDATE");
        return next(err); // throw error to error.hbs.
      }
      console.log("Prefer change is successful");
      res.redirect('/users/changePrefer?message=Preferred+name+change+successful.');
    });
    req.user.prefer = req.body.newprefer
  }
  else {
    res.redirect('/users/changePrefer?message=The+two+preferred+names+you+entered+are+different.');
  }
});

router.get('/usersinfo',function(req,res,next) {
  res.json({
    "username": req.user.username,
    "fullname": req.user.fullname,
    "prefer": req.user.prefer
  });
});

module.exports = router;
