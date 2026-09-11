# ChatGPT Export by NoXoZ.be - v6.1.2

> Independent project. Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI. Author: Bruno DELNOZ / NoXoZ.be.

Independent Brave / Chromium extension for exporting ChatGPT conversations, complete ChatGPT Projects, and all account chats into structured Markdown ZIP archives.

## What it does

- Exports the current ChatGPT conversation as a structured ZIP.
- Exports an entire ChatGPT Project into a single ZIP.
- Exports **ALL account chats in Full mode**.
- Splits ALL Full Chat exports into multiple ZIPs using **Number of chats to export per ZIP** / `#inZip`.
- Uses FULL mode for ALL Full Chat: Start/End message-range options are not used.
- Creates readable Markdown files.
- Creates one folder per chat.
- Keeps chat Markdown beside its `Upload/` and `Download/` folders.
- Creates project and ALL-batch `INDEX.md` files.
- Inventories uploaded files and Assistant-proposed download files.
- Optionally copies retrievable User-uploaded files into `Upload/`.
- Optionally copies retrievable Assistant downloadable files into `Download/`.
- Provides Mini, Maxi and Developer UI modes.
- Provides an optional support/donation button that opens Stripe only when clicked.
- Works locally in the browser with no NoXoZ.be backend, no telemetry and no analytics.

## Controls

### Maxi mode

- `Number of messages to export` — message count used by START and END modes.
- `Number of chats to export per ZIP` — maximum number of chats in each ALL Full Chat ZIP.
- `Export Full Project`
- `Export Uploaded Files`
- `Export Downloaded Files`
- `Export Full Chat`
- `Export From Start`
- `Export From End`
- `Export ALL Full Chat`
- `Start Export`
- `Click to Support This Project`

### Mini mode

- `#MSG` — message count used by START and END modes.
- `#inZip` — maximum number of chats in each ALL Full Chat ZIP.
- `FULL`
- `START`
- `END`
- `PROJECT`
- `ALL` / `Export ALL Full Chat`
- `UPLOAD FILES`
- `DOWNLOAD FILES`
- `Start Export`
- `Support This Project`

Blue means enabled/selected. Gray means disabled/not selected.

## Message count vs chat batching

`Number of messages to export` and `#MSG` apply to START and END modes. They do **not** limit FULL Chat, FULL Project, or ALL Full Chat exports.

`Number of chats to export per ZIP` and `#inZip` apply to ALL Full Chat only. They control the batch size used to avoid processing a large account in one giant ZIP.

## ALL Full Chat

ALL Full Chat exports every discovered account chat in FULL mode. It does not use `Export From Start` or `Export From End`.

The exporter processes chats sequentially and closes each ZIP batch before moving to the next batch. This reduces peak memory usage and the risk of browser crashes on accounts containing many chats.

Example: 1,247 chats with `#inZip = 50` produces 25 ZIP files.

Each batch is independently usable and contains its own `INDEX.md`. Upload and Download folders remain associated with the relevant chat.

### Account name in ZIP filenames

When the account name is available from the active ChatGPT session, ALL Full Chat ZIP filenames include it. A safe fallback is used if the account name cannot be resolved.

Example:

```text
Export ALL Full Chat - AccountName__export_YYYY-MM-DD-HH-MM-SS__part-001-of-025.zip
```

## Full Chat ZIP structure

```text
ChatName__export_YYYY-MM-DD-HH-MM-SS.zip
`-- ChatName__export_YYYY-MM-DD-HH-MM-SS/
    |-- ChatName__export_YYYY-MM-DD-HH-MM-SS.md
    |-- Upload/
    `-- Download/
```

## ALL Full Chat ZIP structure

```text
Export ALL Full Chat - AccountName__export_YYYY-MM-DD-HH-MM-SS__part-001-of-025.zip
|-- INDEX.md
|-- Chat 001/
|   |-- Chat 001__export_....md
|   |-- Upload/
|   `-- Download/
|-- Chat 002/
|   |-- Chat 002__export_....md
|   |-- Upload/
|   `-- Download/
`-- ...
```

## Full Project ZIP structure

```text
Full Project - ProjectName__export_YYYY-MM-DD-HH-MM-SS.zip
|-- INDEX.md
|-- Project - ProjectName - Chat01__export_.../
|   |-- Project - ProjectName - Chat01__export_....md
|   |-- Upload/
|   `-- Download/
`-- Project - ProjectName - Chat02__export_.../
    |-- Project - ProjectName - Chat02__export_....md
    |-- Upload/
    `-- Download/
```

## License

See `LICENSE`.

## Privacy and security

See `PRIVACY.md` and `SECURITY.md`.

## Support

See `DONATE.md`.

## Product guide

See `ChatGPT-Export_v6.1.2_Product_Guide.pdf`.
