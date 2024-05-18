# Binar Car Rental RESTful API

## Install

    npm install

## Migrate db schema

    npx knex migrate:latest --knexfile src/db/knekfile.ts

## Run the app

    npm run dev

# REST API

The REST API to the Binar Car Rental app is described below.

## Get list of Cars

### Request

`GET api/cars/`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/cars/

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 1416
    ETag: W/"588-U54SmMr4OMyrdncDd955EuurKow"
    Date: Sat, 18 May 2024 16:31:54 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{
  "message": "OK",
  "data": [
    {
      "id": 1,
      "name": "Subaru",
      "price": 10000,
      "photoUrl": "https://res.cloudinary.com/djclnpeld/image/upload/v1716051354/zkyfuh6xi5wlgkrsnuzv.jpg",
      "startRent": "2024-02-17T12:03:01.324Z",
      "finishRent": "2024-02-17T12:03:01.324Z",
      "createdAt": "2024-05-18T16:55:55.487Z",
      "updatedAt": "2024-05-18T16:55:55.487Z"
    },
    {
      "id": 2,
      "name": "Supra",
      "price": 20000,
      "photoUrl": "https://res.cloudinary.com/djclnpeld/image/upload/v1716051382/j9j0jd43fudxeyfnwcmx.jpg",
      "startRent": "2024-02-17T12:03:01.324Z",
      "finishRent": "2024-02-17T12:03:01.324Z",
      "createdAt": "2024-05-18T16:56:22.915Z",
      "updatedAt": "2024-05-18T16:56:22.915Z"
    }
  ]
}
```

## Create a new Car

### Request

`POST /api/cars/`

    curl 'localhost:3000/api/cars/' -F 'name="Subaru"' -F 'price="10000"' -F 'startRent="2024-02-17T12:03:01.324Z"' -F 'finishRent="2024-02-17T12:03:01.324Z"' -F 'photo=@"/C:/Users/cakra/OneDrive/Desktop/subaru.jpg"'

### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 318
    ETag: W/"13e-exalj/0KRiHvtCJzFjUN/g6FT7U"
    Date: Sat, 18 May 2024 16:58:05 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{
  "message": "New car created"
}
```

## Get a specific Car

### Request

`GET /api/cars/:id`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/cars/id

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 318
    ETag: W/"13e-exalj/0KRiHvtCJzFjUN/g6FT7U"
    Date: Sat, 18 May 2024 16:58:05 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{
  "message": "OK",
  "data": {
    "id": 2,
    "name": "Supra",
    "price": 20000,
    "photoUrl": "https://res.cloudinary.com/djclnpeld/image/upload/v1716051382/j9j0jd43fudxeyfnwcmx.jpg",
    "startRent": "2024-02-17T12:03:01.324Z",
    "finishRent": "2024-02-17T12:03:01.324Z",
    "createdAt": "2024-05-18T16:56:22.915Z",
    "updatedAt": "2024-05-18T16:56:22.915Z"
  }
}
```

## Get a non-existent Car

### Request

`GET /api/cars/:id`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/cars/9999

### Response

    HTTP/1.1 404 Not Found
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 27
    ETag: W/"1b-ZggQAyPxz5VnLug7aqwUuaLLx8U"
    Date: Sat, 18 May 2024 17:00:17 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{ "message": "NotFoundError" }
```

## Change a Car

### Request

`PUT /api/cars/:id`

    curl -i -H 'Accept: application/json' -X PUT -F "name=\"Supra\"" http://localhost:3000/api/cars/1

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 25
    ETag: W/"19-8yJeAUN6hWGaYWcy+wfvkcq9TBE"
    Date: Sat, 18 May 2024 17:10:27 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{ "message": "Car updated" }
```

## Attempt to change a Car using invalid params

### Request

`PUT /api/cars/:id`

    curl -i -H 'Accept: application/json' -X PUT -F "namamobil=\"Supra\"" http://localhost:3000/api/cars/1

### Response

    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 27
    ETag: W/"1b-Zm2V6UjPTM8hlcAR4H9WSBKmvkE"
    Date: Sat, 18 May 2024 17:11:44 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{ "message": "Invalid Input" }
```

## Delete a Car

### Request

`DELETE /api/cars/:id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:3000/api/cars/2/

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 25
    ETag: W/"19-vbEtHPEuUl2LydYaFYKUWnOERfo"
    Date: Sat, 18 May 2024 17:13:02 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{ "message": "Car Deleted" }
```

## Try to delete same Car again

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:3000/api/cars/2/

### Response

    HTTP/1.1 404 Not Found
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 27
    ETag: W/"1b-ZggQAyPxz5VnLug7aqwUuaLLx8U"
    Date: Sat, 18 May 2024 17:13:34 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{ "message": "NotFoundError" }
```

## Get deleted Car

### Request

`GET /api/cars/2`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/cars/2

### Response

    HTTP/1.1 404 Not Found
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 27
    ETag: W/"1b-ZggQAyPxz5VnLug7aqwUuaLLx8U"
    Date: Sat, 18 May 2024 17:14:24 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

```json
{ "message": "NotFoundError" }
```
