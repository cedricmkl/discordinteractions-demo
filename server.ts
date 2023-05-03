import { interactions, message } from "https://deno.land/x/discordinteractions/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const client = interactions({
    publicKey: "2023cf46202f03fad1ffbea7967233c4b938e04a5f6af0b9844a1ed13379ae48"
})
    .slash("hello", (i) => message({ content: `Hello ${i.member?.user.username}!` }))
    .slash("quote", async (_) => {
        const response = await fetch("https://api.quotable.io/random");
        const quote = await response.json();
        return message({ content: `"${quote.content}" —${quote.author}` });
    })

serve(client.handle);