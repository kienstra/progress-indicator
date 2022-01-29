# Edit Component

A block's `Edit` component is what renders in the block editor.

It's a React component.

And it's similar to a typical React component, though WordPress has custom APIs and hooks.

WordPress also has a big component library in [@wordpress/components](https://github.com/WordPress/gutenberg/tree/trunk/packages/components) that we'll use.

Most of the time, you won't need to write a custom control in WordPress.

We'll render the block controls in [InspectorControls](https://github.com/WordPress/gutenberg/tree/57da3c91a166d917a2a9de98177be9c3dfe07ee5/packages/block-editor/src/components/inspector-controls).

By rendering components inside <InspectorControls>, they appear in the Inspector.

## Exercise

### File
- [js/src/edit.exercise.js](js/src/edit.exercise.js)
