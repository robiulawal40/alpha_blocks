<?php
/**
 *
 * @wordpress-plugin
 * Plugin Name:       Alpha Blocks
 * Plugin URI:        https://github.com/robiulawal40/
 * Description:       This plugin will make basecamp project based on woocommerce orders.
 * Version:           1.0.0
 * Author:            Robiul Awal
 * Author URI:        https://github.com/robiulawal40/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       alpb
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( !defined( 'WPINC' ) ) {
    die;
}

if ( !class_exists( 'Alpha_Blocks_Final' ) ):

    final class Alpha_Blocks_Final {

        /*
         * @var mixed
         */
        private static $instance;

        /*
         * instance functions
         */
        public static function instance() {
            if ( is_null( self::$instance ) ) {
                self::$instance = new Alpha_Blocks_Final;
            }
            return self::$instance;
        }

        /*
         * Cloning is forbidden.
         */
        public function __clone() {
            _doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'nvce' ), '1.0' );
        }

        /*
         * Unserializing instances of this class is forbidden.
         */
        public function __wakeup() {
            _doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'nvce' ), '1.0' );
        }

        /*
         * Plugin constructor
         */
        function __construct() {
            $this->text_domain = "ALPB";
            $this->set_constants();
            $this->includes();
        }

        /*
         * Setting the plugin  constant
         */
        public function set_constants() {

            if ( !defined( 'ALPB_VERSION' ) ) {
                define( 'ALPB_VERSION', '1.0.0' );
            }
            if ( !defined( 'ALPB_DOMAIN' ) ) {
                define( 'ALPB_DOMAIN', 'alpb' );
            }
            if ( !defined( 'ALPB_NAME' ) ) {
                define( 'ALPB_NAME', 'Wc orders to Basecamp' );
            }
            if ( !defined( 'ALPBDIR' ) ) {
                define( 'ALPBDIR', plugin_dir_path( __FILE__ ) );
            }
            if ( !defined( 'ALPBBASENAME' ) ) {
                define( 'ALPBBASENAME', plugin_basename( __FILE__ ) );
            }
            if ( !defined( 'ALPBURL' ) ) {
                define( 'ALPBURL', plugin_dir_url( __FILE__ ) );
            }
            if ( !defined( 'ALPBDEV' ) ) {
                define( 'ALPBDEV', true );
            }
            if ( !defined( 'ALPB_IMAGES' ) ) {
                define( 'ALPB_IMAGES', '_ALPB_att' );
            }

        }

        /*
         * Plugin include files
         */
        public function includes() {

            require_once ALPBDIR . "functions.php";

            spl_autoload_register(function( $class_name ) {

                if ( false !== strpos( $class_name, $this->text_domain ) ) {
                
                $classes_dir = realpath( plugin_dir_path( __FILE__ ) ) . DIRECTORY_SEPARATOR . 'classes' . DIRECTORY_SEPARATOR;
                   
                $class_file = strtolower( str_replace(  $this->text_domain."_", "", $class_name) ) . '.php';
                  require_once $classes_dir . $class_file;
                }

              });
              require_once ALPBDIR . "init.php";
        }


    }
endif;

function ALPB_init() {
    return Alpha_Blocks_Final::instance();
}
add_action( 'plugins_loaded', 'ALPB_init' );