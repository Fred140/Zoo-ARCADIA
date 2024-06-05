<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'studi_zoo arcadia' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NG1bNATQb|E8pfYX(:-b|>tuW`86sJ0c7agmujQU[8~Nm;kyRkme<AS}$zUz1!/[' );
define( 'SECURE_AUTH_KEY',  '=%[/H=95@s-YhC[:P5P4drk^KVt7fUy-vuuM7b<qY*Vf-Tyn-O-y+N6^_p~q_ /b' );
define( 'LOGGED_IN_KEY',    'P?(O9Zj&aeFbqo*;}m$MkV[]):3uIPwlDyHbdY ?yB8({R/s4U&D5;A<6n7rS:Vl' );
define( 'NONCE_KEY',        'b%5UK/kA,[.1VjjE3B8Sd^,DLDon8aTn%fltN}% O>{6C7y_v:VQYQKhv?oq<=WI' );
define( 'AUTH_SALT',        '$>pEGGk@!wDS}cYE2xr*7rU+K@n+v0ZeR:e7~megLg6-)M#ONe^,v6qj+y2<UJ?b' );
define( 'SECURE_AUTH_SALT', '5vTNKpEK<(`k}X513Fb+x3uF)Hrrcqs1]5+3Asdy[0fF8jh][`(AS(vyKXYK0?r*' );
define( 'LOGGED_IN_SALT',   'yT-IaTiuYmk+<W3/q?(FJ?pl|$Q?dQ:MqK^.uwFqEerdIF`]Za@vFk8g,q3Z&eJ]' );
define( 'NONCE_SALT',       '4rlb[Y^+`-Z@z|_dC5SAenl,0EN%U<fl 8;q^F+beDEyO7Gy)gQPH3 3Ee/Ccl82' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
