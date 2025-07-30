<?php
/**
 *
 * @wordpress-plugin
 * Plugin Name:       Alpha Blocks
 * Plugin URI:        https://github.com/robiulawal40
 * Description:       Alpha Blocks adds a variety of customizable Gutenberg blocks to your WordPress site, helping you create modern, responsive content layouts    easily and efficiently—no coding required.
 * Version:           1.0.1
 * Author:            Robiul Awal
 * Author URI:        https://www.linkedin.com/company/wp-codezen
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       alpha
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! defined( 'ALPHA_PLUGIN_FILE' ) ) {
	define( 'ALPHA_PLUGIN_FILE', __FILE__ );
}

// Include the main Alpha_Blocks_Final class.
if ( ! class_exists( 'Alpha_Blocks_Final', false ) ) {
	include_once dirname( ALPHA_PLUGIN_FILE ) . '/includes/class-alpha-blocks.php';
}

/**
 * Initialization of the plugin.
 * Gutenberg is required
 *
 * @Gutenberg
 *
 * @return object
 */
function Alpha_init() {
	return Alpha_Blocks_Final::instance();
}

$GLOBALS['alpha_blocks'] = Alpha_init();

new ALPHA_i18n();
new ALPHA_enqueue_scripts();


// function alpha_external_scripts() {

// wp_enqueue_style(
// 'admin-css',
// plugins_url( 'build/admin-dashboard.css', __FILE__ ),
// array(),
// filemtime( plugin_dir_path( __FILE__ ) . 'build/admin-dashboard.css' )
// );
// wp_enqueue_style(
// 'tailwind-admin-css',
// plugins_url( 'src/tailwind-admin-build.css', __FILE__ ),
// array(),
// filemtime( plugin_dir_path( __FILE__ ) . 'src/tailwind-admin-build.css' )
// );
// wp_enqueue_style(
// 'tailwind-frontend-css',
// plugins_url( 'src/tailwind-frontend-build.css', __FILE__ ),
// array(),
// filemtime( plugin_dir_path( __FILE__ ) . 'src/tailwind-frontend-build.css' )
// );
// }
// add_action( 'enqueue_block_editor_assets', 'alpha_external_scripts' );

// function alpha_external_frontend_scripts() {

// wp_enqueue_style(
// 'tailwind-frontend-css',
// plugins_url( 'src/tailwind-frontend-build.css', __FILE__ ),
// array(),
// filemtime( plugin_dir_path( __FILE__ ) . 'src/tailwind-frontend-build.css' )
// );
// }

// add_action( 'enqueue_block_assets', 'alpha_external_frontend_scripts' );


// function alpha_register_block_assets() {
// Enqueue block-specific assets only in editor
// wp_register_style(
// 'alpha-block-tailwind-style',
// plugins_url( '/gutenberg-extra/assets/style-frontend.css', __FILE__ ),
// array(),
// filemtime( plugin_dir_path( __FILE__ ) . '/gutenberg-extra/assets/style-frontend.css' )
// );
// wp_register_script(
// 'alpha-alpine-collapse',
// plugins_url( '/gutenberg-extra/assets/collapse.js', __FILE__ ),
// array(),
// filemtime( plugin_dir_path( __FILE__ ) . '/gutenberg-extra/assets/collapse.js' ),
// true
// );

// wp_register_script(
// 'alpine-init',
// plugins_url( '/gutenberg-extra/assets/init.js', __FILE__ ),
// array(),
// filemtime( plugin_dir_path( __FILE__ ) . '/gutenberg-extra/assets/init.js' ),
// true
// );

// wp_register_script(
// 'alpine',
// plugins_url( '/gutenberg-extra/assets/alpine.js', __FILE__ ),
// array( 'alpha-alpine-collapse', 'alpine-init' ),
// filemtime( plugin_dir_path( __FILE__ ) . '/gutenberg-extra/assets/alpine.js' ),
// true
// );
// }
// add_action( 'init', 'alpha_register_block_assets' );

function guten_extra_blocks_register_blocks() {
	// register_block_type( __DIR__ . '/build/my-fantastic-block' );
	register_block_type( __DIR__ . '/build/accordion' );
	register_block_type( __DIR__ . '/build/accordion-item' );
	register_block_type( __DIR__ . '/build/hero' );
}
	add_action( 'init', 'guten_extra_blocks_register_blocks' );
