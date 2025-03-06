import * as Hapi from "@hapi/hapi";
import * as Inert from "@hapi/inert";
import uploadRoutes from "./routes/uploadRoutes";

const init = async () => {
  const server = Hapi.server({
    routes: {
      cors: {
        origin: ["*"],
        headers: ["Accept", "Content-Type"],
        additionalHeaders: ["X-Requested-With"],
      },
    },
    port: 4000,
    host: "localhost",
  });

  await server.register(Inert);
  server.route(uploadRoutes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init().catch((err) => {
  console.error("Error starting server:", err);
});
