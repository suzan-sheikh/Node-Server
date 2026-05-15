import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if(url === '/' && method === "GET"){
      console.log("this is root rout");
    }






  },
);

server.listen(3000, () => {
  console.log("server is working on 3000");
});
