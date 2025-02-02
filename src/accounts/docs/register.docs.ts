export const registerSchemaDocs = {
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
        passwordConfirmation: {
          type: "string",
          minLength: 4,
          maxLength: 10,
        },
      },
      required: ["username", "password", "passwordConfirmation"],
    },
    response: {
      201: {
        type: "object",
      },
    },
  },
};
