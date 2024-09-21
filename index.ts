import { PRODUCTS } from "./src/db/products";

const server = Bun.serve({
  port: process.env.PORT,
  fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;
    const { method } = req;

    console.log(method, url.origin);

    if (pathname === "/" && method === "GET") {
      const json = JSON.stringify({ msg: "¡Bienvenido!" });
      return new Response(json, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (pathname === "/products" && method === "GET") {
      const json = JSON.stringify(PRODUCTS);
      return new Response(json, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        msg: "Mani te estás tirando un triple, revisa la ruta.",
      }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  },
});

console.log(`Listening on http://localhost:${server.port}`);
