# Save Component

This React [component](https://github.com/WordPress/gutenberg/blob/57da3c91a166d917a2a9de98177be9c3dfe07ee5/docs/reference-guides/block-api/block-edit-save.md#save) determines what's saved to the database.

Its only job is to return markup.

The returned markup is saved to the database as HTML, with attributes stored in a comment:

```html
<!-- wp:progress-indicator/progress-indicator {"color":"#ffe2c7","currentStep":3,"numberOfSteps":7} -->
<div class="wp-block-progress-indicator-progress-indicator">
```

And that saved markup is what displays on the front-end.

Unlike the `Edit` component, this component isn't interactive.

So you won't see `useState()` or REST API calls in `Save`.

The wrapping element of `Save` [should have](https://github.com/WordPress/gutenberg/blob/57da3c91a166d917a2a9de98177be9c3dfe07ee5/docs/reference-guides/block-api/block-edit-save.md#block-wrapper-props-1) `useBlockProps.save()` spread into it:
```jsx
export default function Save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }>
```

This adds classes, and sometimes attributes from the [Block Supports](https://github.com/WordPress/gutenberg/blob/57da3c91a166d917a2a9de98177be9c3dfe07ee5/docs/reference-guides/block-api/block-supports.md#supports) API:
```html
<div class="wp-block-progress-indicator-progress-indicator">
```

## Exercise
You'll see a lot of [block validation](https://github.com/WordPress/gutenberg/blob/57da3c91a166d917a2a9de98177be9c3dfe07ee5/docs/reference-guides/block-api/block-edit-save.md#validation) notices like:

>This block contains unexpected or invalid content.

This is normal when editing the `Save` component.

Click 'Attempt Block Recovery' and continue developing:

![unexpected-invalid-content](https://user-images.githubusercontent.com/4063887/152257716-0477a0dc-d666-4249-a5e4-65c96a1e7817.gif)

Once you finish this `Save` component, this block will be done.

It'll display on the front-end.

### File
- [js/src/save.exercise.js](js/src/save.exercise.js)

[Solution video](https://bit.ly/34tiHr2)
