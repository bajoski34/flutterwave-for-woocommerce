<?php
/**
 * This file will create Custom Rest API End Points.
 */
class WP_Flutterwave_Plan_Rest_Route extends WP_REST_Controller{

    /**
	 * payment base_url.
	 *
	 * @var string
	 */
    protected $flw_base_url = 'https://api.flutterwave.com/v3/';

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
	protected $rest_base = 'payments/plan';

    public function __construct(WC_Flutterwave_Gateway $wcflutterwave_gateway) {
		$this->wcflutterwave_gateway = $wcflutterwave_gateway;
        add_action( 'rest_api_init', [ $this, 'create_rest_routes' ] );
    }

    public function create_rest_routes() {

        register_rest_route( $this->namespace, "/". $this->rest_base, [

            'methods' => WP_REST_Server::READABLE,
            'callback' => [ $this, 'get_plans' ],
            'permission_callback' => [ $this, 'get_plans_permission' ]
            
        ] );

    }

	/**
	 * Retrieve settings.
	 *
	 * @return WP_REST_Response
	 */
    public function get_plans(): WP_REST_Response {

        $token = $this->wcflutterwave_gateway->get_option( 'test_secret_key' );

        if('yes' === $this->wcflutterwave_gateway->get_option( 'go_live' ))
        {
            $token = $this->wcflutterwave_gateway->get_option( 'live_secret_key' );
        }

        $response = wp_remote_get($this->flw_base_url."payment-plans", array(
            'headers' => array(
                'Content-Type' => 'application/json',
                'Authorization' => $token
              )
         ) );

        return new WP_REST_Response( json_decode($response['body']) );

    }

    public function get_plans_permission() {
        return true;
    }
}

