# Edit Component

A block's Edit component is what renders in the block editor, not the front-end of the site.

It's a React component.

It's similar to a typical React component, though WordPress has custom APIs and hooks.

WordPress also has a big component library in [@wordpress/components](https://github.com/WordPress/gutenberg/tree/trunk/packages/components) that we'll use.

Most of the time, you won't need a custom control in WordPress.

We'll add the controls for the block to the <InspectorControls>, using the component library.

By rendering components inside <InspectorControls>, they appear in the Inspector.

## Exercise

### File
- [js/src/edit.exercise.js](js/src/edit.exercise.js)
