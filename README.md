# Create a WordPress Block

The format is inspired by Kent C. Dodd's [courses](https://epicreact.dev).

## What should you know?

Only the basics of React. The first 12 lessons in [The Beginner's Guide To React](https://egghead.io/courses/the-beginner-s-guide-to-react) should look familiar.

## What don't you need?

PHP knowledge. There's only 1 PHP file.

## What will you learn?

How to create a content block in WordPress.

This isn't a React course. It's a course on React in WordPress.

## Requirements

[Composer](https://getcomposer.org/) and [Node.js](https://nodejs.org/)

## Environment

You can `checkout` this plugin to your own local WordPress environment.

Or you can use the bundled environment with:

```sh
npm run wp-env start
```

Go to http://localhost:8888 for your environment.

The Username is `admin` and the Password is `password`.

For the other `wp-env` commands, see the [Command Reference](https://github.com/wordPress/gutenberg/tree/trunk/packages/env#command-reference).

## Development

Use the correct Node version:
```sh
nvm use
```

Install:
```sh
npm install && composer install
```

Watch for changes:
```sh
npm run dev
```
