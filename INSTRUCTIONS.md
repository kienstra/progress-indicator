# Save Component

This React [component](https://github.com/WordPress/gutenberg/blob/57da3c91a166d917a2a9de98177be9c3dfe07ee5/docs/reference-guides/block-api/block-edit-save.md#save) determines what is saved to the database.

And what's saved to the database is what displays on the front-end.

The `Save` component will return markup, and WordPress saves that markup to the database.

Unlike the Edit component, this component isn't interactive.

Its only job is to return markup.

So you won't see `useState()` or REST API calls in `Save`.

[Dynamic blocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/) are different, but this block isn't a dynamic block.

The wrapping element of `Save` [should have](https://github.com/WordPress/gutenberg/blob/57da3c91a166d917a2a9de98177be9c3dfe07ee5/docs/reference-guides/block-api/block-edit-save.md#block-wrapper-props-1) `useBlockProps.save()` spread into it:
```jsx
export default function Save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }>
```

This will class(es) to it and attributes from the [Block Supports](https://github.com/WordPress/gutenberg/blob/57da3c91a166d917a2a9de98177be9c3dfe07ee5/docs/reference-guides/block-api/block-supports.md#supports) API:
```html
<div class="wp-block-progress-indicator-progress-indicator">
```

## Exercise
Edit the `Save` component, which will finish this block.

You'll see a lot of [block validation](https://github.com/WordPress/gutenberg/blob/57da3c91a166d917a2a9de98177be9c3dfe07ee5/docs/reference-guides/block-api/block-edit-save.md#validation) notices.

This is normal when editing the `Save` component.

Click 'Attempt Block Recovery' and continue developing.

### Files
- [js/src/save.exercise.js](https://github.com/kienstra/progress-indicator/blob/exercise/4-save-component/js/src/save.exercise.js)
