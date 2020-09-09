import { gql } from 'apollo-server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
    type Person {
        id: ID,
        firstName: String,
        lastName: String,
    }

    input PersonInput {
        firstName: String!,
        lastName: String!,
    }

    type Query {
        people: [Person],
        person(id: ID!): Person,
    }

    type Mutation {
        createPerson(person: PersonInput): Person!,
        updatePerson(id: ID, person: PersonInput): Person!,
    }
`;