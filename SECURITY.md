# SECURITY - ChatGPT Export by NoXoZ.be v6.1.4

> Independent project. Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI. Author: Bruno DELNOZ / NoXoZ.be.

ChatGPT Export is a local browser extension.

## Security model

- No NoXoZ.be export backend.
- No analytics SDK.
- No telemetry endpoint.
- Exports are generated locally as Markdown/ZIP files.
- File bundling can access eligible ChatGPT/OpenAI-hosted resources associated with the active browser session.
- ALL Full Chat is processed sequentially and split into ZIP batches to limit peak in-memory archive size.

## Download validation

The exporter rejects generic ChatGPT HTML viewer pages when a real non-HTML file is expected.

This prevents a page viewer from being incorrectly saved as a Markdown, ZIP, PDF, image or other generated file.

## Sensitive data

Exported chats and bundled files can contain confidential information. Store and share generated ZIP files carefully.
