# INSTALL - ChatGPT Export by NoXoZ.be v6.1.4

> Independent project. Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI. Author: Bruno DELNOZ / NoXoZ.be.

## Brave

1. Extract the ZIP.
2. Open `brave://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the extracted folder containing `manifest.json`.
6. Open or reload ChatGPT.

## Chrome / Chromium

Use `chrome://extensions/` and follow the same **Load unpacked** procedure.

## ALL Full Chat

For large exports, use **Number of chats to export per ZIP** in Maxi mode or **#inZip** in Mini mode. A value such as `5` limits each Full Project or ALL Full Chat ZIP to 5 chats and reduces peak memory usage. Each batch is finalized before the next batch starts. ALL Full Chat always uses FULL mode; Start/End controls are not used.

## Runtime files

```text
manifest.json
background.js
content-export.js
donate-mini.js
export-style.css
icons/
```
