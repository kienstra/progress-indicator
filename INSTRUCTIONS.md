# Block JSON File

Most content in modern WordPress is a block.

This is similar to other editors you might know, like Notion.so or MailChimp.

Blocks are usually interactive, so they have a React component to edit them.

And they're saved to the database as HTML markup, with comments that have their attributes as JSON.

We're going to register a block so the editor is aware of it.

The modern way to register a WordPress block is [with](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) a `block.json` file.

WordPress [recommends](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file) registering a block with PHP and JS.

So the `block.json` file makes this more DRY, as we can use that file in both languages.

## Exercise

### Files
- `js/src/index.js`
- `progress-indicator.php`
