const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User} = require('../../models');
const cloudinary = require('../../utils/cloudinary');
const upload = require('../../utils/multer');
// const Cloudimage = require('../../models/Cloudimage');

router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  // console.log(User);
  // console.log("------------------");
  // console.log(req.body.username);
  // console.log(req.body.email);
  // console.log(req.body.password);
  // console.log(req.body.underseven);
  // console.log(req.body.overSeven);
  // console.log(req.body.weeksPrep);
  // console.log(req.body.diet);

  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({

    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    underseven: req.body.underseven,
    overSeven: req.body.overSeven,
    weeksPrep: req.body.weeksPrep,
    // diet: req.body.diet

  })
    .then(dbUserData => {
      console.log(dbUserData);
      res.json(dbUserData);
      //   req.session.save(() => {
      //     req.session.user_id = dbUserData.id;
      //     req.session.username = dbUserData.username;
      //     req.session.loggedIn = true;

      //     res.json(dbUserData);
      //   });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // expects {username: 'test', password: 'test'}
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if(!dbUserData) {
      res.status(400).json({ message: 'No user found with that name!' });
      return;
    }

      const validPassword = dbUserData.checkPassword(req.body.password);

    if(!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

      req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      console.log(dbUserData);

       res.json({ user: dbUserData, message: 'You are now logged in!'});
    });
  });
});

//image user comes from front end.
router.put('/images', upload.single('imageUser'), async (req, res) => {
 console.log(req.file)
  console.log(User)


//  User.findOne({
//   where: {
//     id: req.session.user_id
//   }

  try {

    // User.findOne({
    //   where: {
    //     id: req.session.user_id
    //   }
    // })
    
    const result = await cloudinary.uploader.upload(req.file.path)
    console.log('here')
    console.log('imageUser')
    console.log('here')
console.log(req.session)
console.log(req.file.originalname)
console.log(result)
    User.update({
      imagename: req.file.originalname,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    },{
      where: {
      id: req.session.user_id
      }
    }).then(answer => {
      res.json(answer)
    })
    // let cloudimage = new Cloudimage({
    //   imagename: req.body.name,
    //   avatar: result.secure_url,
    //   cloudinary_id: result.public_id,
    // });
    // console.log(result)
    // res.json(result)
    // User.save();
    // res.json(User);
  } catch (err) {
    console.log(err)
  }
})

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});
module.exports = router;