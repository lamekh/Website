/* jshint sub:true */
jQuery( document ).ready( function( $ ) {
    var scrolled = false;
    var slick_slider = '.module-slider';
    if ( $( slick_slider ).length ) {
        var scroll_element = '.slick-list.draggable';
        // Only show the slider once initialised (must be placed before the cactual initialisation)
        $( slick_slider ).on( 'init', function( event, slick, currentSlide ) {
            $( slick_slider ).show();
        });
        // Initialise slick/carousel
        $( slick_slider ).slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 9,
            slidesToScroll: 3,
            lazyLoad: 'ondemand',
            nextArrow: '<div class="module-slider-arrow left"><i class="fa fa-caret-right" aria-hidden="true"></i></div>',
            prevArrow: '<div class="module-slider-arrow right"><i class="fa fa-caret-left" aria-hidden="true"></i></div>',
            responsive: [
                { breakpoint: 1280, settings: { slidesToShow: 7 } },
                { breakpoint: 1000, settings: { slidesToShow: 5 } },
                { breakpoint: 740,  settings: { slidesToShow: 3 } },
                { breakpoint: 600,  settings: { slidesToShow: 2 } }
            ]
        });
        // Scrolling not working properly with slick - must move the slide to the start for it to work
        $( scroll_element ).on( 'scroll', function() {
            if ( $( slick_slider ).slick( 'slickCurrentSlide' ) !== 0 ) {
                $( slick_slider ).slick( "slickGoTo", 0 );
            }
        });
        // FF not allowing scroll styling - hide it
        if ( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || $('.module-slide').length == 9 ) {
            $( scroll_element ).css( 'overflow-x', 'hidden' );
        }
        // Move to the correct scroll position
        $( '.fa-caret-right, .fa-caret-left' ).on( 'click', function() {
            // Scrolled
            if ( $( scroll_element ).scrollLeft() !== 0 ) {
                // Calculate position
                var scroll_position = parseInt( $( scroll_element ).scrollLeft() / $( '.module-slide' ).width() );
                $( slick_slider ).slick( "slickGoTo", scroll_position );
                $( slick_slider ).slick( "slickNext" );
                $( scroll_element ).scrollLeft( 0 );
            }
        });
    }
    // Show more button
    if ( $( '.show-more' ).length ) {
        $( '.show-more' ).on( 'click', function() {
            $( '.hidden-module-topics' ).toggleClass( 'show' );
            $( '.show-more i' ).toggleClass( 'fa-caret-down fa-caret-up' );
            if ( $( '.show-more' ).html().includes( 'more' ) ) {
                $( '.show-more' ).html( $( '.show-more' ).html().replace( 'more', 'less' ) );
            } else {
                $( '.show-more' ).html( $( '.show-more' ).html().replace( 'less', 'more' ) );
            }
        });
    }
    // Display the play button overlay
    if ( $( '.module-slide-image#play' ).length ) {
        $( '.module-slide-image#play' ).on( 'mouseover', function() {
            $( this ).find( '.module-slide-overlay' ).show();
        }).on( 'mouseout', function() {
            $( this ).find( '.module-slide-overlay' ).hide();
        });
    }
});