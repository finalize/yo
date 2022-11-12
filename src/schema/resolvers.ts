import { User } from "./User"
import { Resolvers } from "@/__generated__/resolvers-types"

export const resolvers: Resolvers = {
  Query: { ...User.queries },
  Mutation: { ...User.mutations },
}
