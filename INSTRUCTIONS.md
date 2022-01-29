# Progress Indicator Component

This is where the block comes together.

You'll see the block render in the editor.

And you'll almost be finished once you finish this exercise.

## Exercise

When this works, `npm run lint:js` and `npm run test:js` should pass.

In `ProgressIndicator`, you'll use a ternary conditional to render either an `<svg>` or a number.

When conditionally rendering in React, we'll usually use ternary conditionals:
```jsx
<div>
    { isOpen
        ? __( 'This is open', 'progress-indicator' )
        : __( 'This is closed', 'progress-indicator' )
    }
</div>
```

### Files
- [js/src/progress-indicator.exercise.js](js/src/progress-indicator.exercise.js)
- [js/src/edit.js](js/src/edit.js)
