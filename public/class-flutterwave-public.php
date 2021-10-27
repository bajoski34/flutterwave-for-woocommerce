<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://developer.flutterwave.com/docs
 * @since      0.1.0
 *
 * @package    Flutterwave
 * @subpackage Flutterwave/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Flutterwave
 * @subpackage Flutterwave/public
 * @author     Flutterwave Developers <developers@flutterwavego.com>
 */
class Flutterwave_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    0.1.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    0.1.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    0.1.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    0.1.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Fpf_Flutterwave_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Fpf_Flutterwave_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/flutterwave-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    0.1.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Fpf_Flutterwave_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Fpf_Flutterwave_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/flutterwave.js', array( 'jquery' ), $this->version, true );
		wp_enqueue_script( $this->plugin_name."pay", plugin_dir_url( __FILE__ ) . 'js/v3.js', array( 'jquery' ), "0.1.1", true );

	}

	public function payment_scripts()
	{

	}

}
