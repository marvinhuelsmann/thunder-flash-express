const express = require('express');
const router = express.Router();
const { addLocation } = require('../../locationStore');

router.post('/v1/location', (req, res) => {
    const { description, image, latitude, longitude } = req.body;

    if (!description || !image || latitude == null || longitude == null) {
        return res
            .status(400)
            .json({ error: 'description, image, latitude, longitude required' });
    }

    const location = addLocation({
        description,
        imageBase64: image,
        latitude,
        longitude
    });
    res.status(201).json(location);
});

module.exports = router;