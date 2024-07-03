<?php
/**
 * Setup timber
 */

use Timber\Site;
use Timber\Timber;

/**
 * Class StarterSite
 */
class StarterSite extends Site
{
	/**
	 * {@inheritDoc}
	 */
	public function __construct()
	{
		add_action('wp_footer', [$this, 'global_styles']);
		add_action('wp_enqueue_scripts', [$this, 'mytheme_enqueue_scripts']);
		add_filter('timber/loader/loader', [$this, 'storybook_loader']);
		add_action('after_setup_theme', [$this, 'theme_supports']);
		add_filter('timber/context', [$this, 'add_to_context']);
		parent::__construct();
	}

	public function storybook_loader($loader)
	{
		$theme_root = get_stylesheet_directory();
		$loader->addPath($theme_root . '/components/atoms', 'atoms');
		$loader->addPath($theme_root . '/components/molecule', 'molecule');
		$loader->addPath($theme_root . '/components/organisms', 'organisms');
		$loader->addPath($theme_root . '/components/templates', 'templates');
		return $loader;
	}

	public function global_styles()
	{
		wp_enqueue_style('generic_styles', get_stylesheet_directory_uri() . '/dist/components/style.scss.css');
		wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/node_modules/bootstrap/dist/css/bootstrap.min.css');
	}

	function mytheme_enqueue_scripts()
	{
		wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
	}

}
