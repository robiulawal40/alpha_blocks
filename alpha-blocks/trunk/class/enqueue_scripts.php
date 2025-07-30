<?php

if ( ! class_exists( 'ALPHA_enqueue_scripts' ) ) :

	class ALPHA_enqueue_scripts {

		public $internalDir = 'gutenberg-extra/';
		/*
		 * Plugin constructor
		 */
		function __construct() {
			add_action( 'init', array( $this, 'register_scripts' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'alpha_external_scripts' ) );
		}

		function alpha_external_scripts() {

			// Hard Coded Admin CSS
				wp_enqueue_style(
					'admin-css',
					plugins_url( 'admin-assets/admin-dashboard.css', ALPHA_PLUGIN_FILE ),
					array(),
					filemtime( plugin_dir_path( ALPHA_PLUGIN_FILE ) . 'admin-assets/admin-dashboard.css' )
				);
				// Admin CSS with Tailwind
				wp_enqueue_style(
					'tailwind-admin-css',
					plugins_url( 'admin-assets/tailwind-admin-build.css', ALPHA_PLUGIN_FILE ),
					array(),
					filemtime( plugin_dir_path( ALPHA_PLUGIN_FILE ) . 'admin-assets/tailwind-admin-build.css' )
				);
		}

		public function register_scripts() {

			// All Block CSS from HTML
			wp_register_style(
				'alpha-block-tailwind-style',
				plugins_url( 'src/html/assets/style-frontend.css', ALPHA_PLUGIN_FILE ),
				array(),
				filemtime( plugin_dir_path( ALPHA_PLUGIN_FILE ) . 'src/html/assets/style-frontend.css' )
			);
			wp_register_script(
				'alpha-alpine-collapse',
				plugins_url( 'src/html/assets/collapse.js', ALPHA_PLUGIN_FILE ),
				array(),
				filemtime( plugin_dir_path( ALPHA_PLUGIN_FILE ) . 'src/html/assets/collapse.js' ),
				true
			);

			wp_register_script(
				'alpine-init',
				plugins_url( 'src/html/assets/init.js', ALPHA_PLUGIN_FILE ),
				array(),
				filemtime( plugin_dir_path( ALPHA_PLUGIN_FILE ) . 'src/html/assets/init.js' ),
				true
			);

			wp_register_script(
				'alpine',
				plugins_url( 'src/html/assets/alpine.js', ALPHA_PLUGIN_FILE ),
				array( 'alpha-alpine-collapse', 'alpine-init' ),
				filemtime( plugin_dir_path( ALPHA_PLUGIN_FILE ) . 'src/html/assets/alpine.js' ),
				true
			);
		}
	}

endif;
