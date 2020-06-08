const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    launches: [Launch!]!
    launch(id: ID!): Launch
    me: User
  }

  type Mutation {
    login(email: String!): String # for token
    bookTrips(launchIds: [ID!]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch!]!
  }

  type Launch {
    id: ID!
    site: String
    rocket: Rocket
    mission: Mission
    isBooked: Boolean!
  }

  type Mission {
    id: ID!
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch!]!
  }
`;

module.exports = typeDefs;
