# Block Registration

All content in the WordPress block editor is a block.

This is similar to other editors like [Medium](https://medium.com/), [Notion](https://www.notion.so/), and [MailChimp](https://mailchimp.com/).

Blocks are usually interactive, so they have a React component to edit them.

In this exercise, we're going to register a block so the editor is aware of it.

The modern way to register a WordPress block is [with](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) a `block.json` file.

A `block.json` file [must be present](https://github.com/WordPress/wporg-plugin-guidelines/blob/28d945f414db3bb42e04805fb109e7178cbabc9a/blocks.md#4-block-plugins-must-include-a-blockjson-file) to be eligible for the [Block Directory](https://wordpress.org/plugins/browse/block/).

Also, WordPress [recommends](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file) registering a block with PHP and JS.

Both registrations will be simple because of `block.json`.

## Exercise

You're going to register the block in JS and PHP.

Look for 🚧 in the exercise files for where to edit.

In [js/src/index.exercise.js](js/src/index.exercise.js), `registerBlockType()` will look like:

```js
registerBlockType( block.name, {
	// edit component here.
```

### Files
- [progress-indicator.php](progress-indicator.php)
- [js/src/index.exercise.js](js/src/index.exercise.js)

### Solution
https://user-images.githubusercontent.com/4063887/159091534-12a41901-4100-4fc5-8222-fa25413977d7.mp4
