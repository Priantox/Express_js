## Getting Started

### Prerequisites
- Node.js installed
- npm (Node Package Manager)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```
```
cd Express_js
```

2. Install dependencies
```bash
npm install
```

3. Run the server
```bash
npm start
```

# Express.js Learning Project

This repository contains 11 topics covering the fundamentals and core concepts of Express.js, a fast and minimalist web framework for Node.js.

## Table of Contents

1. [Create Express Server](#1-create-express-server)
2. [HTTP Methods](#2-http-methods)
3. [Routing](#3-routing)
4. [HTTP Response](#4-http-response)
5. [Query Parameters](#5-query-parameters)
6. [Route Parameters](#6-route-parameters)
7. [POST Request with JSON](#7-post-request-with-json)
8. [Send and Receive Form Data](#8-send-and-receive-form-data)
9. [Regular Expression in Express Routing](#9-regular-expression-in-express-routing)
10. [Environment Setup](#10-environment-setup)
11. [Middleware](#11-middleware)

---

## 1. Create Express Server

**Folder:** `1_Create_express_server/`

**Description:** Learn how to create a basic Express.js server from scratch. This topic covers the initial setup and configuration of an Express application, including importing the Express module and creating an app instance.

**Key Concepts:**
- Installing Express.js
- Creating an Express app instance
- Basic server structure

---

## 2. HTTP Methods

**Folder:** `2_http_methods/`

**Description:** Understand the different HTTP methods (GET, POST, PUT, DELETE) and how to handle them in Express.js. Each method serves a different purpose in RESTful APIs.

**Key Concepts:**
- `GET` - Retrieve data from server
- `POST` - Send data to server
- `PUT` - Update existing data
- `DELETE` - Remove data from server

**Example Routes:**
- `GET /` - Home route
- `POST /about` - Create/send data
- `PUT /about` - Update data
- `DELETE /about` - Delete data

---

## 3. Routing

**Folder:** `3_Routing/`

**Description:** Learn how to organize your application using Express Router. This topic demonstrates separating routes into different files for better code organization and maintainability.

**Key Concepts:**
- Creating route modules
- Using `express.Router()`
- Separating routes into different files
- Handling 404 errors

**Example:**
- Routes organized in `routes/users.route.js`
- Modular route structure

---

## 4. HTTP Response

**Folder:** `4_http_response/`

**Description:** Explore different ways to send responses to the client, including JSON data, HTML files, redirects, cookies, and status codes.

**Key Concepts:**
- `res.json()` - Send JSON response
- `res.sendFile()` - Send HTML files
- `res.redirect()` - Redirect to another route
- `res.cookie()` - Set cookies
- `res.clearCookie()` - Clear cookies
- `res.status()` - Set HTTP status codes

---

## 5. Query Parameters

**Folder:** `5_Query_parameter/`

**Description:** Learn how to extract and use query parameters from the URL. Query parameters are passed in the URL after the `?` symbol.

**Key Concepts:**
- Accessing query parameters with `req.query`
- URL format: `/route?id=123&name=John`
- Extracting multiple query parameters

**Example:**
- URL: `localhost:3000/?id=101&name=John`
- Access: `req.query.id` and `req.query.name`

---

## 6. Route Parameters

**Folder:** `6_route_parameter/`

**Description:** Understand how to use dynamic route parameters. Route parameters are part of the URL path itself and are defined with a colon `:`.

**Key Concepts:**
- Dynamic URL segments
- Accessing parameters with `req.params`
- Multiple parameters in one route

**Example:**
- Route: `/userId/:id/userAge/:age`
- Access: `req.params.id` and `req.params.age`

---

## 7. POST Request with JSON

**Folder:** `7_post_request_with_josn/`

**Description:** Learn how to handle POST requests with JSON data using body-parser middleware. This is essential for building APIs that receive data from clients.

**Key Concepts:**
- Using `body-parser` middleware
- Parsing JSON data
- Accessing request body with `req.body`
- Sending data to the server

---

## 8. Send and Receive Form Data

**Folder:** `8_send_and_receive_form_data/`

**Description:** Handle HTML form submissions in Express.js. Learn how to process form data sent from the client using URL-encoded format.

**Key Concepts:**
- Parsing URL-encoded form data
- Handling form submissions
- Sending HTML forms
- Processing form data with `req.body`

**Example:**
- Display form: `GET /register`
- Process form: `POST /register`

---

## 9. Regular Expression in Express Routing

**Folder:** `9_Regular_expression_in_express_routing/`

**Description:** Use regular expressions to validate route parameters and ensure data integrity. This helps in input validation and security.

**Key Concepts:**
- Input validation using regex
- Parameter validation
- Error handling for invalid inputs
- Common regex patterns (numbers, letters, etc.)

**Example:**
- Validate numeric IDs: `/^[0-9]+$/`
- Validate alphabetic strings: `/^[a-zA-Z]+$/`
- Validate specific length: `/^[0-9]{3}$/`

---

## 10. Environment Setup

**Folder:** `10_env_setup/`

**Description:** Learn how to manage environment variables using the `dotenv` package. This is crucial for handling configuration values, API keys, and different environments (development, production).

**Key Concepts:**
- Using `dotenv` package
- Creating `.env` file
- Accessing environment variables with `process.env`
- Managing PORT and other configuration

**Example:**
```
PORT=3000
```

---

## 11. Middleware

**Folder:** `11_middleware/`

**Description:** Understand middleware functions in Express.js. Middleware functions have access to the request, response, and the next middleware function in the application's request-response cycle.

**Key Concepts:**
- Creating custom middleware
- Using `app.use()` for middleware
- Request processing pipeline
- Error handling middleware
- The `next()` function

**Types of Middleware:**
- Application-level middleware
- Custom middleware functions
- Error handling middleware
- 404 handler middleware

---

### Dependencies
- `express` - Web framework
- `body-parser` - Parse incoming request bodies
- `dotenv` - Load environment variables

---

---

