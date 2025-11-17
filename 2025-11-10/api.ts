import { config } from "./config.ts";
export async function new_token() {
    const response = await fetch(config.api_token_request_url);
    const data = await response.json();
    // TODO error handling
    return data.token;
}