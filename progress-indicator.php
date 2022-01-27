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

/**
 * Registers the block with the block.json file.
 */
function progress_indicator_register_block() {
	register_block_type_from_metadata( __DIR__ );
}
