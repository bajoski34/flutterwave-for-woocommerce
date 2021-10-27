<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://developer.flutterwave.com/docs
 * @since      0.1.0
 *
 * @package    Flutterwave
 * @subpackage Flutterwave/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      0.1.0
 * @package    Flutterwave
 * @subpackage Flutterwave/includes
 * @author     Flutterwave Developers <developers@flutterwavego.com>
 */
class Flutterwave {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    0.1.0
	 * @access   protected
	 * @var      Flutterwave_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    0.1.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    0.1.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    0.1.0
	 */
	public function __construct() {
		if ( defined( 'WC_FLUTTERWAVE_VERSION' ) ) {
			$this->version = WC_FLUTTERWAVE_VERSION;
		} else {
			$this->version = '0.1.0';
		}
		$this->plugin_name = 'flutterwave';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

		// new WP_Flutterwave_Settings_Rest_Route(new WC_Flutterwave_Gateway);


	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Fpf_Flutterwave_Loader. Orchestrates the hooks of the plugin.
	 * - Fpf_Flutterwave_i18n. Defines internationalization functionality.
	 * - Fpf_Flutterwave_Admin. Defines all hooks for the admin area.
	 * - Fpf_Flutterwave_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    0.1.0
	 * @access   private
	 */
	private function load_dependencies() {
		/**
		 * The class responsible for creating all endpoints to be consumed in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ). 'admin/API/class-create-settings-routes.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ). 'admin/API/class-create-plans.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ). 'admin/API/class-create-subaccounts.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ). 'admin/API/class-create-transactions.php';

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-flutterwave-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-flutterwave-i18n.php';



		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-flutterwave-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-flutterwave-public.php';

		$this->loader = new Flutterwave_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Fpf_Flutterwave_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    0.1.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Flutterwave_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
	}
	
	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    0.1.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Flutterwave_Admin( $this->get_plugin_name(), $this->get_version() );
		// $this->loader->add_action( 'admin_menu', $plugin_admin, 'add_plugin_admin_menu');
		// $this->loader->add_action('admin_menu', $plugin_admin, 'add_woocommerce_navigation_bar');
		$this->loader->add_action( 'admin_init', $plugin_admin, 'maybe_redirect_to_onboarding' );
		$this->loader->add_action( 'admin_menu', $plugin_admin, 'add_extension_register_page' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    0.1.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Flutterwave_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );
		// $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'payment_scripts' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    0.1.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     0.1.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     0.1.0
	 * @return    Flutterwave_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     0.1.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}

function load_initial_script($hook){
    wp_localize_script( 'flutterwave', 'flw', [
        'apiUrl' => home_url( '/wp-json' ),
        'nonce' => wp_create_nonce( 'wp_rest' ),
        'hook' => $hook,
        'plugin-name' => 'flutterwave'
    ]);
}

add_action( 'admin_enqueue_scripts', 'load_initial_script' );


