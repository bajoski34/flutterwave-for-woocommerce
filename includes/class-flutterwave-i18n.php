<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://developer.flutterwave.com/docs
 * @since      0.1.0
 *
 * @package    Flutterwave
 * @subpackage Flutterwave/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      0.1.0
 * @package    Flutterwave
 * @subpackage Flutterwave/includes
 * @author     Flutterwave Developers <developers@flutterwavego.com>
 */

class Flutterwave_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    0.1.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'flutterwave',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

		// $this->init_flutterwave_woocommerce();
	}

}
