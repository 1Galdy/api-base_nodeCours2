module.exports = (server) => {
    const timerController = require('../controllers/timerController');

    server.route('/submit-reaction-time')
        .post(timerController.submitReactionTime);

    server.route('/get-reaction-times/:userId')
        .get(timerController.getReactionTimes);
};
