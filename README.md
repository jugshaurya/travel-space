# Apollo Fullstack - Space Launches

- Apollo is used to build data-graph, a communication layer to connect your application client to back-end services 🐥.
  ![](./flow.png)

## Client

## Server

- `schema-first development` (agree on a schema before you begin implementing your API.)(think of it like: - what our client is going to do with our app?)
- A `data source` is any database, service, or API that holds the data you use to populate your schema's fields.

#### Responsibilities:

- Fetch a list of all upcoming rocket launches
- Fetch a specific launch by its ID
- Log in the user and if logged in:
  - Book a launch
  - Cancel a previously booked launch
- extend `DataSource` to connect both a REST API and a SQL database to Apollo Server.
