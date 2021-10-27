<?php
/**
 * This file will create Custom Rest API End Points.
 */
class WP_Flutterwave_Settings_Rest_Route extends WP_REST_Controller{

    /**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'flutterwave-for-woocommerce/v1';

    /**
	 * Endpoint path.
	 *
	 * @var string
	 */
	protected $rest_base = 'payments/settings';

    public function __construct(WC_Flutterwave_Gateway $wcflutterwave_gateway) 
	{
		$this->wcflutterwave_gateway = $wcflutterwave_gateway;
        add_action( 'rest_api_init', [ $this, 'create_rest_routes' ] );
    }

    public function create_rest_routes() 
	{
		$flutterwave_form_fields = $this->wcflutterwave_gateway->init_form_fields();

        register_rest_route( $this->namespace, "/". $this->rest_base, [

            'methods' => WP_REST_Server::READABLE,
            'callback' => [ $this, 'get_settings' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
            
        ] );

        register_rest_route( $this->namespace, "/". $this->rest_base, [

            'methods' => WP_REST_Server::EDITABLE,
            'callback' => [ $this, 'save_settings' ],
            'permission_callback' => [ $this, 'save_settings_permission' ]

        ] );
    }

	/**
	 * Retrieve settings.
	 *
	 * @return WP_REST_Response
	 */
    public function get_settings(): WP_REST_Response {

        return new WP_REST_Response(

            [
                'is_flutterwave_enabled'   => 'yes' === $this->wcflutterwave_gateway->get_option('enabled'),
                'test_public_key'          => $this->wcflutterwave_gateway->get_option( 'test_public_key' ),
                'test_secret_key'          => $this->wcflutterwave_gateway->get_option( 'test_secret_key' ),
                'live_public_key'          => $this->wcflutterwave_gateway->get_option( 'live_public_key' ),
		 		'live_secret_key'          => $this->wcflutterwave_gateway->get_option( 'live_secret_key' ),
                'autocomplete_order'       => 'yes' === $this->wcflutterwave_gateway->get_option('autocomplete_order'),
        		'go_live'                  => 'yes' === $this->wcflutterwave_gateway->get_option( 'go_live' ),
                'disable_logging'          => 'yes' === $this->wcflutterwave_gateway->get_option('logging_option'),
                'payment_options'          => $this->wcflutterwave_gateway->get_option( 'payment_options' ),
		 		'payment_style'            => $this->wcflutterwave_gateway->get_option( 'payment_style' ),
				'disable_barter'           => 'yes' === $this->wcflutterwave_gateway->get_option( 'barter' ),
                'secret_hash'              => $this->wcflutterwave_gateway->get_option( 'secret_hash'),
				'description'              => $this->wcflutterwave_gateway->get_option( 'description' ),
            ]
        );

    }

    public function get_settings_permission() {
        return true;
    }

    public function save_settings( WP_REST_Request $request ) {
		$this->update_is_wcflutterwave_enabled( $request );
		$this->update_test_public_key( $request );
		$this->update_test_secret_key( $request );
		$this->update_live_public_key( $request );
		$this->update_live_secret_key( $request );
		$this->update_autocomplete_order( $request );
		$this->update_go_live( $request );
		$this->update_disable_logging( $request );
		$this->update_payment_options( $request );
		$this->update_payment_style( $request );
		$this->update_disable_barter( $request );
		$this->update_secret_hash( $request );

		return new WP_REST_Response( [], 200 );
    }

    public function save_settings_permission() {
        // return current_user_can( 'manage_woocommerce' );
        return current_user_can( 'manage_woocommerce' );
    }
	

    /**
	 * Updates Flutterwave enabled status.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_is_wcflutterwave_enabled( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'is_wcflutterwave_enabled' ) ) {
			return;
		}

		$is_wcflutterwave_enabled = $request->get_param( 'is_wcflutterwave_enabled' );

		if ( $is_wcflutterwave_enabled ) {
			$this->wcflutterwave_gateway->update_option('enabled', 'yes');
		} else {
			$this->wcflutterwave_gateway->update_option('enabled', 'no');
		}
	}


	/**
	 * Updates Update secret hash.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_secret_hash( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'secret_hash' ) ) {
			return;
		}

		$secret_hash = $request->get_param( 'secret_hash' );

		if ( $secret_hash || $secret_hash == '' ) {
			$this->wcflutterwave_gateway->update_option('secret_hash', $secret_hash);
		}
	}

    /**
	 * Updates Test Public Key.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_test_public_key( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'test_public_key' ) ) {
			return;
		}

		$test_public_key = $request->get_param( 'test_public_key' );

		if ( $test_public_key ) {
			$this->wcflutterwave_gateway->update_option('test_public_key', $test_public_key);
		}
	}

    /**
	 * Updates Test Secret Key.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_test_secret_key( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'test_secret_key' ) ) {
			return;
		}

		$test_secret_key = $request->get_param( 'test_secret_key' );

		if ( $test_secret_key ) {
			$this->wcflutterwave_gateway->update_option('test_secret_key', $test_secret_key);
		}
	}

    /**
	 * Updates Live Secret Key.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_live_secret_key( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'live_secret_key' ) ) {
			return;
		}

		$live_secret_key = $request->get_param( 'live_secret_key' );

		if ( $live_secret_key ) {
			$this->wcflutterwave_gateway->update_option('live_secret_key', $live_secret_key);
		}
	}

    /**
	 * Updates Live Public Key.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_live_public_key( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'live_public_key' ) ) {
			return;
		}

		$live_public_key = $request->get_param( 'live_public_key' );

		if ( $live_public_key ) {
			$this->wcflutterwave_gateway->update_option('live_public_key', $live_public_key);
		}
	}

    /**
	 * Updates AutoComplete order.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_autocomplete_order( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'autocomplete_order' ) ) {
			return;
		}

		$autocomplete_order = $request->get_param( 'autocomplete_order' );

		if ( $autocomplete_order ) {
			$this->wcflutterwave_gateway->update_option('autocomplete_order', 'yes');
		}else{
			$this->wcflutterwave_gateway->update_option('autocomplete_order', 'no');
        }
	}

    /**
	 * Updates Go Live.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_go_live( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'go_live' ) ) {
			return;
		}

		$go_live = $request->get_param( 'go_live' );

		if ( $go_live ) {
			$this->wcflutterwave_gateway->update_option('go_live', 'yes');
		}else{
			$this->wcflutterwave_gateway->update_option('go_live', 'no');
        }
	}

    /**
	 * Updates Disable logging.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_disable_logging( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'disable_logging' ) ) {
			return;
		}

		$disable_logging = $request->get_param( 'disable_logging' );

		if ( $disable_logging ) {
			$this->wcflutterwave_gateway->update_option('logging_option', 'yes');
		}else{
			$this->wcflutterwave_gateway->update_option('logging_option', 'no');
        }
	}

    /**
	 * Updates Payment Options.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_payment_options( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'payment_options' ) ) {
			return;
		}

		$payment_options = $request->get_param( 'payment_options' );

		if ( $payment_options ) {
			$this->wcflutterwave_gateway->update_option('payment_options', $payment_options);
		}
	}

    /**
	 * Updates Payment Style.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_payment_style( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'payment_style' ) ) {
			return;
		}

		$payment_style = $request->get_param( 'payment_style' );

		if ( $payment_style ) {
			$this->wcflutterwave_gateway->update_option('payment_style', $payment_style);
		}
	}

    /**
	 * Updates Disable Barter.
	 *
	 * @param WP_REST_Request $request Request object.
	 */
	private function update_disable_barter( WP_REST_Request $request ) {
		if ( ! $request->has_param( 'disable_barter' ) ) {
			return;
		}

		$disable_barter = $request->get_param( 'disable_barter' );

		if ( $disable_barter ) {
			$this->wcflutterwave_gateway->update_option('barter', 'yes');
		}else{
			$this->wcflutterwave_gateway->update_option('barter', 'no');
        }
	}
}

// new WP_Flutterwave_Settings_Rest_Route(new WC_Flutterwave_Gateway);