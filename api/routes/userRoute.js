module.exports = (server) => {
    const userController = require('../controllers/userController');

    server.route('/register')
        .post(userController.register);

    server.route('/login')
        .post(userController.login);
};
