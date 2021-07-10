const router = require('express').Router()
const pool = require('../db_connection')
const authorization = require('../middleware/authorization')

router.get('/', authorization, async (req, res) => {
  try {
    //req.user has the payloard
    //res.json(req.user)

    const user = await pool.query(
      'select user_id, user_name, user_email, date_of_birth, profession, user_password from users where user_id = $1',
      [req.user.id]
    )
    res.json(user.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).json('server error')
  }
})

module.exports = router
