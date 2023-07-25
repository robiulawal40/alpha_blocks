<?php
require '../../../wp-load.php';
global $alpb_error, $alpb_warning;

echo '<pre>';
	 print_r( $alpb_error );

	 do_action( 'woocommerce_order_status_changed', 22, 'pending', 'processing', wc_get_order( 22 ) );

echo '</pre>';

// add_action( 'wp', function(){

// echo "working";

// if( $_SERVER['NODE'] ):

// echo "Testing";

// $single_field =  new CCOP_Single_Field();

// var_dump( $single_field->get_field_setting() );

// print_r($alpb_error->get_error_message());
// print_r($alpb_warning->get_error_message());

// $end_points =  new CCOP_Woocommerce_Actions();
// echo "\n\n\n\n";
// echo __FILE__.".php \n";
// $end_points->prepare_response([]);
// echo "\n";
// endif;
// });
