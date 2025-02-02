export const forgotPasswordDocs = {
  schema: {
    body: {
      type: "object",
      properties: {
        username: {
          type: "string",
          minLength: 4,
          maxLength: 10,
        },
      },
      required: ["username"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
};
