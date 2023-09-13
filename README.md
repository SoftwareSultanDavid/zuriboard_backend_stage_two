# Node.js CRUD API zuriboard_backend_stage_two

This is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express.js, and MongoDB.

## Getting Started

### Prerequisites

Before running this API, make sure you have the following software installed:

- Node.js: [Download](https://nodejs.org/)
- MongoDB: [Download](https://www.mongodb.com/)

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/SoftwareSultanDavid/zuriboard_backend_stage_two.git
   cd backend_stage_two

2. Install dependencies:
    sh
    Copy code
    npm install

3. Configure environment variables:
    Create a .env file in the root directory and add the following:
    MONGODB_URI=mongodb://localhost:27017/your-database
    PORT=3000

4. API Endpoints(NO QUERY PARAMETER ONLY PATH PARAMETER)
    1. GET /api: Get a list of all person.
    2. GET /api/:id: Get a single person by ID. PATH PARAMETER NOT QUERY......(api/1)
    4. POST /api Create a new Person.
    5. PUT /api/:id: Update a person by ID. PATH PARAMETER NOT QUERY......(api/1)
    6. DELETE /api/:id: Delete an item by ID. PATH PARAMETER NOT QUERY......(api/1)

5. Usage
    You can use tools like Postman to interact with the API endpoints for testing.
6. UML DIAGRAM LINK
   https://shorturl.at/hklqS
