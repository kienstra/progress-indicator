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
	register_block_type_from_metadata( __DIR__ . '/js/src', [
		'render_callback' => function ( $attributes ) { 
			$steps = $attributes['numberOfSteps'];
			$current_step = $attributes['currentStep'];
			ob_start();
			?>
			<div class="gcb-progress-indicator">

			<!-- Step Lines  -->
			<div class="gcb-progress-indicator__lines">
				<?php 
				for ( $i = 1; $i < $steps; $i++ ):
					$line_classes = $i < $current_step ? 'gcb-progress-indicator__line gcb-progress-indicator__complete-line' : 'gcb-progress-indicator__line';
					?>
					<div class="<?php echo esc_attr( $line_classes ); ?>"></div>
				<?php endfor; ?>
			</div>

			<!-- Step Numbers -->
			<?php for ($i = 1; $i <= $steps; $i++):
				$step_classes = 'gcb-progress-indicator__step';
				if ($i === $current_step) {
					$step_classes .= 
						' gcb-progress-indicator__current-step';
				} elseif ($i < $current_step) {
					$step_classes .= 
						' gcb-progress-indicator__complete-step';
				}
				?>

				<div class="<?php echo esc_attr($step_classes); ?>">
					<?php if ($i < $current_step) {
						echo '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-green-50" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>';
					} else {
						echo esc_html($i);
					} ?>
				</div>

			<?php endfor; ?>
			</div>

			<?php
			return ob_get_clean();
		}
	] );
}
