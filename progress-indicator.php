<?php
/**
 * Plugin Name:       Progress Indicator Block
 * Plugin URI:        https://robstinson.co/progress-indicator
 * Description:       A block that lets you easily display a progress indicator on your WordPress posts or pages.
 * Version:           0.1.0
 * Requires at least: 5.6
 * Requires PHP:      7.2
 * Author:            Rob Stinson
 * Author URI:        https://robstinson.co
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       progress-indicator
 * Domain Path:       /languages
 */

add_action( 'init', 'progress_indicator_register_block' );

function progress_indicator_register_block() {
	register_block_type_from_metadata( __DIR__ . '/js/src' );
}

add_action( 'enqueue_block_editor_assets', 'progress_indicator_enqueue_js' );

function progress_indicator_enqueue_js() {
	wp_enqueue_script( 'progress-indicator-js', plugins_url( 'js/dist/index.js', __FILE__ ), [], '0.1.0', true ); 
}