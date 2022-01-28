# React, The WordPress Way

A hands-on tutorial on developing a WordPress block.

[Rob Stinson](https://robstinson.co/) created this tutorial's block.

And this uses [Kent C. Dodds](https://epicreact.dev)' format for exercises.

## What will you learn?

How to create a content block in WordPress.

This isn't a React course. It's a course on React in WordPress.

You'll learn how to develop for the WP block editor.

And you'll see typical setup of a WP block plugin.

## What should you know first?

The basics of React and [modern JavaScript](https://kentcdodds.com/blog/javascript-to-know-for-react).

The first 12 lessons in [The Beginner's Guide To React](https://egghead.io/courses/the-beginner-s-guide-to-react) should look familiar.

## What don't you need to know?

PHP. There's only 1 PHP file, and you can learn as you go.

## Requirements

[Node Version Manager](https://github.com/nvm-sh/nvm), [Composer](https://getcomposer.org/)

## Development

Use the correct Node version:
```sh
nvm use
```

Install dependencies:
```sh
npm install && composer install
```

Watch for changes:
```sh
npm run dev
```

## Environment

You can `checkout` this plugin to your own local WordPress environment.

Or you can use the bundled environment:
```sh
npm run wp-env start
```

That will require [Docker](https://www.docker.com/).

Go to http://localhost:8888 for your environment.

The username is `admin` and the password is `password`.

For the other `wp-env` commands, see the [Command Reference](https://github.com/wordPress/gutenberg/tree/trunk/packages/env#command-reference).

## Exercises
1. [Block JSON](https://github.com/kienstra/progress-indicator/blob/exercise/1-block-json/INSTRUCTIONS.md)
2. [Edit Component](https://github.com/kienstra/progress-indicator/blob/exercise/2-edit-component/INSTRUCTIONS.md)
3. [Progress Indicator Component](https://github.com/kienstra/progress-indicator/blob/exercise/3-progress-indicator/INSTRUCTIONS.md)
4. [Save Component](https://github.com/kienstra/progress-indicator/blob/exercise/4-save-component/INSTRUCTIONS.md)

## Exercise Steps
This format is [taken from](https://github.com/kentcdodds/bookshelf/tree/6b4a484eb61c3e7bb27d151ca32b041662922536#workflow) Kent C. Dodds.

1. `checkout` the branch for the exercise, like [exercise/1-block-json](https://github.com/kienstra/progress-indicator/tree/exercise/1-block-json)
2. Read `INSTRUCTIONS.md`
3. Find the `Files` heading in `INSTRUCTIONS.md`, and edit its files
4. 🚧 will show where to edit
5. Watch the video for the exercise solution
6. Go to the next exercise, and repeat steps 1-5
