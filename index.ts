import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(_req) {
    const body = figlet.textSync("Bun!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
