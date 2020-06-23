# Apollo Fullstack - Space Launches 
  - An interactive app for reserving a seat on an upcoming SpaceX launch.
    ##### Making an app following docs and learning Apollo and Graphql in addition.

- Apollo is used to build data-graph, a communication layer to connect your application client to back-end services 🐥.
  ![](./flow.png)

## Server

- `schema-first development` (agree on a schema before you begin implementing your API.)(think of it like: - what our client is going to do with our app?)
- A `data source` is any database, service, or API that holds the data you use to populate your schema's fields.
- A `resolver` is a function that's responsible for populating the data for a single field in your schema.
- The resolver for a parent field always executes before the resolvers for that field's children.
- _field with list return type_ are known as Connection.
- _field with list return type_ should give us a list of edges, and an edge has both a cursor and the underlying node:

```js
{
  hero {
    name
    friends(first:2) {
      edges {
        node {
          name
        }
        cursor
      }
    }
  }
}
```

```js
{
  hero {
    name
    friends(first:2) {
      edges {
        node {
          name
        }
        cursor
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}

```

#### Responsibilities:

- Fetch a list of all upcoming rocket launches
- Fetch a specific launch by its ID
- Log in the user and if logged in:
  - Book a launch
  - Cancel a previously booked launch
- extend `DataSource` to connect both a REST API and a SQL database to Apollo Server.



## Client

