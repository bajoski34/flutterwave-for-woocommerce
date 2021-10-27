<?php
use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;
final class WC_Gateway_Flutterwave_Blocks_Support extends AbstractPaymentMethodType
{
    /**
	 * Name of the payment method.
	 *
	 * @var string
	 */
	protected $name = 'flutterwave';

    /**
	 * Initializes the payment method type.
	 */
	public function initialize() {
		$this->settings = get_option( 'woocommerce_flutterwave_settings', [] );

		// add_action(
		// 	'woocommerce_blocks_enqueue_checkout_block_scripts_before',
		// 	function() {
		// 		add_filter( 'woocommerce_saved_payment_methods_list', array( $this, 'add_flutterwave_saved_payment_methods' ), 10, 1 );
		// 	}
		// );
		// add_action(
		// 	'woocommerce_blocks_enqueue_checkout_block_scripts_after',
		// 	function () {
		// 		remove_filter( 'woocommerce_saved_payment_methods_list', array( $this, 'add_flutterwave_saved_payment_methods' ) );
		// 	}
		// );
	}

    /**
	 * Returns if this payment method should be active. If false, the scripts will not be enqueued.
	 *
	 * @return boolean
	 */
	public function is_active() {
		$payment_gateways_class = WC()->payment_gateways();
		$payment_gateways       = $payment_gateways_class->payment_gateways();

		return $payment_gateways['flutterwave']->is_available();
	}

    /**
	 * Returns an array of scripts/handles to be registered for this payment method.
	 *
	 * @return array
	 */
	public function get_payment_method_script_handles() {
		$asset_path   = WC_FLUTTERWAVE_DIR_PATH . '/build/block.asset.php';
		$version      = WC_FLUTTERWAVE_VERSION;
		$dependencies = [];
		if ( file_exists( $asset_path ) ) {
			$asset        = require $asset_path;
			$version      = is_array( $asset ) && isset( $asset['version'] )
				? $asset['version']
				: $version;
			$dependencies = is_array( $asset ) && isset( $asset['dependencies'] )
				? $asset['dependencies']
				: $dependencies;
		}
		wp_register_script(
			'wc-flutterwave-blocks-integration',
			WC_FLUTTERWAVE_URL . '/build/block.js',
			$dependencies,
			$version,
			true
		);
		wp_set_script_translations(
			'wc-flutterwave-blocks-integration',
			'flutterwave'
		);
		return [ 'wc-flutterwave-blocks-integration' ];
	}

    /**
	 * Returns an array of supported features.
	 *
	 * @return string[]
	 */
	public function get_supported_features() {
		$payment_gateways = WC()->payment_gateways->payment_gateways();
		return $payment_gateways['flutterwave']->supports;
	}
}
