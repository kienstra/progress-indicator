# Block JSON File

All content in the WordPress block editor is a block.

This is similar to other editors like [Medium](https://medium.com/), [Notion](https://www.notion.so/), and [MailChimp](https://mailchimp.com/).

Blocks are usually interactive, so they have a React component to edit them.

And they're saved to the database as HTML markup, with attributes stored in comments.

Here's an example of a saved Paragraph block:

```html
<!-- wp:paragraph {"textColor":"vivid-cyan-blue","fontSize":"large"} -->
<p class="has-vivid-cyan-blue-color has-text-color has-large-font-size">This is text in an example paragraph block</p>
```

In this exercise, we're going to register a block so the editor is aware of it.

The modern way to register a WordPress block is [with](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) a `block.json` file.

A `block.json` file [must be present](https://github.com/WordPress/wporg-plugin-guidelines/blob/28d945f414db3bb42e04805fb109e7178cbabc9a/blocks.md#4-block-plugins-must-include-a-blockjson-file) to be eligible for the [Block Directory](https://wordpress.org/plugins/browse/block/).

Also, WordPress [recommends](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-using-the-metadata-file) registering a block with PHP and JS.

So the `block.json` file makes this more DRY, as we can use that file in both languages.

## Exercise

You're going to register the block in JS and PHP.

You can mainly use `block.json` for both.

Look for the 🚧 in the exercise files for where to edit.

In [js/src/index.exercise.js](js/src/index.exercise.js), `registerBlockType()` will look like:

```js
registerBlockType( block.name, {
	apiVersion: block.apiVersion,
	// Most other values taken from block also.
```

Hint: you can avoid doing `block.` by [destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the properties of `block`.

### Files
- [js/src/index.exercise.js](js/src/index.exercise.js)
- [progress-indicator.php](progress-indicator.php)
