<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
   
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">

            <nav id="site-navigation" class="main-navigation burger">
            <h3 class="site-title1"><a  href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h3>

                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="line l1"></span>
                    <span class="line l2"></span>
                    <span class="line l3"></span>
                </button>


                <ul class="menu">
                    <li class="menu_logo" ><a href="#story"><img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/header/logo_header.png'; ?>" alt="" /></a></li>
                    <li class="menu_title1"><a href="#story">Histoire</a></li>
                    <li class="menu_title2" ><a href="#characters">Personnages</a></li>
                    <li class="menu_title3"><a href="#place">Lieu</a></li>
                    <li class="menu_title4"><a href="#studio">Studio Koukaki</a></li>
                    <p>Studio Koukaki</p>
                </ul>
    </div>



    </nav><!-- #site-navigation -->
    </header><!-- #masthead -->