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
router.get('/admin',

    authCont.admin_get
)
router.get('/user',

    authCont.user_get
)



module.exports = router;