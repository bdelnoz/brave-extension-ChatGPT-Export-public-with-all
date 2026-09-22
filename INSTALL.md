# Installation — ChatGPT Export by NoXoZ.be v7.0.0

> Independent project. Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI.
> Author: Bruno DELNOZ / @NoXoZ.be

## Brave

1. Extract the ZIP archive.
2. Open `brave://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the extracted folder containing `manifest.json`.
6. Open or reload ChatGPT.

## Chrome / Chromium

Use `chrome://extensions/` and follow the same **Load unpacked** procedure.

## ALL Full Chat — recommendations

For large exports, use:

- **Number of chats to export per ZIP** (Maxi mode), or
- **`#inZip`** (Mini mode)

A value such as `5` limits each Full Project or ALL Full Chat ZIP to 5 chats, reducing peak memory usage. Each batch is finalized before the next one starts.

> `ALL Full Chat` always uses **FULL** mode; Start/End controls do not apply.

## Runtime files

```text
manifest.json
background.js
content-export.js
donate-mini.js
export-style.css
icons/
```

## Quick troubleshooting

| Symptom | Check |
|---|---|
| Extension does not appear | Verify that Developer mode is enabled |
| Nothing gets exported | Reload the ChatGPT page after installation |
| Incomplete export on a large account | Lower `#inZip` to reduce batch size |
| Expected file is missing | See `SECURITY.md` — download validation |
