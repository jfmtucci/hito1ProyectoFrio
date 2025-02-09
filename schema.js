//get Usuarios
response = {
  type: "object",
  properties: {
    usuario: {
      type: "object",
      properties: {
        nombre: {
          type: "string",
        },
        correo: {
          type: "string",
          format: "email",
        },
        rol: {
          type: "string",
        },
      },
      required: ["nombre", "correo", "rol"],
    },
  },
  required: ["usuario"],
};
// get publicaciones

response = {
  type: "object",
  properties: {
    publicaciones: {
      type: "array",
    },
  },
  required: ["publicaciones"],
};

// get publicaciones:id

// post Login
request = payload = {
  type: "object",
  properties: {
    nombre: {
      type: "string",
    },
    clave: {
      type: "string",
    },
  },
  required: ["nombre", "clave"],
};

response = {
  type: "object",
  required: ["token", "user"],
  properties: {
    token: {
      type: "string",
    },
    user: {
      type: "object",
      required: ["email"],
      properties: {
        email: {
          type: "string",
        },
      },
    },
  },
};

//post register
request = payload = {
  type: "object",
  properties: {
    nombre: {
      type: "string",
    },
    email: {
      type: "string",
    },
    clave: {
      type: "string",
    },
    rol: {
      type: "string",
    },
  },
  required: ["nombre", "email", "clave", "rol"],
};

response = {
  type: "object",
  properties: {
    token: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
  required: ["token", "email"],
};
