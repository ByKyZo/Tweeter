import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

export = router;
// AuthController.lo
// new AuthController().login();
// route.get('/toto', AuthController.lo);
