const express = require('express');
const router = express.Router();
const { getLocations, getLocationById } = require('../../locationStore');

router.get('/v1/location', (req, res) => {
    const locations = getLocations();
    res.json(locations);
});

router.get('/v1/location/:id', (req, res) => {
    const id = req.params.id;
    const location = getLocationById(id);

    if (!location) {
        return res.status(404).json({ error: 'location not found' });
    }

    res.json(location);
});

module.exports = router;