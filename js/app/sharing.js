// Copy link to clipboard
var clipboard = new ClipboardJS('[data-clipboard]');
clipboard.on('success', function(e) {
  // Get the Success text from the data attribute data-clipboard-copied-message
  e.trigger.text = e.trigger.dataset.clipboardCopiedMessage;
  e.clearSelection();
});
