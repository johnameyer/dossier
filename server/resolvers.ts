// Resolvers define the technique for fetching the types defined in the

import { Database } from "./database";

// (parent, args, context, info)
export const resolvers = {
    Query: {
        people: () => Database.getPeople(),
        person: (_, args) => Database.getPerson(args.id),
    },
    Mutation: {
        createPerson: (_, args) => {
            return Database.createPerson(args.person);
        },
        updatePerson: (_, args) => Database.updatePerson(args.id, args.person),
    }
};