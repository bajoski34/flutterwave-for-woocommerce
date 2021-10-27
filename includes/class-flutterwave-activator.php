<?php

/**
 * Fired during plugin activation
 *
 * @link       https://developer.flutterwave.com/docs
 * @since      0.1.0
 *
 * @package    Flutterwave
 * @subpackage Flutterwave/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      0.1.0
 * @package    Flutterwave
 * @subpackage Flutterwave/includes
 * @author     Flutterwave Developers <developers@flutterwavego.com>
 */
class Flutterwave_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		if (
			// Only redirect to onboarding when activated on its own. Either with a link...
			isset( $_GET['action'] ) && 'activate' === $_GET['action'] // phpcs:ignore WordPress.Security.NonceVerification
			// ...or with a bulk action.
			|| isset( $_POST['checked'] ) && is_array( $_POST['checked'] ) && 1 === count( $_POST['checked'] ) // phpcs:ignore WordPress.Security.NonceVerification
		) {
			update_option( 'wcflutterwave_should_redirect_to_onboarding', true );
		}
		flush_rewrite_rules();
	}

}
