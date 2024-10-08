<?php
if( ! class_exists('ALPB_Woocommerce_Actions') ):
class ALPB_Woocommerce_Actions {
    public function __construct() {

        add_action( 'woocommerce_payment_complete', array( $this, 'woocommerce_payment_complete' ), 11, 1 );
        add_action( 'woocommerce_order_status_completed', array( $this, 'woocommerce_payment_complete' ), 11, 1 );

    }
        /**
     * @param $order_id
     */
    public function woocommerce_payment_complete( $order_id ) {
        $order_action = new ALPB_Order_Actions($order_id);
        $response = $order_action->run_for_basecamp();
        if( ! $response ){
            create_schedule_event($order_id);
        }
    }
}

new ALPB_Woocommerce_Actions();
endif;
