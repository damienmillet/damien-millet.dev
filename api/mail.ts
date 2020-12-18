import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

export default async function send() {
  const client = new SmtpClient();
  const connectConfig: any = {
    hostname: "mail.infomaniak.com",
    port: 465,
    username: "contact@damien-millet.dev",
    password: "3DJpz78MdYt_",
  };
  await client.connectTLS(connectConfig);
  await client.send({
    from: "contact@damien-millet.dev",
    to: "damien_millet@icloud.com",
    subject: "Mail Title",
    content: "Mail Content，maybe HTML",
  });
  await client.close();
  return;
}
