# Create a WordPress Block

This format is taken from Kent C. Dodd's [courses](https://epicreact.dev).

## What should you know?

Only the basics of React. The first 12 lessons in [The Beginner's Guide To React](https://egghead.io/courses/the-beginner-s-guide-to-react) should look familiar.

## What don't you need?

PHP knowledge. There's only 1 PHP file.

## What will you learn?

How to create a content block in WordPress.

This isn't a React course. It's a course on React in WordPress.

## Requirements

[Composer](https://getcomposer.org/), [Node.js](https://nodejs.org/)

## Environment

You can `checkout` this plugin to your own local WordPress environment.

Or you can use the bundled environment with:

```sh
npm run wp-env start
```

Go to http://localhost:8888 for your environment.

The username is `admin` and the password is `password`.

For the other `wp-env` commands, see the [Command Reference](https://github.com/wordPress/gutenberg/tree/trunk/packages/env#command-reference).

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

## Exercises
This format is [taken from](https://github.com/kentcdodds/bookshelf/tree/6b4a484eb61c3e7bb27d151ca32b041662922536#workflow) Kent C. Dodds.

1. `checkout` the branch for the exercise, like `exercise/1-block-json`
2. Read `INSTRUCTIONS.md`
3. Do the exercise
4. Watch the video for the exercise solution
4. Repeat 1-4 with the next exercise