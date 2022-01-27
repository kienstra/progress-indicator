<?php
/**
 * Progress Indicator
 *
 * @package ProgressIndicator
 *
 * Plugin Name:       Progress Indicator
 * Plugin URI:        https://github.com/kienstra/progress-indicator
 * Description:       A block that lets you easily display a progress indicator on your WordPress posts or pages.
 * Version:           0.1.0
 * Requires at least: 5.6
 * Requires PHP:      7.2
 * Author:            Rob Stinson
 * Author URI:        https://robstinson.co
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       progress-indicator
 * Domain Path:       languages
 */

add_action( 'init', 'progress_indicator_register_block' );

// Define a function progress_indicator_register_block().
// That function should simply call the PHP function to register a block: https://developer.wordpress.org/reference/functions/register_block_type_from_metadata/
// And that function's only argument should be the directory of this plugin.
// You can get that directory from a magic constant: https://www.php.net/manual/en/language.constants.magic.php
// That's where it'll look for the block.json file.
// Do npm run lint:php to see if there's anything else to add.
