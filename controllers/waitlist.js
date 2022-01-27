const Waitlist = require('../models/Waitlist');


//@desc      Create a waitlist user
//@path      GET api/v1/waitlist
//@access    Public
exports.addWaitlist = async (req, res, next) => {
    try {
        const user = await Waitlist.create(req.body);

        res.status(201).json({
            success: true,
            data: user
        })
    }
    catch (e) {
        // console.error(e)
        return res.status(400).json({
            success: false,
            data: e.message
        })
    }
};
