export const loginSchemaDocs = {
  schema: {
    body: {
      type: "object",
      properties: {
        username: {
          type: "string",
          minLength: 4,
          maxLength: 10,
        },
        password: {
          type: "string",
          minLength: 4,
          maxLength: 10,
        },
      },
      required: ["username", "password"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          token: {
            type: "string",
          },
          account: {
            type: "object",
            properties: {
              id: {
                type: "string",
              },
              username: {
                type: "string",
              },
              email: {
                type: "string",
              },
              createdAt: {
                type: "string",
              },
              updatedAt: {
                type: "string",
              },
              deletedAt: {
                type: "string",
              },
            },
          },
        },
      },
    },
  },
};
