/*
 * ChatGPT Export - folder-picker-main.js
 * Version: v6.1.4
 * Patch: p11
 * Developer: @NoXoZ.be
 * MAIN-world bridge used only to open the directory picker from the real
 * Start Export user click for batched Project / ALL exports.
 */
(function cgxFolderPickerMainP11() {
  'use strict';

  const GUARD = '__CGX_FOLDER_PICKER_MAIN_P11__';
  if (window[GUARD]) return;
  window[GUARD] = true;

  const SOURCE = 'cgx-folder-picker-main-p11';

  function post(type, extra = {}) {
    try {
      window.postMessage(Object.assign({ source: SOURCE, type }, extra), window.location.origin);
    } catch (error) {
      // FileSystemDirectoryHandle is structured-cloneable in Chromium.  If a
      // browser build rejects it, report that explicitly instead of silently
      // starting an export in the wrong directory.
      try {
        window.postMessage({
          source: SOURCE,
          type: 'CGX_BATCH_FOLDER_ERROR',
          message: `Directory handle transfer failed: ${error?.message || error}`
        }, window.location.origin);
      } catch { /* nothing else can be done safely */ }
    }
  }

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('#cgx-widget [data-action="export"]') : null;
    if (!target) return;

    const widget = document.getElementById('cgx-widget');
    if (!widget) return;
    if (widget.dataset.cgxPickerBridge !== 'p11') return;
    if (widget.dataset.cgxBatchExport !== '1') return;
    if (widget.dataset.cgxExporting === '1') return;

    // Own this physical click completely.  This prevents the isolated-world
    // content-script handler from starting (or immediately stopping) the export.
    event.preventDefault();
    event.stopImmediatePropagation();

    if (widget.dataset.cgxPickerBusy === '1') return;
    widget.dataset.cgxPickerBusy = '1';

    if (typeof window.showDirectoryPicker !== 'function') {
      widget.dataset.cgxPickerBusy = '0';
      post('CGX_BATCH_FOLDER_ERROR', { message: 'showDirectoryPicker is not available in this Brave/Chromium page context' });
      return;
    }

    // IMPORTANT: call the picker directly in this click handler before any
    // await/microtask so Chromium sees the required transient user activation.
    let pickerPromise;
    try {
      pickerPromise = window.showDirectoryPicker({
        mode: 'readwrite',
        id: 'cgx-export-batch-folder'
      });
    } catch (error) {
      widget.dataset.cgxPickerBusy = '0';
      post('CGX_BATCH_FOLDER_ERROR', { message: String(error?.message || error) });
      return;
    }

    Promise.resolve(pickerPromise).then((handle) => {
      widget.dataset.cgxPickerBusy = '0';
      post('CGX_BATCH_FOLDER_SELECTED', { handle });
    }).catch((error) => {
      widget.dataset.cgxPickerBusy = '0';
      if (error?.name === 'AbortError') {
        post('CGX_BATCH_FOLDER_CANCELLED');
        return;
      }
      post('CGX_BATCH_FOLDER_ERROR', { message: String(error?.message || error) });
    });
  }, true);
}());
