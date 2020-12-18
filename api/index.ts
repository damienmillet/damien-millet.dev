import { opine } from "https://deno.land/x/opine@0.27.0/mod.ts";

const app = opine();

app.get("/", function (req, res) {
  res.send("Hello World");
});
