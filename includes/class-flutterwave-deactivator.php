<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://developer.flutterwave.com/docs
 * @since      0.1.0
 *
 * @package    Flutterwave
 * @subpackage Flutterwave/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      0.1.0
 * @package    Flutterwave
 * @subpackage Flutterwave/includes
 * @author     Flutterwave Developers <developers@flutterwavego.com>
 */
class Flutterwave_Deactivator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    0.1.0
	 */
	public static function deactivate() {

		flush_rewrite_rules();

	}

}
