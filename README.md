<div align="center">

# ChatGPT Export — by NoXoZ.be

**v7.0.0** · Independent Brave / Chromium extension

[![Version](https://img.shields.io/badge/version-7.0.0-blue)]()
[![License](https://img.shields.io/badge/license-NoXoZ%20Personal%20v1.0-lightgrey)]()
[![Platform](https://img.shields.io/badge/platform-Brave%20%7C%20Chrome%20%7C%20Chromium-informational)]()
[![Telemetry](https://img.shields.io/badge/telemetry-none-success)]()

</div>

> **Independent project.** Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI.
> Author: **Bruno DELNOZ** / **@NoXoZ.be**

---

## Overview

Browser extension for exporting ChatGPT conversations, complete ChatGPT Projects, or an entire account's chats, into structured Markdown ZIP archives.

**v7.0.0** is the major-release baseline built from the validated **v6.1.4 p24** codebase, preserving the p24 project-source official-flow fix and the existing export behavior.

## Features

| Area | Detail |
|---|---|
| Current chat export | Generates a structured ZIP for the active conversation |
| Project export | Exports a complete ChatGPT Project into a single ZIP |
| ALL export (account) | Exports **every** chat in the account, in Full mode |
| Batching | `#inZip` splits large exports into multiple ZIPs |
| Full mode only for ALL | Start/End options do not apply to an ALL export |
| Readable Markdown files | One `.md` file per chat |
| Per-chat folder structure | A dedicated folder per chat, with `Upload/` and `Download/` |
| Automatic indexes | `INDEX.md` generated for each Project / ALL batch |
| File inventory | Lists uploaded files and files offered for download |
| Upload retrieval | Optional copy of user-uploaded files |
| Download retrieval | Optional copy of assistant-offered files |
| Multiple interfaces | **Mini**, **Maxi**, and **Developer** modes |
| Project support | Optional donation button, opens Stripe only on click |
| 100% local | No NoXoZ.be backend, no telemetry, no analytics |

## Interface

### Maxi mode

| Control | Role |
|---|---|
| `Number of messages to export` | Message count used by START and END modes |
| `Number of chats to export per ZIP` | Max chats per ZIP (ALL Full Chat / Full Project) |
| `Export Full Project` | Exports the complete Project |
| `Export Uploaded Files` | Includes uploaded files |
| `Export Downloaded Files` | Includes files offered for download |
| `Export Full Chat` | Exports the current chat in full |
| `Export From Start` | Exports from the beginning, limited by message count |
| `Export From End` | Exports from the end, limited by message count |
| `Export ALL Full Chat` | Exports every chat in the account |
| `Start Export` | Launches the export |
| `Click to Support This Project` | Opens the Stripe donation page |

### Mini mode

| Control | Maxi equivalent |
|---|---|
| `#MSG` | Message count (START / END) |
| `#inZip` | Chats per ZIP |
| `FULL` / `START` / `END` | Export modes for the current chat |
| `PROJECT` | Full Project export |
| `ALL` | ALL Full Chat export |
| `UPLOAD FILES` / `DOWNLOAD FILES` | File retrieval |
| `Start Export` | Launches the export |
| `Support This Project` | Opens the Stripe donation page |

> Blue = enabled/selected · Gray = disabled/not selected.

## Message count vs. chat batching

- `Number of messages to export` / `#MSG` apply **only** to START and END modes. They do **not** limit FULL Chat, FULL Project, or ALL Full Chat.
- `Number of chats to export per ZIP` / `#inZip` apply to **ALL Full Chat** and **Full Project**. They control the batch size used to avoid processing a large export in a single giant ZIP.

## ALL Full Chat

`ALL Full Chat` exports every discovered account chat, exclusively in **FULL** mode (Start/End options are not used).

Chats are processed sequentially; each ZIP batch is finalized before moving to the next one, which reduces peak memory usage and the risk of browser crashes on accounts with many chats.

**Example**: 1,247 chats with `#inZip = 50` → 25 ZIP files.

Each batch is independently usable and contains its own `INDEX.md`. `Upload/` and `Download/` folders remain associated with the correct chat.

### Account name in ZIP filenames

When the account name is available from the active ChatGPT session, it is included in the filenames of an ALL Full Chat export. A safe fallback name is used if the account name cannot be resolved.

```text
Export ALL Full Chat - AccountName__export_YYYY-MM-DD-HH-MM-SS__part-001-of-025.zip
```

## Export structure

**Full Chat export**

```text
ChatName__export_YYYY-MM-DD-HH-MM-SS.zip
└── ChatName__export_YYYY-MM-DD-HH-MM-SS/
    ├── ChatName__export_YYYY-MM-DD-HH-MM-SS.md
    ├── Upload/
    └── Download/
```

**ALL Full Chat export**

```text
Export ALL Full Chat - AccountName__export_...__part-001-of-025.zip
├── INDEX.md
├── Chat 001/
│   ├── Chat 001__export_....md
│   ├── Upload/
│   └── Download/
├── Chat 002/
│   ├── Chat 002__export_....md
│   ├── Upload/
│   └── Download/
└── ...
```

**Full Project export**

```text
Full Project - ProjectName__export_YYYY-MM-DD-HH-MM-SS.zip
├── INDEX.md
├── Project - ProjectName - Chat01__export_.../
│   ├── Project - ProjectName - Chat01__export_....md
│   ├── Upload/
│   └── Download/
└── Project - ProjectName - Chat02__export_.../
    ├── Project - ProjectName - Chat02__export_....md
    ├── Upload/
    └── Download/
```

## Batching — worked example

`Number of chats to export per ZIP` / `#inZip` applies to **Export Full Project** and **Export ALL Full Chat**.

| Chats in Project | `#inZip` | Result |
|---|---|---|
| 12 | 5 | 3 ZIPs: 5 + 5 + 2 chats |
| 5 | 5 | 1 ZIP: 5 chats |
| 13 | 5 | 3 ZIPs: 5 + 5 + 3 chats |

Each batch is finalized before the next one starts.

## Related documentation

| Document | Content |
|---|---|
| [`INSTALL.md`](INSTALL.md) | Installation for Brave / Chrome / Chromium |
| [`PRIVACY.md`](PRIVACY.md) | Data processed, export destination |
| [`SECURITY.md`](SECURITY.md) | Security model, download validation |
| [`DONATE.md`](DONATE.md) | Voluntary project support |
| [`LICENSE`](LICENSE) | NoXoZ Personal License v1.0 |
| `ChatGPT-Export_v7.0.0_Product_Guide.pdf` | Full product guide (batching, examples, version history) |

---

<div align="center">

© 2026 Bruno DELNOZ / NoXoZ.be — All rights reserved.

</div>
