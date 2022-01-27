# Block JSON File

Most content in modern WordPress is a block.

This is similar to other editors like in [Notion](https://www.notion.so/) and [MailChimp](https://mailchimp.com/).

Blocks are usually interactive, so they have a React component to edit them.

And they're saved to the database as HTML markup, with JSON in comments with their attributes.

We're going to register a block so the editor is aware of it.

The modern way to register a WordPress block is [with](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) a `block.json` file.

It should go in the root of the plugin if there's only 1 block in the plugin.

WordPress [recommends](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file) registering a block with PHP and JS.

So the `block.json` file makes this more DRY, as we can use that file in both languages.

## Exercise

### Files
- `js/src/index.js`
- `progress-indicator.php`
