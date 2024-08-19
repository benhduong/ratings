import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a.schema({
  RatingEntry: a
    .model({
      number: a.integer(), // Maps to '#'
      name: a.string(), // Maps to 'Name'
      ratings: a.integer(), // Maps to '# ratings'
      openAvg: a.float(), // Maps to 'Open AVG'
      average: a.float(), // Maps to 'Average'
    })
    .authorization((allow) => [allow.publicApiKey()]), // Public access
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
