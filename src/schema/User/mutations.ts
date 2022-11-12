import { MutationResolvers } from "@/__generated__/resolvers-types"

export const mutations: MutationResolvers = {
  createUser: (_, { email }) => email,
}
