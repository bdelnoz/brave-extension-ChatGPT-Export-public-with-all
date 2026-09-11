# PRIVACY - ChatGPT Export by NoXoZ.be v6.1.2

> Independent project. Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI. Author: Bruno DELNOZ / NoXoZ.be.

The extension processes ChatGPT content locally in the browser for export.

## Data processed

Depending on enabled options, the extension can process:

- rendered conversation text;
- chat and project titles;
- account/session information used to name ALL Full Chat ZIPs when available;
- uploaded filenames and retrievable bytes;
- Assistant file-offer filenames and retrievable bytes;
- chat lists and message metadata required to build ALL Full Chat batches and indexes.

## Data destination

Exports are written to local files saved/downloaded by the user. ALL Full Chat exports are split into sequential ZIP batches according to `Number of chats to export per ZIP` / `#inZip`.

The extension does not intentionally send exported conversation content to a separate NoXoZ.be analytics, advertising, telemetry or storage service.
