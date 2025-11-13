# Thunderflash Express API

Simple Express backend to store and retrieve location entries with a Base64 image.

## How to start the server localhost?

Run `npm start` or you can use `https://thunder-flash-express.vercel.app`

## Endpoints

- `POST /v1/location` – create a new location entry
- `GET /v1/location` – get all location entries
- `GET /v1/location/:id` – get a single location entry by its `id`

---

## POST /v1/location

### Request Body

JSON:

- `description` (string)
- `image` (string, Base64-encoded image)
- `latitude` (number)
- `longitude` (number)
- `captureTimestamp` (string, timestamp, e.g. ISO 8601)

Example:

Curl POST request:

```curl
curl -X POST http://localhost:3000/v1/location \
  -H "Content-Type: application/json" \
  -d '{
    "description": "AK47 in the hands of Lukas",
    "image": "iVBORw0KGgoAAAANSUhEUgAA...base64-data...",
    "latitude": 52.516275,
    "longitude": 13.377704,
    "captureTimestamp": "2025-11-13T19:30:00Z"
  }'
```

Output:

```json
{
  "success": "created location entry",
  "location": {
    "id": "1c6e5b7c-5d5e-4a0d-8b6c-0a5e1e7b2c99",
    "description": "AK47 in the hands of Lukas",
    "imageBase64": "iVBORw0KGgoAAAANSUhEUgAA...base64-data...",
    "latitude": 52.516275,
    "longitude": 13.377704,
    "captureTimestamp": "2025-11-13T19:30:00Z"
  }
}
```

## GET /v1/location

GET Request

```curl
curl http://localhost:3000/v1/location
```

Output

```json
[
  {
    "id": "1c6e5b7c-5d5e-4a0d-8b6c-0a5e1e7b2c99",
    "description": "Brandenburg Gate at night",
    "imageBase64": "iVBORw0KGgoAAAANSUhEUgAA...base64-data...",
    "latitude": 52.516275,
    "longitude": 13.377704,
    "captureTimestamp": "2025-11-13T19:30:00Z"
  }
]
```
