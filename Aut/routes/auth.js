const { Router } = require('express');
const router = Router();
const authCont = require('../controllers/authCont')


router.get('/signup',
    authCont.signup_get
)

router.post('/signup',
 
    authCont.signup_post
)
router.get('/login',

    authCont.login_get
)
router.post('/login',

    authCont.login_post
)



module.exports = router;