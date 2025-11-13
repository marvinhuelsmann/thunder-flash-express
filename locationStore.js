const { randomUUID } = require('crypto');

let locations = [];

//TODO: add database integration

function addLocation(location) {
    const newLocation = {
        id: randomUUID(),
        description: location.description,
        image: location.image,
        latitude: location.latitude,
        longitude: location.longitude,
        captureTimestamp: location.captureTimestamp,
        createdTimestamp: new Date().toTimeString()
    };
    locations.push(newLocation);
    return newLocation;
}

function getLocations() {
    return locations;
}

function getLocationById(id) {
    return locations.find((loc) => loc.id === id);
}

module.exports = { addLocation, getLocations, getLocationById };