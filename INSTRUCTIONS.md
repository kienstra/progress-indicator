# Save Component

This component controls what is saved to the database.

And it mainly controls what is displayed on the front-end (not in the editor).

[Dynamic blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/) are different, but this block isn't a dynamic block.

WordPress blocks are usually saved as both:

1. HTML
2. Block attributes as JSON in HTML comments

The `Save` component usually determines what the block is saved as, and how it looks on the front-end.

## Exercise

### Files
- `js/src/save.exercise.js`
