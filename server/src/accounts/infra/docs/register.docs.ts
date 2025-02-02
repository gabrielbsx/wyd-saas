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
        email: {
          type: "string",
          format: "email",
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
      required: ["username", "email", "password", "passwordConfirmation"],
    },
    response: {
      201: {
        type: "object",
      },
    },
  },
};
