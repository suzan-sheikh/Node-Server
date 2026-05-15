import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if(url === '/' && method === "GET"){
      res.writeHead(200, {"content-type" : "text/plain"})
      res.end("this is route route")
    }






  },
);

server.listen(3000, () => {
  console.log("server is working on 3000");
});
