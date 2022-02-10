# Edit Component

A block's `Edit` component is what renders in the block editor.

It's a React component.

And it's similar to a typical React component, though WordPress has custom APIs and hooks.

WordPress also has a big component library in [@wordpress/components](https://github.com/WordPress/gutenberg/tree/trunk/packages/components) that we'll use.

Most of the time, you won't need to write a custom control.

We'll render the block controls in [InspectorControls](https://github.com/WordPress/gutenberg/tree/57da3c91a166d917a2a9de98177be9c3dfe07ee5/packages/block-editor/src/components/inspector-controls).

By rendering components inside <InspectorControls>, they appear in the Inspector.

## Exercise

You're going to write the `Edit` component.

It's what that the user sees in the block editor.

This component is very interactive.

Its function is to update the block attributes and markup as the user edits the block.

One of its `props` is `setAttributes`:

```jsx
export default function Edit( {
    attributes,
    setAttributes
} ) {
```

That sets an attribute to a new value.

For example, when the user selects a color, it can set the `color` attribute:

```jsx
onChange={ ( newValue ) =>
	setAttributes( { color: newValue } )
}
```

That handler accepts a `newValue` parameter, which is the value that the user just selected.

And `setAttributes` accepts an object.

That object only needs one property, which is the name of the attribute:

```jsx
setAttributes( { color: newValue } )
```

### File
- [js/src/edit.exercise.js](js/src/edit.exercise.js)

[Solution video](https://bit.ly/3HJCDVg)
