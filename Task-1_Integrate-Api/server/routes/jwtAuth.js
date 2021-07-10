const pool = require('../db_connection')
const bcrypt = require('bcrypt')
const router = require('express').Router()
const jwtGenerator = require('../utils/jwtGenerator')
const validInfo = require('../middleware/validInfo')
const authorization = require('../middleware/authorization')

//registering

router.post('/register', validInfo, async (req, res) => {
  try {
    //destructure
    const { user_name, user_email, date_of_birth, profession, user_password } =
      req.body

    //check if user exist, if it does throw error
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      user_email,
    ])

    if (user.rows.length !== 0) {
      res.status(401).send('User already exists')
    }

    //bcrypt the user password
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)

    const bcryptPassword = await bcrypt.hash(user_password, salt)

    //enter new user inside database
    const newUser = await pool.query(
      'INSERT INTO users(user_name, user_email, date_of_birth, profession, user_password) VALUES($1,$2,$3,$4,$5) RETURNING *',
      [user_name, user_email, date_of_birth, profession, bcryptPassword]
    )

    //generate our jwt token
    const token = jwtGenerator(newUser.rows[0].user_id)
    res.json({ token })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

//login

router.post('/login', validInfo, async (req, res) => {
  try {
    //Destructure
    const { user_email, user_password } = req.body

    //check if user doesn't exist, if not throw error
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      user_email,
    ])

    if (user.rows.length === 0) {
      return res.status(401).json('Email does not exist')
    }

    //if exist, check if inc pwd is same as db pwd
    const validPassword = await bcrypt.compare(
      user_password,
      user.rows[0].user_password
    )

    if (!validPassword) {
      return res.status(401).json('Password incorrect')
    }

    //generate token if pwd same
    const token = jwtGenerator(user.rows[0].user_id)

    res.json({ token })
  } catch (err) {
    console.error(err.message)
  }
})

//is-verify
router.get('/is-verify', authorization, async (req, res) => {
  try {
    res.json(true)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

//update

router.put('/update', authorization, async (req, res) => {
  try {
    //req.user has the payloard
    //res.json(req.user)

    const { user_id, user_name, user_email, date_of_birth, profession } =
      req.body

    const user = await pool.query(
      'select user_id, user_name, user_email, date_of_birth, profession, user_password from users where user_id = $1',
      [req.user.id]
    )

    const updateUser = await pool.query(
      'UPDATE users SET user_name = $1, user_email = $2, date_of_birth = $3, profession = $4 where user_id = $5 RETURNING *',
      [user_name, user_email, date_of_birth, profession, user_id]
    )
    res.json(updateUser.rows[0])
    window.location.reload()
  } catch (err) {
    console.error(err.message)
    res.status(500).json('server error')
  }
})

router.delete('/delete', authorization, async (req, res) => {
  try {
    //destructure
    const user_id = req.user.id

    //check if user exist, if it does throw error
    const user = await pool.query(
      'select user_id, user_name, user_email, date_of_birth, profession, user_password from users where user_id = $1',
      [req.user.id]
    )

    const deleteUser = await pool.query(
      'Delete FROM users WHERE user_id = $1',
      [user_id]
    )
    res.json('User has been deleted')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

module.exports = router
