const express = require('express');
const router = express.Router();
const { addLocation } = require('../../locationStore');

router.post('/v1/location', (req, res) => {
    const { description, image, latitude, longitude, captureTimestamp } = req.body;

    if (!description || !image || latitude == null || longitude == null || captureTimestamp == null) {
        return res
            .status(400)
            .json({ error: 'description, image, latitude, longitude, captureTimestamp required' });
    }

    const location = addLocation({
        description,
        imageBase64: image,
        latitude,
        longitude,
        captureTimestamp
    });
    res.status(201).json({success: "created location entry", location});
});

module.exports = router;