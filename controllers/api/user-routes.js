const router = require('express').Router();

const sequelize = require('../../config/connection');
const { User, Articles, Comment, Vote } = require('../../models');
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
  console.log(req)

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
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      console.log(req)
      console.log(res)
      console.log(User)
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
    if (!dbUserData) {
      res.status(400).json({ message: 'No user found with that name!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

//image user comes from front end.
router.put('/images', upload.single('imageUser'), async (req, res) => {

  try {

    const result = await cloudinary.uploader.upload(req.file.path)
    User.update({
      imagename: req.file.originalname,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    }, {
      where: {
        id: req.session.user_id
      }
    }).then(answer => {
      res.json(answer)
    })

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

router.put('/pantry', async (req, res) => {
  console.log(req.body);
  try {
    User.update({
      underseven: req.body.underseven,
      overSeven: req.body.overSeven,
      weeksPrep: req.body.weeksPrep
    }, {
      where: {
        id: req.session.user_id
      }
    }).then(answer => {
      res.json(answer)
    })
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;