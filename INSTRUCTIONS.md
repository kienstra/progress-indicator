# Block JSON File

Most content in modern WordPress is a block.

This is similar to other editors like [Medium](https://medium.com/), [Notion](https://www.notion.so/), and [MailChimp](https://mailchimp.com/).

Blocks are usually interactive, so they have a React component to edit them.

And they're saved to the database as HTML markup, with JSON in comments with their attributes.

We're going to register a block so the editor is aware of it.

The modern way to register a WordPress block is [with](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) a `block.json` file.

It should go in the root of the plugin if there's only 1 block in the plugin.

The `block.json` file [must be](https://github.com/WordPress/wporg-plugin-guidelines/blob/28d945f414db3bb42e04805fb109e7178cbabc9a/blocks.md#4-block-plugins-must-include-a-blockjson-file) in the root of the plugin to be in the [block directory](https://wordpress.org/plugins/browse/block/).

Also, WordPress [recommends](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file) registering a block with PHP and JS.

So the `block.json` file makes this more DRY, as we can use that file in both languages.

## Exercise

You're going to register the block in JS and PHP.

You can mainly use `block.json` for both.

Look for the 🚧 in the exercise files for where to edit.

### Files
- [js/src/index.exercise.js](https://github.com/kienstra/progress-indicator/blob/exercise/1-block-json/js/src/index.exercise.js)
- [progress-indicator.php](https://github.com/kienstra/progress-indicator/blob/exercise/1-block-json/progress-indicator.php)
