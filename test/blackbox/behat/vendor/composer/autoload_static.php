<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit76bf9e16441f39383ce8e678f0324b00
{
    public static $files = array (
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Symfony\\Component\\Yaml\\' => 23,
            'Symfony\\Component\\Translation\\' => 30,
            'Symfony\\Component\\Process\\' => 26,
            'Symfony\\Component\\Finder\\' => 25,
            'Symfony\\Component\\Filesystem\\' => 29,
            'Symfony\\Component\\EventDispatcher\\' => 34,
            'Symfony\\Component\\DomCrawler\\' => 29,
            'Symfony\\Component\\DependencyInjection\\' => 38,
            'Symfony\\Component\\Debug\\' => 24,
            'Symfony\\Component\\CssSelector\\' => 30,
            'Symfony\\Component\\Console\\' => 26,
            'Symfony\\Component\\Config\\' => 25,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
        ),
        'F' => 
        array (
            'Facebook\\WebDriver\\' => 19,
        ),
        'B' => 
        array (
            'Behat\\Mink\\Driver\\' => 18,
            'Behat\\Mink\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Symfony\\Component\\Yaml\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/yaml',
        ),
        'Symfony\\Component\\Translation\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/translation',
        ),
        'Symfony\\Component\\Process\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/process',
        ),
        'Symfony\\Component\\Finder\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/finder',
        ),
        'Symfony\\Component\\Filesystem\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/filesystem',
        ),
        'Symfony\\Component\\EventDispatcher\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/event-dispatcher',
        ),
        'Symfony\\Component\\DomCrawler\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/dom-crawler',
        ),
        'Symfony\\Component\\DependencyInjection\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/dependency-injection',
        ),
        'Symfony\\Component\\Debug\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/debug',
        ),
        'Symfony\\Component\\CssSelector\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/css-selector',
        ),
        'Symfony\\Component\\Console\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/console',
        ),
        'Symfony\\Component\\Config\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/config',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'Facebook\\WebDriver\\' => 
        array (
            0 => __DIR__ . '/..' . '/facebook/webdriver/lib',
        ),
        'Behat\\Mink\\Driver\\' => 
        array (
            0 => __DIR__ . '/..' . '/behat/mink-selenium2-driver/src',
            1 => __DIR__ . '/..' . '/behat/mink-selenium-driver/src',
        ),
        'Behat\\Mink\\' => 
        array (
            0 => __DIR__ . '/..' . '/behat/mink/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'W' => 
        array (
            'WebDriver' => 
            array (
                0 => __DIR__ . '/..' . '/instaclick/php-webdriver/lib',
            ),
        ),
        'S' => 
        array (
            'Selenium' => 
            array (
                0 => __DIR__ . '/..' . '/alexandresalome/php-selenium/src',
            ),
        ),
        'B' => 
        array (
            'Behat\\Gherkin' => 
            array (
                0 => __DIR__ . '/..' . '/behat/gherkin/src',
            ),
            'Behat\\Behat' => 
            array (
                0 => __DIR__ . '/..' . '/behat/behat/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit76bf9e16441f39383ce8e678f0324b00::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit76bf9e16441f39383ce8e678f0324b00::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit76bf9e16441f39383ce8e678f0324b00::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
