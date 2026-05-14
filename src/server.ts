import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(req);
  },
);

server.listen(3000, () => {
  console.log("server is running 3000");
});
