const Timer = require('../models/timerModel');

exports.submitReactionTime = async (req, res) => {
    const { user_id, time } = req.body;
    try {
        const timer = new Timer({ user_id, time });
        await timer.save();
        res.status(201).json({ message: 'Reaction time recorded' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getReactionTimes = async (req, res) => {
    try {
        const timers = await Timer.find({ user_id: req.params.userId });
        res.status(200).json(timers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
