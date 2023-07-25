<?php 

if( !class_exists('ALPB_enqueue_scripts') ):

    class ALPB_enqueue_scripts{
        /*
         * Plugin constructor
         */
        function __construct() {
            // add_action( 'init', array( $this, 'register_scripts' ) );
            // add_action( 'wp_enqueue_scripts', array( $this, 'load_scripts' ) );
            add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );

        }

        public function register_scripts() {

        }

        /**
         * @return null
         */
        public function load_scripts() {

            global $post, $wpdb;

            if ( !has_shortcode( $post->post_content, 'wotb' ) ) {
                return;
            }
            wp_enqueue_style( 'wotb-style', ALPBURL . "assets/style.css", array(), ALPB_VERSION );
            wp_register_style( 'wotb-style-1', ALPBURL . "assets/style-1.css", array(), ALPB_VERSION );
            wp_register_style( 'wotb-style-2', ALPBURL . "assets/style-2.css", array(), ALPB_VERSION );
            wp_enqueue_script( 'images-loaded', ALPBURL . "assets/imagesloaded.pkgd.min.js", array(), ALPB_VERSION, true );
            wp_enqueue_script( 'iso', ALPBURL . "assets/isotope.pkgd.min.js", array( 'images-loaded' ), ALPB_VERSION, true );
            wp_enqueue_script( 'infinite-scroll', ALPBURL . "assets/infinite-scroll.pkgd.min.js", array(), ALPB_VERSION, true );
            wp_enqueue_script( 'wotb-scripts', ALPBURL . "assets/scripts.js", array( 'jquery', 'iso', 'infinite-scroll' ), ALPB_VERSION, true );

        }
         
        /**
         * @param $hook
         */
        public function admin_scripts( $hook ) {
            global $post_type, $post;

            // if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
            //     if ( 'infinite_gallery' === $post_type ) {
            //         if ( !did_action( 'wp_enqueue_media' ) ) {
            //             wp_enqueue_media();
            //         }
            //         wp_enqueue_style( 'wotb-admin-style', ALPBURL . "assets/style.admin.css", array(), ALPB_VERSION );

            //         wp_enqueue_style( 'wp-color-picker' );

            //         wp_enqueue_script( 'wotb-admin-scripts', ALPBURL . "assets/scripts.admin.js", array( 'jquery', 'thickbox', 'wp-color-picker' ), ALPB_VERSION, true );
            //         wp_enqueue_style( 'thickbox' );
            //         wp_localize_script(
            //             'wotb-admin-scripts',
            //             'wotb',
            //             array(
            //                 'ajax_url' => admin_url( 'admin-ajax.php' ),
            //                 'nonce'    => wp_create_nonce( 'wotb_attachment_to_gallery' ),
            //                 'post_id'  => $post->ID,
            //             )
            //         );

            //     }
            // }
            // echo "<pre>";
            //      print_r($hook);
            // echo "</pre>";
            // exit;

            if ( "toplevel_page_wotb" == $hook ) {
                // wp_enqueue_style( 'wp-color-picker' );
                wp_enqueue_script( 'admin-setting-scripts', plugins_url( '/dist/index.js', dirname( __FILE__ ) ), array( 'wp-api', 'wp-i18n', 'wp-components', 'wp-element' ), null, true );

                wp_enqueue_style( 'wotb-admin-style',plugins_url( '/dist/style-index.css', dirname( __FILE__ ) ), array('wp-components'), ALPB_VERSION );

                    wp_localize_script(
                        'admin-setting-scripts',
                        'wotb',
                        array(
                            'url' => home_url("/wp-json/{$this->api_namespace}"),
                            'nonce'    => wp_create_nonce( 'wp_rest' ),
                        )
                    );
            }

            if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
                if ( 'shop_order' === $post_type ) {
                   
                wp_enqueue_script( 'admin-setting-scripts-meta-box', plugins_url( '/dist/meta-box.js', dirname( __FILE__ ) ), array( 'wp-api', 'wp-i18n', 'wp-components', 'wp-element' ), null, true );

                wp_enqueue_style( 'wotb-admin-style',plugins_url( '/dist/style-meta-box.css', dirname( __FILE__ ) ), array('wp-components'), ALPB_VERSION );

                wp_localize_script(
                    'admin-setting-scripts-meta-box',
                    'wotb',
                    array(
                        'url' => home_url("/wp-json/{$this->api_namespace}"),
                        'nonce'    => wp_create_nonce( 'wp_rest' ),
                        'order_id'    => $post->ID,
                    )
                );
                }
            }
        }



    }

endif;