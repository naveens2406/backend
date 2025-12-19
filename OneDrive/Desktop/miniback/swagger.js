const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Commerce API",
      version: "1.0.0",
      description: "API documentation for E-Commerce Backend"
    },

    // 👉 Add more than one server to show dropdown
    servers: [
      {
        url: "http://localhost:5600",
        description: "Local Development Server"
      },
      {
        url: "https://api.example.com",
        description: "Production Server"
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },

    security: [
      {
        bearerAuth: []
      }
    ]
  },

  // 👉 Scan route files for swagger comments
  apis: ["./routes/*.js"]
};

module.exports = swaggerJSDoc(options);