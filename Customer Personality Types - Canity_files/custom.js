/* jshint sub:true */
// Location of the controller script
var CONTROLLER_LIB_PATH = '/wp-content/themes/Avada-child';
// Mobile window width size
var MOBILE_WINDOW_WIDTH = 800;
// Upload dir (CDN)
var UPLOAD_DIR = 'https://1bqngz45g73v42ldj2vx5syi-wpengine.netdna-ssl.com/wp-content/uploads';
// Idle time
var idle_time = 0;
// Maximum length of checkout fields based on: http://www.authorize.net/support/CIM_XML_guide.pdf
var wc_checkout_fields_max_length = {
    'billing_first_name': 50,
    'billing_last_name' : 50,
    'billing_company'   : 50,
    'billing_email'     : 255,
    'billing_phone'     : 25,
    'billing_address_1' : 60,
    'billing_address_2' : 60,
    'billing_city'      : 40,
    'billing_state'     : 40,
    'billing_postcode'  : 20,
    'billing_country'   : 60
};
// Minimum number of digits on the phone number
var auth_net_phone_min_length = 6;
// Set default active list of episodes tab
var tab_maps = {
    '20087': 'sales-skills',
    '20082': 'phone-skills',
    '20452': 'retail-skills',
    '20908': 'email-skills',
    '20062': 'master-marketing',
    '20024': 'master-sales',
    '20068': 'master-customer',
    '22949': 'dealing-with-difficult-customers',
    '24293': 'dealing-with-happy-customers'
};
var default_tab_name = 'phone-skills';
// Authorize.net label
var authorize_net_label = "Pay securely using Visa or MasterCard credit card.";
// Set cookie
function setCookie( cname, cvalue, exdays, path ) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"; path=/"+path;
}
// Get cookie
function getCookie( cname ) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for ( var i = 0; i < ca.length; i++ ) {
        var c = ca[i];
        while ( c.charAt(0) == ' ' ) c = c.substring(1);
        if ( c.indexOf(name) === 0 ) {
            return c.substring( name.length, c.length );
        }
    }
    return "";
}
// ECMAScript 6 Polyfill for Includes() Method
if ( ! String.prototype.includes ) {
    String.prototype.includes = function( search, start ) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

// Form submit GA event
function sendGoogleEventClick( clicked, source, medium ) {
    "use strict";
    window.dataLayer.push({
        event  : 'contacts-clicked',
        action : clicked,
        src    : source,
        md     : medium
    });
}

jQuery(document).ready(function($) {
    // Show endscreen on Canity homepage jwplayer
    if ($('body').hasClass('home')) {
        if ( $('#jwplayer-0').length ) {
            jwplayer('jwplayer-0').on('complete', function(event){
                $('#end-video-screen').show( "fast" );
            });
            $('#replay-video').click(function(){
                $('#end-video-screen').hide( "fast" );
                jwplayer('jwplayer-0').play();
            });
        }
    }

    var heroCopy = $(".hero-copy");
    var bigPlayButton = $("#play-button");
    var controlsPlayButton = $('#controls-play-button');

    function playEvents() {
        $('.video-absoulte-container').fadeOut(200);
        bigPlayButton.hide();
        heroCopy.stop().animate({
            "left" : "-10%",
            "opacity" : "0"
        }, function() {
            $( this ).css( "display","none" );
        });
        $(".hero-overlay" ).fadeOut();
        $('#controls-play-button i').removeClass('fa-play');
        $('#controls-play-button i').addClass('fa-pause');
        $("#custom-control-bar").slideDown();
    }

    // Prepend icon on Mega Menu to the Menu titles
    if ( $('#video-hero').length ) {
        var jwplayer_id = 'jwplayer-0';
        if ( $('#overview-top-player-0').length ) {
            jwplayer_id = 'overview-top-player-0';
        }
        // Stop videos in modals when closed
        $( '.fusion-modal' ).each(function() {
            $( this ).on( 'hide.bs.modal', function() {
                jwplayer(jwplayer_id).stop();
            });
        });
        $('.hero-play-btn, #resume-video').click(function() {
            playEvents();
            jwplayer(jwplayer_id).play();
        });
        bigPlayButton.click(function() {
            playEvents();
            jwplayer(jwplayer_id).play();
        });
        controlsPlayButton.click(function() {
            playEvents();
            jwplayer(jwplayer_id).play();
        });
        jwplayer(jwplayer_id).onDisplayClick(function() {
            playEvents();
            jwplayer(jwplayer_id).play();
        });
        $('#previous-button').click(function(){
            var position = jwplayer(jwplayer_id).getPlaylistIndex() - 1;
            jwplayer(jwplayer_id).playlistItem(position);
        });
        $('#next-button').click(function(){
            var position = jwplayer(jwplayer_id).getPlaylistIndex() + 1;
            jwplayer(jwplayer_id).playlistItem(position);
        });
        $('#stop-button').click(function(){
            jwplayer().stop();
            $('#controls-play-button i').removeClass('fa-pause');
            $('#controls-play-button i').addClass('fa-play');
            $('.bs-progress-bar').css( 'width', "0%");
            heroCopy.css({
                "display" : "block",
                "background" : "none"
            });
            heroCopy.stop().animate({
                "left" : "4%",
                "opacity" : "1"
            });
            $( ".hero-overlay" ).fadeIn();
            bigPlayButton.show();
        });

        // Calculate position clicked in progress bar
        var position;
        var progressBarContainer = $(".bs-progress");
        progressBarContainer.click(function(e){
            posX = $(this).offset().left;
            position = e.pageX - posX;
            // Transform pixel position into percent
            progressWidth = progressBarContainer.width();
            percentProgress = Math.floor((position * 100) / progressWidth);
            duration = jwplayer(jwplayer_id).getDuration();
            progressInSeconds = Math.floor((duration * percentProgress) / 100);
            jwplayer(jwplayer_id).seek(progressInSeconds);
        });

        $('.play-jw-list-item').click(function(){
            // Smooth scroll
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            // Play selected play list item
            jwplayer(jwplayer_id).playlistItem($(this).attr('data-list-number'));
            return false;
        });
    }

    if ( $('#jwplayer-0').length ) {
        jwplayer().on('play',function(event){
            dataLayer.push({'event': 'onplay'});
        });
        var counter = 0;
        jwplayer().on('complete', function(event){
            dataLayer.push({'event': 'oncomplete'});
            counter++;
            if (counter === 5) {
                dataLayer.push({'event': 'fiveVideosWatched'});
            }
        });
    }

    // Return true if they're using IE
    function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        {
            return true;
        }
        else  // If another browser, return 0
        {
            return false;
        }
        return false;
    }

    // How it Works page
    if ( window.location.href.indexOf( "how-it-works" ) > -1 ) {
        $( '#hiw-faq-container input.faqSearch-2' ).after( "<i class='fa fa-search'></i>" );

        $(function($) {
            var element = $('.follow-scroll'),
                originalY = element.offset().top;

            // Space between element and top of screen (when scrolling)
            var topMargin = 200;

            // Should probably be set in CSS; but here just for emphasis
            element.css( 'position', 'relative' );

            $( window ).on( 'scroll', function( event ) {
                var scrollTop = $( window ).scrollTop();

                element.stop( false, false ).animate({
                    top: scrollTop < originalY ? 0 : scrollTop - originalY + topMargin
                }, 1000 );
            });
        });

        if ( $( '.hiw-in-view-div' ).length ) {
            // var $animation_elements = $( '.hiw-in-view-div' );
            var $window = $( window );
            // $window.on( 'scroll resize', hiw_check_if_in_view);
            $window.trigger( 'scroll' );
        }

        // Switching between business and individual tabs
        $( '#indi-bus-tabs .btn' ).on( 'click', function() {
            if ( ! $( this ).hasClass( 'btn-active' ) ) {
                $( '#indi-bus-tabs .btn.btn-active' ).removeClass( 'btn-active' );
                $( this ).addClass( 'btn-active' );
            }
            if ( $( this ).attr( 'id' ) == 'bus-btn' ) {
                $( '#individual-sec' ).fadeOut( 500 ).removeClass( 'active' );
                $( '#business-sec' ).fadeIn( 500 ).addClass( 'active' );
            } else if ( $( this ).attr( 'id' ) == 'indi-btn' ) {
                $( '#business-sec' ).fadeOut( 500 ).removeClass( 'active' );
                $( '#individual-sec' ).fadeIn( 500 ).addClass( 'active' );
            }
        });

        // If you're creating another section, please add the class "hiw-section-container" and give it an id pertaining to the section number in order
        var currentTop, currentBottom;
        var currentDataSection;
        var hiwSectionsTopBottom = {};
        $( window ).on( "scroll load resize",function(e) {
            hiwSectionsTopBottom = {};
            // Get the active section
            var section_id = $( '.page-sec.active' ).attr( 'id' );
            var sectionCount = $( '#' + section_id + ' .hiw-section-container' ).length;

            // Go through each section container
            var count = 1;
            $( '#' + section_id + ' .hiw-section-container' ).each( function() {
                var sectionNumber = $( this ).attr( 'data-section' );
                // Get the position from the top of the page
                currentTop = $( this ).offset().top;
                // Get the bottom position of the container by the offset top + the height of the container and minus a little factoring in the start of the next container
                currentBottom = currentTop + $( this ).height() - 20;

                // Top position
                hiwSectionsTopBottom[ "section-" + sectionNumber ] = {};
                if ( sectionNumber == 1 ) {
                    hiwSectionsTopBottom[ "section-" + sectionNumber ][ "top" ] = 0;
                } else {
                    hiwSectionsTopBottom[ "section-" + sectionNumber ][ "top" ] = currentTop;
                }
                // Bottom position
                if ( count == sectionCount ) {
                    hiwSectionsTopBottom[ "section-" + sectionNumber ][ "bottom" ] = $( document ).height();
                } else {
                    hiwSectionsTopBottom[ "section-" + sectionNumber ][ "bottom" ] = currentBottom;
                }
                hiwSectionsTopBottom[ "section-" + sectionNumber ][ "class"] = 'hiw-content-container-' + sectionNumber;
                count++;
            });
        });

        // On Scroll, calculate if the side menu is between the top and bottom points of each section
        $( window ).on( 'scroll', function() {
            var section_id = $( '.page-sec.active' ).attr( 'id' );
            var scrollTop = $( window ).scrollTop(),
            divOffset = $( '#' + section_id + ' .side-menu-container' ).offset().top,
            // Dist = the current offset top of the sidescroll menu +  the extra scrolled value
            dist = ( divOffset + scrollTop - 100 );

            // Go through each section in the JSON hiwSectionsTopBottom
            $.each( hiwSectionsTopBottom, function( i, item ) {
                // If the dist is between the top and bottom values of the current JSON item
                if ( dist > item.top && dist < item.bottom ) {
                    // Make that current section active
                    $( '#' + section_id + ' .' + item.class ).find( '.hiw-section-dot' ).addClass( 'active-hiw-menu-dot' );
                    // Store the current data section and loop through the sidescroll menu and mark it as active if it's in view.
                    currentDataSection = $( '#' + section_id + ' .' + item.class ).find( '.hiw-section-dot' ).attr( 'data-section' );
                    $( '.side-menu-list.follow-scroll a' ).each( function() {
                        if ( currentDataSection === $( this ).attr( 'data-section' ) ) {
                            $( this ).addClass( 'active' );
                        } else {
                            $( this ).removeClass( 'active' );
                        }
                    });
                } else {
                    $( '#' + section_id + ' .' + item.class ).find( '.hiw-section-dot' ).removeClass( 'active-hiw-menu-dot' );
                }
            });
        });

        var scrollSpeed = 100;
        if ( msieversion() ) {
            scrollSpeed = 1000;
        }

        // Smooth scrolling for How it works menu
        $( '.hiw-scroll-button' ).on( 'click', function() {
            var scroll_to = $( this ).attr( 'scroll-to' );
            if ( scroll_to && $( '#' + scroll_to ).length  ) {
                $( 'html, body' ).animate({
                    scrollTop: $( '#' + scroll_to ).offset().top - 90
                }, scrollSpeed );
                return false;
            }
        });
    }

    // Woocommerce Store Changes
    if (window.location.href.indexOf("edit-address") > -1) {
        if ( $('.woocommerce_account_subscriptions').length && $('.woocommerce-side-nav.avada-myaccount-nav').length ) {
            $('.woocommerce_account_subscriptions, .woocommerce-side-nav.avada-myaccount-nav').css('display', 'none');
            if ( $('.woocommerce-content-box.avada-myaccount-data').length ) {
                $('.woocommerce-content-box.avada-myaccount-data').css('margin', '0px');
            }
            if ( $('#cim-my-payment-methods').length && $('.shop_table.my-account-cim-payment-methods').length ) {
                $('#cim-my-payment-methods, .shop_table.my-account-cim-payment-methods').css('display', 'none');
            }
        }
    }
    if ($('a.button.cancel').length) {
        $('a.button.cancel').attr('href', function(n,v) {
            return v.replace('my-canity/account-settings','cancel-subscription').replace(/&.*$/,'');
        });
    }
    // Date picker
    if ($('.datepicker').length) {
        $('.datepicker').datepicker({dateFormat : 'yy-mm-dd'});
    }

    var private_mode = getPrivateMode();

    // Episodes Carousel
    $('.episode-gallery li:first').before($('.episodes-ul li:last'));
    // Sliding right
    $('.right-arrow-container').click(function(){
        var item_width = $('.episode-gallery ul li').outerWidth() + 10;
        var left_indent = item_width * -2;
        $(this).closest('.episode-gallery').find('ul').animate({'left' : left_indent}, 500,function(){
            $(this).closest('.episode-gallery').find('ul li:last').after($(this).closest('.episode-gallery').find('ul li:first'));
            $(this).closest('.episode-gallery').find('ul').css({'left' : -item_width});
        });
    });
    // Sliding left
    $('.left-arrow-container').click(function(){
        var item_width = $('.episode-gallery ul li').outerWidth() + 10;
        var left_indent = 0;
        $(this).closest('.episode-gallery').find('ul').animate({'left' : left_indent}, 500,function(){
            $(this).closest('.episode-gallery').find('ul li:first').before($(this).closest('.episode-gallery').find('ul li:last'));
            $(this).closest('.episode-gallery').find('ul').css({'left' : -item_width});
        });
    });
    $('.episode-gallery-sts li:first').before($('.episode-gallery-sts ul li:last'));
    // Sliding right
    $('.right-arrow-container-sts').click(function(){
        var item_width = $('.episode-gallery-sts ul li').outerWidth() + 5;
        var left_indent = item_width * -2;
        $(this).closest('.episode-gallery-sts').find('ul').animate({'left' : left_indent}, 500,function(){
            $(this).closest('.episode-gallery-sts').find('ul li:last').after($(this).closest('.episode-gallery-sts').find('ul li:first'));
            $(this).closest('.episode-gallery-sts').find('ul').css({'left' : -item_width});
        });
    });
    // Sliding left
    $('.left-arrow-container-sts').click(function(){
        var item_width = $('.episode-gallery-sts ul li').outerWidth() + 5;
        var left_indent = 0;
        $(this).closest('.episode-gallery-sts').find('ul').animate({'left' : left_indent}, 500,function(){
            $(this).closest('.episode-gallery-sts').find('ul li:first').before($(this).closest('.episode-gallery-sts').find('ul li:last'));
            $(this).closest('.episode-gallery-sts').find('ul').css({'left' : -item_width});
        });
    });
    // For gallery with less than 2 items
    if ( $('.episode-gallery-sts ul li').length <= 2 ) {
        $( '.episode-gallery-sts ul' ).css( 'left', '0px' );
        $( '.left-arrow-container-sts, .right-arrow-container-sts' ).hide();
    }
    // Limit the length of the checkout field based on: http://www.authorize.net/support/CIM_XML_guide.pdf
    for ( var field in wc_checkout_fields_max_length ) {
        $("#"+field).attr('maxlength', wc_checkout_fields_max_length[field]);
    }
    // On hover, fade in profile picture overlay
    $(".profile-userpic-inner").hover(function() {
        $('.profile-userpic-overlay').stop().fadeIn();
    }, function() {
        $('.profile-userpic-overlay').stop().fadeOut();
    });
    // Canity iPad Slider
    var slideCount = $('.ipad-slider ul li').length;
    var slideWidth = $('.ipad-slider ul li').width();
    var slideHeight = $('.ipad-slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.ipad-slider').css({ width: slideWidth, height: slideHeight });
    $('.ipad-slider').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('.ipad-slider ul li:last-child').prependTo('.ipad-slider ul');

    function moveRight() {
        $('.ipad-slider ul').stop().animate({
            left: - slideWidth
        }, 200, function () {
            $('.ipad-slider ul li:first-child').appendTo('.ipad-slider ul');
            $('.ipad-slider ul').css('left', '');
        });
        $('.animated').addClass('swing');
        setTimeout(function() {
            $('.animated').removeClass('swing');
            moveRight();
        }, 3000);
    }
    moveRight();
    // Cancellation reason drop down menu
    $("#cancel-reason-option").on('change', function() {
        var selected_value = $("#cancel-reason-option").val();
        // No cancellation reason provided
        if ( ! selected_value ) {
            $('#other-reason-container').css('display', 'none');
            cancelButton( false );
        }
        // Cancellation reason provided
        else {
            $('#other-reason-container').css('display', 'block');
            if ( selected_value == 'Other' ) {
                cancelButton( false );
            } else {
                cancelButton( true );
            }
        }
    });
    // Cancellation reason text
    $("#other-reason-text").on('change keyup paste', function() {
        if ( $("#cancel-reason-option").val() == 'Other' ) {
            var other_reason_text = $("#other-reason-text").val();
            other_reason_text = other_reason_text.replace( /^\s+|\s+$/g,'' );
            if ( other_reason_text.length ) {
                cancelButton( true );
            } else {
                cancelButton( false );
            }
        }
    });

    $("#cancel-subscription-button").on('click', function() {
        $('#other-reason-container').slideDown();
        $('#cancel-subscription-button').addClass('grey-background');
        $('#cancel-subscription-button').removeClass('cancel-button pointer-cursor');
        $('#cancel-subscription-button').css('pointer-events', 'none');
    });

    $( '#cancel-reason-option' ).val( 'Other' ).trigger( 'change' );
    //Hide cancellation message box until "cancel" is clicked
    $( '#other-reason-container').hide();
    $( '#cancel-subscription-button').removeClass( 'grey-background' );
    $( '#cancel-subscription-button').addClass( 'cancel-button pointer-cursor' );
    $( '#cancel-subscription-button').css( 'pointer-events', 'auto' );

    // Enable or disable the cancel button
    function cancelButton (enable) {
        if ( enable ) {
            $('#cancel-subscription-button').removeClass( 'grey-background' );
            $('#cancel-subscription-button').addClass( 'cancel-button pointer-cursor' );
            $('#cancel-subscription-button').css( 'pointer-events', 'auto' );

            // Cancellation button
            $( '#cancel-subscription-button' ).on( 'click', function() {
                if ( ! $( '#subscription-cancelled' ).val() && ( $( '#other-reason-text' ).val() || $( '#cancel-reason-option' ).val())) {
                    // Cancellation reason
                    var cancel_reason = $( '#cancel-reason-option' ).val();
                    if ( $( '#other-reason-text' ).val() ) {
                        cancel_reason +=  ': ' + $( '#other-reason-text' ).val();
                    }
                    // Change text once clicked
                    $( '#cancel-subscription-button' ).text( 'Processing...' );
                    $.ajax({
                        url: CONTROLLER_LIB_PATH + "/cancel-subscription.php",
                        type: "POST",
                        data: {
                            'user_id': $( '#user-id' ).val(),
                            'subscription_key': $( '#subscription-key' ).val(),
                            'cancel_reason': cancel_reason
                        },
                        dataType: "json",
                        success: function (result) {
                            // Disable the cancellation drop down menu, button and text
                            cancelButton( false );
                            $( "#cancel-reason-option").prop( "disabled", true );
                            $( "#other-reason-text").attr( "disabled", "disabled" );
                            // Display the success message
                            $( '#message-container' ).css( 'display', 'block' );
                            $( '#message-text' ).html( 'Thank you for your feedback!<br><br>Your Canity subscription has been cancelled succesfully.<br>Please check your inbox for a confirmation email.<br>Click <a href="/my-canity">here</a> to go back to MyCanity.' );
                            $( '#subscription-cancelled' ).val( '1' );

                            $( '.cancel-toilet-image' ).css( 'display', 'none' );
                            $( '#container-hide' ).slideUp( 800 );
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log( 'ERR: failed to cancel subscription - ' + thrownError);
                            console.log( xhr );
                        }
                    });
                }
            });
        }
        else {
            $( '#cancel-subscription-button' ).addClass( 'grey-background' );
            $( '#cancel-subscription-button' ).removeClass( 'cancel-button pointer-cursor' );
            $( '#cancel-subscription-button' ).css( 'pointer-events', 'none' );
        }
    }
    // Get the URL params value by params name
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results === null)
            return "";
        else
            return results[1];
    }
    // Homepage Banner Header
    function toggleVideoPlayer(state){
        $('#homepage-banner').toggleClass('shift-background-up-50');
        $('#homepage-banner-content').toggleClass('fade-out');
        $('#homepage-banner-content').toggleClass('shift-up-50');

        if ( state == 'play' ) {
            jwplayer().play(true);
        } else {
            jwplayer().play(false);
        }
    }
    $('#play-home-video').click(function() { toggleVideoPlayer('play'); } );
    $('#back-up').click(function() { toggleVideoPlayer('pause'); } );

    // Contact us form
    $( '#ninja_forms_form_5 #ninja_forms_field_56' ).on( 'click', function() {
        if (  $( '#ninja_forms_field_6' ).val() &&
                    $( '#ninja_forms_field_7' ).val() &&
                    $( '#ninja_forms_field_8' ).val() &&
                    $( '#ninja_forms_field_9' ).val() &&
                    $( '#ninja_forms_field_10 ').val() &&
                    $( '#ninja_forms_field_11' ).val() ) {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: CONTROLLER_LIB_PATH + "/add-prospect.php",
                data: {
                    'first_name': $( '#ninja_forms_form_5 #ninja_forms_field_6' ).val(),
                    'last_name' : $( '#ninja_forms_form_5 #ninja_forms_field_7' ).val(),
                    'company'   : $( '#ninja_forms_form_5 #ninja_forms_field_8' ).val(),
                    'phone'     : $( '#ninja_forms_form_5 #ninja_forms_field_9' ).val(),
                    'email'     : $( '#ninja_forms_form_5 #ninja_forms_field_10' ).val(),
                    'type'      : 'contact-form',
                },
                success: function( data ) {
                    dataLayer.push( { 'event' : 'contactSubmit', 'formName' : 'Contact - Contact Us' } );
                },
                error: function ( xhr, ajaxOptions, thrownError ) {
                    console.log( thrownError );
                }
            });
        }
    });

    //Placeholder text for form on Affiliate page
    if ( $('#center-form-block').length){
        $('#ninja_forms_field_11.comments').append('Provide some information about your partnership program.');
    }

    // Request Demo Account form
    $( '#ninja_forms_form_37 #ninja_forms_field_88' ).on( 'click', function() {
        if (
            $( '#ninja_forms_field_79' ).val() &&
            $( '#ninja_forms_field_80' ).val() &&
            $( '#ninja_forms_field_81' ).val() &&
            $( '#ninja_forms_field_82' ).val() &&
            $( '#ninja_forms_field_83 ').val() &&
            $( '#ninja_forms_field_89' ).val()
        ) {
            var prospect = true;
            // if ( $( '#ninja_forms_field_91:checked' ).val() ) {
            //     prospect = true;
            // }
            $.ajax({
                type: "POST",
                dataType: "json",
                url: CONTROLLER_LIB_PATH + "/add-prospect.php",
                data: {
                    'first_name': $( '#ninja_forms_form_37 #ninja_forms_field_79' ).val(),
                    'last_name' : $( '#ninja_forms_form_37 #ninja_forms_field_80' ).val(),
                    'company'   : $( '#ninja_forms_form_37 #ninja_forms_field_81' ).val(),
                    'phone'     : $( '#ninja_forms_form_37 #ninja_forms_field_82' ).val(),
                    'email'     : $( '#ninja_forms_form_37 #ninja_forms_field_83' ).val(),
                    'prospect'  : prospect,
                    'type'      : 'demo-request',
                },
                success: function( data ) {
                    var formName = '';
                    if ( window.location.href.indexOf( "fb-canity" ) > -1 ) {
                        formName = 'FB Homepage - Request Demo Account Form';
                    }
                    else if ( window.location.href.indexOf( "how-it-works" ) > -1 ) {
                        formName = 'How It Works - Request Demo Account Form';
                    } else {
                        formName = 'Homepage - Request Demo Account Form';
                    }
                    dataLayer.push( { 'event' : 'demoContactSubmit', 'formName' : formName } );
                },
                error: function ( xhr, ajaxOptions, thrownError ) {
                    console.log( thrownError );
                }
            });
        }
    });

    // Contact us form submisison
    $('#ninja_forms_form_5').on('submitResponse', function(e, response) {
        var errors = response.errors;
        if (errors === false) {
            clockDisplay();
        }
        // else {
        //     grecaptcha.reset();
        // }
     });

    // Request Demo Form Submission
    $('#ninja_forms_form_37').on('submitResponse', function(e, response) {
        var errors = response.errors;
        if (errors === false) {
            clockDisplay();
        }
        // else {
        //     grecaptcha.reset();
        // }
    });

    $('#ninja_forms_form_28 #ninja_forms_field_45').on('click', function() {
        var first_name = $('#ninja_forms_form_28 #ninja_forms_field_43').val();
        var email = $('#ninja_forms_form_28 #ninja_forms_field_44').val();

        if ( email && email != 'Email *' ) {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: CONTROLLER_LIB_PATH + "/add-prospect.php",
                data: {
                    'first_name': first_name,
                    'email': email,
                    'type' : 'blog'
                },
                success: function(data) {
                    if ( data['success'] ) {
                        dataLayer.push({ 'event' : 'contactSubmit', 'formName' : 'Downloadable content' });
                        if ( window.location.href.indexOf("/resources") > -1 || window.location.href.indexOf("future-customer-service-chapter") > -1 ) {
                            if ( window.location.href.indexOf("future-customer-service-chapter") ) {
                                rscLocation = rscLocation ? rscLocation : "https://www.canity.com/wp-content/uploads/2017/08/TFICS-Chapter3-Canity.zip";

                                // Hide message which asks to enter email
                                $("#download-copy-text").hide();

                                // Redirect to Resources page.
                                var counter = 10;
                                var interval = setInterval(function() {
                                    counter--;
                                    $("#redirect_message").html("You will be redirected to the resources page in " + counter);
                                    if (counter <= 0) {
                                        // Display a login box
                                        clearInterval(interval);
                                        window.location.assign("https://www.canity.com/resources/");
                                    }
                                }, 1000);
                            }
                            setCookie('sub-email', true, 360, 'resources');
                            window.location = rscLocation;
                        }
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(thrownError);
                }
            });
        } else {
            console.log("ERR: invalid first name '" + first_name + "'' or email address '" + email + "'");
        }
    });
    // Blog signup modal
    if ( window.location.href.indexOf( "/resources" ) > -1 && $( '#blog-signup-modal' ).length ) {
        var cCta = getCookie( 'blog-cta' );
        var cSubscribed = getCookie( 'blog-subscribed' );
        if ( cCta === "" && cSubscribed === "" ) {
            setTimeout( function() {
                $( '#blog-signup-modal' ).modal( 'show' );
            }, 8000 );
        }
        $( '#blog-signup-modal' ).on( 'hidden.bs.modal', function(){
            setCookie( "blog-cta", 'true', 90, '' );
        });
    }
    // Ninja form - Blog sign up
    $('#ninja_forms_form_25 #ninja_forms_field_41').on( 'click', function() {
        var email = $('#ninja_forms_form_25 #ninja_forms_field_40').val();
        if ( email && email != 'Email *' ) {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: CONTROLLER_LIB_PATH + "/add-prospect.php",
                data: {
                    'type': 'blog',
                    'email': email
                },
                success: function( data ) {
                    if ( data['success'] ) {
                        dataLayer.push( { 'event': 'blogSubmit' } );
                    }
                },
                error: function ( xhr, ajaxOptions, thrownError ) {
                    console.log( thrownError );
                }
            });
        }
        setCookie( 'blog-subscribed', true, 720, 'blog' );
    });
    // Related Blogs Sidebar
    if ( window.location.href.indexOf( "/resources" ) > -1 && $( '#blog-sidebar' ).length ) {
        if( $( '#blog-sidebar-show-more' ).length ) {
            $( '#blog-sidebar-show-more' ).on( 'click', function() {
                if( $( '.blog-show-more-posts' ).is( ':visible' ) ) {
                    $( '.blog-show-more-posts' ).slideUp();
                    $( '#blog-sidebar-show-more p' ).text( 'Show More' );
                } else {
                    $( '.blog-show-more-posts' ).slideDown();
                    $( '#blog-sidebar-show-more p' ).text( 'Show Less' );
                }
            });
        }

        if( $( '.tag-heading' ).length ) {
            $( '.tag-heading' ).on( 'click', function() {
                if( $( this ).siblings( '.tag-container' ).is( ':visible' ) ) {
                    $( this ).siblings( '.tag-container' ).slideUp();
                    $( this ).find( 'i' ).removeClass( 'fa-chevron-up' ).addClass( 'fa-chevron-down' );
                } else {
                    $( this ).siblings( '.tag-container' ).slideDown();
                    $( this ).find( 'i' ).removeClass( 'fa-chevron-down' ).addClass( 'fa-chevron-up' );
                }
            });
        }

        if( $( '.mobi-blog-sidebar-btn' ).length ) {
            $( '.mobi-blog-sidebar-btn' ).on( 'click', function() {
                if( $( '.sidenav-related .tag-container' ).is( ':visible' ) ) {
                    $( '.sidenav-related .tag-container' ).slideUp();
                    $( '.mobi-blog-sidebar-btn i' ).removeClass( 'fa-chevron-up' ).addClass( 'fa-chevron-down' );
                }
                else {
                    $( '.sidenav-related .tag-container' ).slideDown();
                    $( '.mobi-blog-sidebar-btn i' ).removeClass( 'fa-chevron-down' ).addClass( 'fa-chevron-up' );
                }
            } );
        }
    }

    // Set default active list of episodes tab
    var default_tab = false;
    for ( var page_id in tab_maps ) {
        if ( $('.page-id-'+ page_id).length && $('#episodes-list #' + tab_maps[page_id] + '-tab').length ) {
            $('.page-id-'+ page_id + ' #episodes-list #' + tab_maps[page_id] + '-tab').addClass('active');
            $('.page-id-'+ page_id + ' .' + tab_maps[page_id] + '-tab-pane').addClass('active in');
            $('.page-id-'+ page_id + ' .' + tab_maps[page_id] + '-tab-pane .fusion-button-wrapper ').hide();
            default_tab = true;
        }
    }
    if ( ! default_tab ) {
        $('#episodes-list #' + default_tab_name + '-tab').addClass('active');
        $('.' + default_tab_name + '-tab-pane').addClass('active in');
        $('.' + default_tab_name + '-tab-pane .fusion-button-wrapper').hide();
    }
    // GA analytics
    if ( $('#ga-company-name').length && $('#ga-training-name').length ) {
        dataLayer.push({
            'companyName': $('#ga-company-name').val().toString(),
            'trainingName': $('#ga-training-name').val().toString()
        });
    }
    // Default comment contact form textarea in FAQ page
    $('.faq-link').on('click', function () {
        var copyText = $(this).attr('data-copy');
        $('#ninja_forms_form_5_cont .comments').text(copyText);
    });
    // FAQ GA event
    $('#faq-container .fusion-toggle-heading').on('click', function(e) {
        var faqText = $(this).text();
        dataLayer.push({ 'event': 'gtm.Faq', 'faqText': faqText });
    });
    // Send the currency code when the place order button is clicked
    $('.page-id-11030.woocommerce-checkout').on('click', 'input#place_order', function() {
        if ( ! private_mode ) {
            var session_options = sessionStorage.getItem( 'options' );
            if ( session_options ) {
                options = JSON.parse( session_options );
                dataLayer.push( { 'event' : 'gtm.currency.switcher', 'checkoutCurrencyCode' : options['currency-code'] } );
            }
        }
    });
    // Checkout page
    var country_to_currency_code = {
        'Canada'                : 'CAD$',
        'Australia'             : 'AUD$',
        'United Kingdom (UK)'   : 'GBP£',
        'Austria'               : 'EUR€',
        'Belgium'               : 'EUR€',
        'Cyprus'                : 'EUR€',
        'Estonia'               : 'EUR€',
        'Finland'               : 'EUR€',
        'France'                : 'EUR€',
        'Germany'               : 'EUR€',
        'Greece'                : 'EUR€',
        'Republic of Ireland'   : 'EUR€',
        'Italy'                 : 'EUR€',
        'Latvia'                : 'EUR€',
        'Lithuania'             : 'EUR€',
        'Luxembourg'            : 'EUR€',
        'Malta'                 : 'EUR€',
        'Netherlands'           : 'EUR€',
        'Portugal'              : 'EUR€',
        'Spain'                 : 'EUR€',
        'Slovenia'              : 'EUR€',
        'Slovakia'              : 'EUR€',
        'Singapore'             : 'SGD$',
        'New Zealand'           : 'NZD$'
    };
    var legacy_customer = false;
    $('.page-id-11030.woocommerce-checkout').on('change', '.payment_box.payment_method_authorize_net_cim_credit_card, .shop_table.woocommerce-checkout-review-order-table tfoot, .product-info, input[name=payment_method], input.js-sv-wc-payment-gateway-payment-token, tr.coupon-1freemth, tr.order-total td', function(e) {
        // Add the Authorize.Net logo to the payment form
        if (! $('.authorize-net-logo').length && $('input[name=payment_method]:checked').val() == 'authorize_net_cim_credit_card' ) {
            $( ".payment_box.payment_method_authorize_net_cim_credit_card" ).before('<div class="authorize-net-logo" style="float: right; margin-top: -20px;"><a href="https://verify.authorize.net/anetseal/?pid=425995ac-120e-459f-9420-10357b78e0ce&rurl=https://www.canity.com" target="_blank"><img src="https://verify.authorize.net/anetseal/images/secure90x72.gif"></img></a></div>');
        } else if ( $('.authorize-net-logo').length && $('input[name=payment_method]:checked').val() != 'authorize_net_cim_credit_card' ) {
            $('.authorize-net-logo').remove();
        }
        // Moving the authorize.net label to the bottom of the payment form
        if ($('.payment_box.payment_method_authorize_net_cim_credit_card p:first-child:contains("' + authorize_net_label +'")' )) {
            $('.payment_box.payment_method_authorize_net_cim_credit_card p:first-child:contains("' + authorize_net_label + '")').css('margin-bottom', '0px');
            $('.payment_box.payment_method_authorize_net_cim_credit_card p:first-child:contains("' + authorize_net_label + '")').appendTo('.payment_box.payment_method_authorize_net_cim_credit_card');
        }
        // Insert Amex logo
        if ( $('label[for=payment_method_eway]').length && ! $('#card-amex-logo').length ) {
            $('label[for=payment_method_eway]').after('&nbsp;<img id="card-amex-logo" src="/wp-content/plugins/woocommerce-gateway-authorize-net-cim/lib/skyverge/woocommerce/payment-gateway/assets/images/card-amex.svg" alt="amex" class="sv-wc-payment-gateway-icon wc-authorize-net-cim-credit-card-payment-gateway-icon" width="40" height="25" style="width: 40px; height: 25px;">');
        }
        // Shorten the text
        if ( $('.payment_box.payment_method_authorize_net_cim_credit_card p a:first-child').text() == 'Manage Payment Methods' ) {
            $('.payment_box.payment_method_authorize_net_cim_credit_card p a:first-child').text('Manage Payment');
            $('.payment_box.payment_method_authorize_net_cim_credit_card p a:first-child').attr('href', '/my-canity/accounts/#wc-authorize-net-cim-my-payment-methods');
        }
        // Update the pricing text for the 1 month trial
        if ( $('.woocommerce-checkout-review-order .order-total td').length && $('.woocommerce-checkout-review-order .order-total td').text() == 'AUD$0 now then AUD$49 / month (Includes AUD$0 GST)' ) {
            $('.woocommerce-checkout-review-order .order-total td').html('<span class="amount">AUD$0</span>');
            $('.woocommerce-checkout-review-order tfoot').append('<tr style="font-size: 11px;"><td style="width: 50%;"></td><td style="padding-top: 0px !important;">Price after free month ends - $49/mth</td></tr>');
        }
        // Update the position of the CSC
        if ( $('input.js-sv-wc-payment-gateway-payment-token').is(':checked') && $('#wc-authorize-net-cim-credit-card-csc_field').css('float') == 'right' ) {
            $('#wc-authorize-net-cim-credit-card-csc_field').css('float', 'left');
        } else if ( ! $('input.js-sv-wc-payment-gateway-payment-token').length || ( ! $('input.js-sv-wc-payment-gateway-payment-token').is(':checked') && $('#wc-authorize-net-cim-credit-card-csc_field').css('float') == 'left' ) ) {
            $('#wc-authorize-net-cim-credit-card-csc_field').css('float', 'right');
        }
        // Remove the parent product name
        if ( $( '.product-info' ).length ) {
            $( '.product-info' ).each( function() {
                var checkout_currency = '';
                // Legacy subscription customers
                if ( legacy_customer || ( $( this ).text().includes( 'Subscription → ' ) && ! $( this ).text().includes( 'Lifetime' ) ) ) {
                    $( 'li.wc_payment_method.payment_method_authorize_net_cim_credit_card, li.wc_payment_method.payment_method_eway, .payment_box.payment_method_authorize_net_cim_credit_card' ).show();
                    if ( ! $( 'input#payment_method_authorize_net_cim_credit_card' ).prop( 'checked' ) && ! $( 'input#payment_method_bacs' ).prop( 'checked' ) ) {
                        $( 'input#payment_method_authorize_net_cim_credit_card' ).prop( 'checked', true );
                    }
                    checkout_currency = 'AUD$';
                    legacy_customer = true;
                }
                // New or existing all access/lifetime customers
                else {
                    // Set the default
                    $( 'li.wc_payment_method.payment_method_stripe' ).show();
                    if ( ! $( 'input#payment_method_stripe' ).prop( 'checked' ) && ! $( 'input#payment_method_bacs' ).prop( 'checked' ) && ! $( 'input#payment_method_paypal' ).prop( 'checked' ) ) {
                        $( 'input#payment_method_stripe' ).prop( 'checked', true );
                    }
                    $( 'li.wc_payment_method.payment_method_paypal' ).show();
                    if ( country_to_currency_code[$( '#billing_country_field #select2-chosen-1' ).text()] ) {
                        checkout_currency = country_to_currency_code[$( '#billing_country_field #select2-chosen-1' ).text()];
                    } else {
                        checkout_currency = 'USD$';
                    }
                }

                // USD products
                if ( $( this ).text().includes( 'USD Subscription → ' ) || $( this ).text().includes( 'USD Lifetime Subscription → ' ) || $( this ).text().includes( 'USD Addon → ' ) ) {
                    $( this ).text( $( this ).text().replace( 'USD Subscription → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'USD Addon → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'Lifetime ', '' ) );
                }
                // AUD products
                else if ( $( this ).text().includes( 'Subscription → ' ) || $( this ).text().includes( 'Lifetime Subscription → ' ) || $( this ).text().includes( 'Addon → ' )  ) {
                    $( this ).text( $( this ).text().replace( 'Canity Training Subscription → Canity Training Subscription → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'Canity Training Subscription → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'Subscription → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'Addon → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'Lifetime Lifetime ', '' ) );
                    $( this ).text( $( this ).text().replace( 'Lifetime ', '' ) );

                }
                // USD Module Pass products
                else if ( $( this ).text().includes( 'USD Module Pass → ' ) || $( this ).text().includes( 'USD Individual Training Pass → ' ) || $( this ).text().includes( 'USD LMS Pass → ' ) ) {
                    $( this ).text( $( this ).text().replace( 'USD Module Pass → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'USD LMS Pass → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'USD Individual Training Pass → ', '' ) );
                }
                // AUD Module Pass products
                else if ( $( this ).text().includes( 'Module Pass → ' ) || $( this ).text().includes( 'Individual Training Pass → ' ) || $( this ).text().includes( 'LMS Pass → ' )) {
                    $( this ).text( $( this ).text().replace( 'Module Pass → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'LMS Pass → ', '' ) );
                    $( this ).text( $( this ).text().replace( 'Individual Training Pass → ', '' ) );
                }
                $( '.amount' ).each( function() {
                    if ( ! $( this ).text().includes( checkout_currency ) ) {
                        $( this ).text( $( this ).text().replace( '$', checkout_currency ) );
                    }
                });

                if ( ! $( this ).text().includes( 'Additional' ) && ! $( this ).text().includes( 'Supplemental LMS license' ) ) {
                    if ( $( this ).text().includes( '× 1' ) ) {
                        $( this ).text( $( this ).text().replace('× 1', '' ) );
                    }
                }
                if ( $( this ).text().includes( 'Yearly' ) || $( this ).text().includes( 'Quarterly' ) || $( this ).text().includes( 'Monthly' ) ) {
                    $( this ).text( $( this ).text().replace(/- Yearly|- Quarterly|- Monthly/, '') );
                }
            });
        }

        // Step 3
        if ( ! $('input#wc-authorize-net-cim-credit-card-tokenize-payment-method').prop('checked') ) {
            $('input#wc-authorize-net-cim-credit-card-tokenize-payment-method[type="checkbox"]').prop('checked', true);
            $('input#wc-authorize-net-cim-credit-card-tokenize-payment-method[type="checkbox"]').parent().hide();
        }
        // Approximate amount in customer's selected currency on the checkout page
        if ( ! private_mode ) {
            try {
                var opt = sessionStorage.getItem( 'options' );
                if ( opt ) {
                    var options = JSON.parse( opt );
                    if ( options && $('tr.order-total td').length && ! $('.currency-amount').length && options['currency-code'] != options['default-currency-code'] ) {
                        $('tr.order-total td').append('<span class="currency-amount">(Approx. ' + options['currency-code'] + options['total-price'] + ' / ' + options['billing-period'] + ')</span>');
                    }
                }
            } catch ( error ) {
                console.log(error.message);
            }
        }
        if ( $( '.order-total .amount:nth-child(2)' ).length ) {
            $( '.order-total .amount:nth-child(2)' ).css( 'color', '#747474' );
        }

        if ( $( "ul.woocommerce-error" ).length ) {
            $( ".woocommerce-content-box.full-width.checkout_coupon" ).attr( 'style', 'display: inline-block !important' );
        }
        if ( ! $( '#order_review a[data-name="col-2"]' ).length ) {
            $( "#order_review input#place_order" ).after( '<a data-name="col-2" href="#" class="fusion-button button-default button-medium button default medium continue-checkout">PREVIOUS</a>' );
        }
        // check if  address exists
        if ( getCookie( 'display_full_address' ) == '1' ) {
            $('.col-1 .woocommerce-billing-fields .details_billing').hide();
            $('#billing_address_google_field #billing_address_not_found').show();
            setCookie( 'display_full_address', '0', 0, 'checkout' );
        }
    });
    // Step 2
    if ( $('.page-id-11030 #customer_details .col-1 .woocommerce-billing-fields .create-account p:first-child').css('display') != 'none' ) {
        $('.page-id-11030 #customer_details .col-1 .woocommerce-billing-fields .create-account p:first-child').css('display', 'none');
    }
    if ( $('.page-id-11030 .woocommerce-content-box h3:first-child').text() == 'Your order' ) {
        $('.page-id-11030 .woocommerce-content-box h3:first-child').css('display', 'none');
    }
    // Check if an element is before or after another element
    function isAfter(el1, el2) { return el1.prevAll(el2).length !== 0; }
    function isBefore(el1, el2) { return el1.nextAll(el2).length !== 0; }
    function toObject(arr) {
        var rv = {};
        for ( var property in arr ) {
            rv[property] = arr[property];
        }
        return rv;
    }
    // Display login screen on the checkout page
    var checkout_details = {};
    var checkout_sessions = sessionStorage.getItem( 'checkout-sessions' );
    if ( ! private_mode && checkout_sessions ) {
        checkout_details = JSON.parse( checkout_sessions );
    }
    $( '.page-id-11030' ).on( 'DOMNodeInserted', function( e ) {
        // Update the error message
        if ( $( 'ul.woocommerce-error li' ).length ) {
            $( '#customer_details input.input-text' ).each( function() {
                var input_id = $( this ).attr( 'id' );
                var parent_element = false;
                if ( ! input_id ) {
                    input_id = $( this ).parents().attr( 'id' ).replace( '_field', '' );
                    parent_element = true;
                }
                var input_val = $( this ).val();
                // Store the inputs
                if ( input_val ) {
                    checkout_details[input_id] = input_val;
                }
                // Pre-fill with stored inputs
                else {
                    if ( checkout_details[input_id] ) {
                        $( this ).val( checkout_details[input_id] );
                    }
                }
            });
            // Store the inputs in a session variable
            if ( ! private_mode && checkout_details) {
                sessionStorage.setItem( 'checkout-sessions', JSON.stringify( toObject( checkout_details ) ) );
            }
            // Display the login screen modal on the checkout page
            $( 'ul.woocommerce-error li' ).each( function () {
                if ( $( this ).text() == 'An account is already registered with your email address. Please login.' ||
                     $( this ).text() == 'Error: Username is required.' ||
                     $( this ).text() == 'Error: Password is required.' ||
                     $( this ).text() == 'ERROR: Invalid username. Lost your password?' ||
                     $( this ).text() == 'Error: A user could not be found with this email address.' ||
                     $( this ).text().match( 'ERROR: The password you entered for the username' )
                ) {
                    var element = $( this );
                    var message = $( this ).text();
                    var parent_element = $( this ).parent();
                    // Remove the error message
                    element.remove();
                    // Remove the old login screen (if any)
                    if ( $('.login_screen').length ) {
                        $('.login_screen').remove();
                    }
                    // Get a new login screen
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        data: { 'message' : message },
                        url: CONTROLLER_LIB_PATH + "/get-login-screen.php",
                        success: function( data ) {
                            // Append the login screen
                            parent_element.html( data );
                            // Update the login screen element
                            $( ".login_screen input#username" ).val( $( "input#billing_email" ).val() );
                            $( ".login_screen input#username" ).attr( 'readonly', 'readonly' ).css( 'background-color', '#eee' );
                            $( "input[name='_wp_http_referer']" ).val( "/checkout/?add-to-cart=" + $('input#sa-product-id').val() );
                            // Show the login screen
                            $( ".login_screen" ).modal( 'show' );
                        },
                        error: function ( xhr, ajaxOptions, thrownError ) {
                            console.log( thrownError );
                        }
                    });
                }
                // Display non-login related error message (hidden by default)
                else {
                    $( this ).css('display', 'block');
                }
            });
        }
        // Move the coupon error message to the correct location
        if ( $('ul.woocommerce-error').length ) {
            $('ul.woocommerce-error').each(function () {
                if ( isBefore( $( this ), 'form.woocommerce-checkout .checkout_coupon') && isAfter( $( this ), 'form.woocommerce-checkout #customer_details') ) {
                    $( this ).prependTo('form.woocommerce-checkout');
                }
            });
        }
    });

    $( '.page-id-21336' ).on( 'DOMNodeInserted', function( e ) {
        if ( $( 'ul.woocommerce-error' ).length ) {
            if ( ! $( 'div#customer_login ul.woocommerce-error' ).length ) {
                $( 'ul.woocommerce-error' ).insertAfter( 'form.login' ).show();
            }
        }
    });

    // Trigger changes (IE)
    if ( $('.page-id-11030 .payment_box.payment_method_authorize_net_cim_credit_card').length ) {
        $('.page-id-11030 .payment_box.payment_method_authorize_net_cim_credit_card').trigger('change');
    }
    // Remove special character from the checkout form
    if ( $('.page-id-11030.woocommerce-checkout').length ) {
        $('.page-id-11030.woocommerce-checkout .input-text').keypress( function(e) {
            if ( e.which == 124 ) { return false; } // Pipe '|' character
        });
    }
    // Add eWay site seal
    if ( $('.page-id-11030.woocommerce-order-pay').length && $('#eway_credit_card_form').length ) {
        $('.page-id-11030.woocommerce-order-pay #main .fusion-fullwidth .fusion-row .woocommerce').before('<div id="eWAYBlock"><div><a href="http://www.eway.com.au/secure-site-seal?i=12&s=7&pid=fc562bc2-11bc-4649-a740-1bc7e7fd2809" title="eWAY Payment Gateway" target="_blank" rel="nofollow"><img alt="eWAY Payment Gateway" src="https://www.eway.com.au/developer/payment-code/verified-seal.ashx?img=12&size=7&pid=fc562bc2-11bc-4649-a740-1bc7e7fd2809" /></a></div></div>');
    }

    // Function to check if the customer's browser is on private mode (ios)
    function getPrivateMode () {
        private_mode = false;
        try { sessionStorage.setItem( '.', '.' ); }
        catch ( error ) {
            if ( error.code === DOMException.QUOTA_EXCEEDED_ERR ) {
                private_mode = true;
            }
        }
        return private_mode;
    }

    // CS landing page coin flip
    $('.hover').hover(function(){
            $(this).addClass('flip');
        },function(){
            $(this).removeClass('flip');
    });
    // Try it free form overlay on click function
    $('.try-it-free').on( 'click', function() {
        $('#form-overlay-container').fadeIn(400);
    });
    // Close overlay form in pages except comp segments fb
    if (window.location.href.indexOf("complimentary-segments-fb") === -1) {
        $('#form-overlay-container').click( function(e){
            if ( e.target !== this ) {
                return;
            } else {
                $('#form-overlay-container').fadeOut("fast");
            }
        });
    }
    // Smooth scrolling to FAQ section on the pricing page
    $("a#faq-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#access-now-faq").offset().top
        }, 2000);
    });
    // Sign up here link on the login page
    if (window.location.href.indexOf("my-canity") > -1) {
        $('#customer_login').prepend('<p class="new-to-canity">Don&rsquo;t have an account yet? Get access <a href="/explore-licencing/">here</a></p>');
        // Upper content on login page
        $('form.login').prepend('<p class="admin-heading"> Admin</p><hr><p class="admin-text">Log in to schedule training and view results</p>');
        // Lower box on login page
        $('#customer_login').after('<div class="staff-text-login"> Not an administrator? Log in to your <a href="/user-dashboard/">User Dashboard</a></div>');
        if( $( '#customer_login' ).length ) {
            $('#main').append( '<img id="admin-login-bottom-img" src="/wp-content/uploads/2019/06/admin-dashboard-login-bottom-banner.png">' );
        }
    }
    //Forgot password image on admin page
    if (window.location.href.indexOf( "lost-password" ) > -1 ) {
        if( $( '.lost_reset_password' ).length ) {
            $( '.lost_reset_password' ).prepend( '<div class="admin-lost-password-confused-guy"><img src="/wp-content/uploads/2019/06/admin-lost-password-guy.png"></div>');
            $( '.lost_reset_password' ).prepend( '<h2 class="text-center white forgot-password-admin-header">Lost Password?</h2>');
            $( '#main' ).append( '<img id="admin-login-bottom-img" src="/wp-content/uploads/2019/06/admin-dashboard-login-bottom-banner.png">' );
        }
    }
    // Search box for staff FAQ page
    function searchBox( box_id, parent_container, child_container, element_toggle ) {
        //$( box_id ).keyup(function() {
        $( box_id ).on('blur change keyup paste', function(event)  {
            // Trigger a click on the Show All Tab
            if ( $(".faqSearch-2").length ) {
                $('#tabs li.show-all').addClass('active').trigger('click');
            }
            var value = this.value.toLowerCase();
            $( parent_container ).find( child_container ).each(function(index) {
                var id = $(this).find( element_toggle ).text().toLowerCase();
                $(this).toggle(id.indexOf(value) !== -1);
            });
        });
    }
    // FAQ search
    if ( $("#faqSearch").length ) {
        searchBox( "#faqSearch", "#post-22307, #post-26114, #post-31629, .page-id-31629", ".fusion-panel", ".panel-heading, .panel-body" );
    }
    if ( $(".faqSearch-2").length ) {
        searchBox( ".faqSearch-2", "#post-20717, #post-37626, .page-id-20717, .page-id-39707, .page-id-37626, .page-id-43175, .page-id-26599, .page-id-43556, .page-id-47250, .page-id-27078", ".fusion-panel", ".panel-heading, .panel-body" );
    }

    // FAQ Tabs section for Canity FAQ, How it Works and My Canity Support FAQ

    if ( $(".faqSearch-2").length ) {

        // Display all FAQ by default
        $('.tab-content').addClass('active');

        // Add active class to Show All button
        $('#tabs li.show-all').addClass('active');

        // Switch between active classes depending on which tab is selected
        $('#tabs li').click(function() {
            $('#tabs .active').removeClass('active');
            var tab = $(this).addClass('active').data('tab-content');
            $('.tab-content.active').removeClass('active');
            $('.tab-content[data-tab-content='+tab+']').addClass('active');
        });

        //Set all FAQ to display when Show all is clicked
        $('#tabs li.show-all').click(function() {
            $('.tab-content').addClass('active');
        });

    }
    // Function opposite of scrollTop
    $.fn.scrollBottom = function() {
        return $(document).height() - this.scrollTop() - this.height();
    };
    // Blog subscribe CTA
    var showedCta = false;
    $(window).on('scroll', function() {
        var scrollPositionTop = $(this).scrollTop();
        var scrollPositionBottom = $(this).scrollBottom();
        if ( !showedCta && scrollPositionTop >= 1000) {
            $('#subscribe-to-blog').animate({ 'bottom' : '0px' }, 200);
            // The function is only supposed to fire once
            showedCta = true;
        } else if ( scrollPositionBottom <= 600 ) {
            $('#subscribe-to-blog').animate({ 'bottom' : '-100px' }, 200);
        } else if ( scrollPositionTop <= 1000 ) {
            showedCta = false;
        }
    });
    // SVG animations
    function AJAX_JSON_Req( url, w, h, fps ) {
        AJAX_req = new XMLHttpRequest();
        AJAX_req.open( "GET", url, true );
        AJAX_req.setRequestHeader( "Content-type", "application/json" );
        AJAX_req.onreadystatechange = function() {
            if ( AJAX_req.readyState == 4 && AJAX_req.status == 200 ) {
                json = JSON.parse( AJAX_req.responseText );
                comp = new SVGAnim( json, w, h, fps );
            }
        };
        AJAX_req.send();
    }
    var anim_pages = [ "training-modules" ];
    for ( var i = 0; i < anim_pages.length; i++ ) {
        if ( window.location.href.indexOf( anim_pages[i] ) > -1 ) {
            // coming soon page svg animation
            if ( $('#coming-soon').length ) {
                AJAX_JSON_Req( CONTROLLER_LIB_PATH + "/js/svg_animations/coming_soon/coming_soon.json", 600, 300, 24 );
            }
            // training modules page svg animation
            else if ( $('#join-us').length ) {
                AJAX_JSON_Req( CONTROLLER_LIB_PATH + "/js/svg_animations/join_us/join_us.json", 338, 204, 30 );
            }
        }
    }
    // Multiline ellipsis
    if ( $('.multiline-ellipse-text').length ) {
        $('.multiline-ellipse-text').each( function( e ) {
            var parent_container = $( this ).parent().parent();
            var title_container = $( this ).parent().parent().find('h3');
            var textContainerHeight = parent_container.height() - ( parseInt( parent_container.css('padding-top'), 10 ) + parseInt( parent_container.css('padding-bottom'), 10 ) ) - title_container.height();
            var $ellipsisText = $( this );

            while ( $ellipsisText.outerHeight( true ) > textContainerHeight ) {
                $ellipsisText.text( function( index, text ) {
                    return text.replace(/\W*\s(\S)*$/, '...');
                });
            }
        });
    }
    // Hover over on the new training module page
    $('.tm-main-content-img-wrapper').on('mouseenter', function() {
        $( this ).find('.tm-main-content-img-hvr').stop().fadeIn(200 , function(){
            $( this ).find('.tm-main-content-img-hvr-text').animate({
                left: '0%',
                opacity: '1'
            }, 100, "linear");
            $( this ).find('i.fa').animate({
                right: '-5%',
                opacity: '1'
            }, 100, "linear");
        });
    }).on('mouseleave', function() {
        $( this ).find('.tm-main-content-img-hvr').stop().fadeOut(200, function(){
            $( this ).find('.tm-main-content-img-hvr-text').css({
                left: '-35%',
                opacity: '0'
            });
            $( this ).find('i.fa').css({
                right: '-20%',
                opacity: '0'
            });
        });
    });
    // New canity home page video set up
    $('#home-video-hero .play-video').on('click', function(){
        $('.laptop-container').append('<div id="home-hero-player"><span style="color:#fff;margin-left:5px;">Loading...</span></div>');
        jwplayer("home-hero-player").setup({
            file: 'https://www.canity.com/wp-content/uploads/2016/03/Why_Canity.mp4',
            image: 'https://www.canity.com/wp-content/uploads/2016/07/why-canity-thumbnail.jpg',
            width: "97%",
            aspectratio: "16:9",
            title: "Why Canity"
        });
        jwplayer("home-hero-player").play();
        jwplayer("home-hero-player").on('play',function(event){
            dataLayer.push({'event': 'onplay'});
        });
        jwplayer("home-hero-player").on('complete', function(event){
            dataLayer.push({'event': 'oncomplete'});
        });
    });
    // Livechat
    $('.live-chat').on('click', function( e ) {
        e.preventDefault();
        LC_API.open_chat_window();
    });
    // Module Landing Page player
    if ( $('#mlp-top-container').length ) {
        $('.mlp-list-options li').hover(
            function() {
                $( this ).find('.jw-plist-item-hover').show();
                if ( ! $( this ).hasClass('playing') ) {
                    $( this ).addClass('active');
                }
        }, function() {
                $( this ).find('.jw-plist-item-hover').hide();
                if ( ! $( this ).hasClass('playing') ) {
                    $( this ).removeClass('active');
                }
        });
        $('.mlp-list-options li').not('.disabled').on('click', function(){
            $('.mlp-list-options li').removeClass('active playing');
            $( this ).addClass('active playing');
            if ( $( this ).find( '.play-btn' ).hasClass( 'active' ) ) {
                $( this ).find( '.play-btn' ).removeClass( 'active' );
                jwplayer('mlp-player').pause();
            } else {
                $( '.play-btn' ).removeClass('active');
                $( this ).find( '.play-btn' ).addClass('active');
                var playItem = $( this ).find('.jw-plist-item').attr( 'data-video' );
                jwplayer( 'mlp-player' ).playlistItem( playItem );
            }
        });
        if ( $('#mlp-player').length ) {
            jwplayer( 'mlp-player' ).on('complete', function(e){
                $( '.play-btn' ).removeClass('active');
                var playIndex = jwplayer( 'mlp-player' ).getPlaylistIndex();
                $( '.mlp-list-options li.playable .jw-plist-item-hover i.fa').removeClass('fa-pause').addClass('fa-play');
                if ( playIndex === jwplayer('mlp-player').getPlaylist().length - 1 ) {
                    $('.mlp-video-cta').show();
                }
            });
            jwplayer( 'mlp-player' ).on('pause', function(e){
                $( '.mlp-list-options li.playable .jw-plist-item-hover i.fa' ).removeClass('fa-pause').addClass('fa-play');
            });
            jwplayer( 'mlp-player' ).on('idle', function(e){
                $( '.mlp-list-options li.playable .jw-plist-item-hover i.fa' ).removeClass('fa-pause').addClass('fa-play');
                $( '.mlp-list-options li.playable' ).removeClass('active playing');
            });
            jwplayer( 'mlp-player' ).on('play', function(e){
                var playIndex = jwplayer( 'mlp-player' ).getPlaylistIndex();
                $( '.mlp-list-options li.playable' ).removeClass('active playing');
                $( '.jw-plist-item-hover[data-index="'+ playIndex +'"]' ).closest('li.playable').addClass('active playing');
                $( '.jw-plist-item-hover[data-index="'+ playIndex +'"]' ).find( '.play-btn' ).addClass('active');
                $( '.jw-plist-item-hover[data-index="'+ playIndex +'"]' ).find('i.fa').removeClass('fa-play').addClass('fa-pause');
                $('.mlp-video-cta').hide();
            });
        }
    }
    // Disable playlist on customer personality types and online chat skills page
    $('.page-id-25956 ul#tms-list-options li:nth-child(2) .jw-plist-item-hover, .page-id-25956 ul#tms-list-options li:nth-child(3) .jw-plist-item-hover').remove();
    // Upgrade - hide all woocommerce subscription options and append our own.
    if ( $( '.postid-20927.logged-in' ).length || $( '.postid-37624.logged-in' ).length || $( '.postid-39633.logged-in' ).length || $( '.postid-41523.logged-in' ).length ) {
        var subscription_key = getParameterByName( 'switch-subscription' );
        if ( subscription_key ) {
            // Get the pricing table html
            $.ajax({
                type: "POST",
                dataType: "text",
                async: false,
                data: { 'subscription_key' : subscription_key },
                url: CONTROLLER_LIB_PATH + "/get-upgrade-option.php",
                success: function( data ) {
                    $( '#content' ).prepend( data );
                },
                error: function ( xhr, ajaxOptions, thrownError ) {
                    console.log( thrownError );
                }
            });
            // Simulate select and click on woocommerce form with our own UI
            $( '.postid-20927.logged-in, .postid-37624.logged-in, .postid-39633.logged-in, .postid-41523.logged-in' ).on( 'click', '.upgrade-now-button', function( e ) {
                e.preventDefault();
                // Reset all quantity back to 0
                $( '.cart .quantity input.qty' ).val( 0 );
                // Get the product id
                var product_id = $( this ).attr( 'data-product' );
                // Add 1 to the quantity on the page
                $( '.cart .quantity input.qty[name="quantity[' + product_id  + ']"]' ).val( 1 );
                $( 'button.single_add_to_cart_button' ).click();
            });
        }
    }

    // Full height
    function fullHeight() {
        var winHeight = $(window).height(),
                NAV_HEIGHT = 90,
                MIN_HEIGHT = 732,
                LOGOS_HEIGHT = 172;

        var offset = winHeight > MIN_HEIGHT ? ( LOGOS_HEIGHT + NAV_HEIGHT ) : NAV_HEIGHT;
            $('.full-height').css( 'height', winHeight - offset );
    }
    $(window).on('resize', function(){
        fullHeight();
    });
    fullHeight();

    // Home hero V4 jwplayer setup
    if ( $('#home-hero-player-v4').length ) {
        jwplayer('home-hero-player-v4').setup({
            file: UPLOAD_DIR + '/2017/03/What-is-Canity-A-New-Intro-March-2017-600x338.mp4',
            image: UPLOAD_DIR + '/2016/12/home-video-thumb.jpg',
            width: "100%",
            aspectratio: "16:9",
            title: "Why Canity",
            displaytitle: false,
            tracks:  [{
                file: "/wp-content/uploads/2018/09/what-is-canity-english.vtt",
                label: "English",
                kind: "captions",
            },{
                file: "/wp-content/uploads/2018/09/what-is-canity-mandarin.vtt",
                kind: "captions",
                label: "Chinese"
            }]
        });
    }
    // How it works hero V4 jwplayer setup
    if ( $('#canity-video-more').length ) {
        jwplayer('canity-video-more').setup({
            file: UPLOAD_DIR + '/2019/05/canity-explainer-v2.mp4',
            image: UPLOAD_DIR + '/2019/08/how-it-works-main-video-thumbnail.jpg',
            width: "100%",
            aspectratio: "16:9",
            title: "Why Canity",
            displaytitle: false
        });
    }

    if ( $('hiw-video-player').length){
        jwplayer('hiw-video-player').setup({
            file:  UPLOAD_DIR + '/2018/08/Spaced-Repetition.mp4',
            image: UPLOAD_DIR + '/2018/07/why-canity-works-thumbnail.jpg',
            width: "100%",
            aspectratio: "16:9",
            title: "Canity Explains - Spaced Repetition",
            displaytitle: false
        });
    }
    if ( $('#microlearning-video-player').length){
        jwplayer('microlearning-video-player').setup({
            file:  UPLOAD_DIR + '/2019/04/Canity-Microlearning-2019.mp4',
            image: UPLOAD_DIR + '/2019/04/microlearning.jpg',
            width: "100%",
            aspectratio: "16:9",
            title: "Canity Explains - Microlearning",
            displaytitle: false
        });
    }

    // Home page video player
    if( $('#home-hero-player-v4').length ){
        $('.play-video-v4, #watch-again').on('click', function(e){
            e.preventDefault();
            if ( $('.video-cta').length && $('.video-cta').is(':visible') ) {
                $('.video-cta').hide();
            }
            var videoId = $(this).closest('.canity-video').find('.jwplayer').attr('id');
            jwplayer(videoId).play();
            dataLayer.push({'event': 'onplay'});
        });
        jwplayer().on('play',function(){
            $('.play-video-v4').addClass('play-btn-animation');
            $( '.play-video-v4' ).toggle();
            $('#video-thumbnail').hide();
            if ( $('.hiw-video').length ) {
                $('#hiw-video-cta').hide();
                $('#hiw-main-thumbnail').hide();
            }
        });
        jwplayer().on('idle',function(){
            if ( $('.hiw-video').length ) {
                $('#hiw-video-cta').show();
            }
            $('.play-video-v4').removeClass('play-btn-animation');
            $( '.play-video-v4' ).hide();
        });
        jwplayer().on('pause',function(){
            $('.play-video-v4').show().removeClass('play-btn-animation');
            $( '.play-video-v4' ).show();
        });
        jwplayer().on('ready',function(){
            $('.play-video-v4').fadeIn(200);
        });
        jwplayer().on('complete',function(){
            $('.play-video-v4').hide();
            $('.video-cta').fadeIn(200);
            $('#video-thumbnail').show();
        });
    }

    // How it works page scroll
    $('.multiscroll').on('click', function(){
        // Smooth scroll
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 90
        }, 600);
        return false;
    });

    // Update the menu text when logged in
    if ( $( '.logged-in li#menu-item-26784 .menu-text' ).length ) {
        $( '.logged-in li#menu-item-26784 .menu-text' ).text( 'MyCanity' );
    }
    // Update the manage payment details page
    if ( window.location.href.match( 'change_payment_method' ) ) {
        $( 'ul.payment_methods li div.payment_box.payment_method_authorize_net_cim_credit_card' ).css({ 'padding':'5px 10px 15px 10px','margin':'15px 0px' });
        $( '.page-id-11030.woocommerce-checkout' ).on( 'change click', '.woocommerce', function( e ) {
            // Body
            $( 'body.page-id-11030.woocommerce-checkout' ).css({ 'height':'100%' });
            $( 'body.page-id-11030.woocommerce-checkout div.fusion-one-full' ).css({ 'margin-bottom':'0px' });
            // Woocommerce message
            $( 'div.woocommerce-info' ).css({ 'color':'#747474','font-size':'12px','margin-bottom':'20px' }).show();
            // Order summary
            $( 'table.shop_table' ).hide();
            // Manage payment link
            $( 'div.payment_box.payment_method_authorize_net_cim_credit_card a.button' ).hide();
            $( 'ul.payment_methods div.authorize-net-logo' ).css({ 'margin-top':'5px' });
            // Payment box
            $( 'ul.payment_methods' ).css({ 'padding-left':'0px' });
            $( 'ul.payment_methods li' ).css({ 'list-style':'none','margin-bottom':'10px' });
            $( 'ul.payment_methods li div.payment_box.payment_method_authorize_net_cim_credit_card, ul.payment_methods li div.payment_box.payment_method_eway' ).css({ 'background-color':'#f6f3f3','padding':'5px 10px 15px 10px','margin':'15px 0px' });
            $( 'ul.payment_methods label' ).css({ 'color':'#3584b8' });
            // eWay
            $( 'div.payment_box.payment_method_eway p:not(.form-row)' ).hide();
            $( 'div.payment_box.payment_method_eway p.form-row' ).css({ 'margin-bottom':'0px' });
            // Hide eWay, Stripe and PayPal options for now
            $( 'input#payment_method_eway' ).parent( 'li' ).hide();
            $( 'input#payment_method_stripe' ).parent( 'li' ).hide();
            $( 'input#payment_method_paypal' ).parent( 'li' ).hide();
            // Submit button
            $( 'input#place_order' ).attr( 'value', 'Update Payment Method' ).attr( 'data-value', 'Update Payment Method' ).css({ 'margin-top':'10px' });
        });
    }

    // About Us Canity in the News Slider
    if ( $('.canity-in-the-news-slider').length ) {
        $('.canity-in-the-news-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '<div class="canity-news-arrow right"><i class="fa fa-caret-right" aria-hidden="true"></i></div>',
            prevArrow: '<div class="canity-news-arrow left"><i class="fa fa-caret-left" aria-hidden="true"></i></div>',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        dots: false
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                }
            ]
        });
    }

    if ( $( '.module-carousel-lp' ).length ) {
        var scroll_element = '.slick-list.draggable';
        // Only show the slider once initialised (must be placed before the cactual initialisation)
        $( '.module-carousel-lp' ).on( 'init', function( event, slick, currentSlide ) {
            $( '.module-carousel-lp' ).show();
        });
        // Initialise slick/carousel
        $( '.module-carousel-lp' ).slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
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
            if ( $( '.module-carousel-lp' ).slick( 'slickCurrentSlide' ) !== 0 ) {
                $( '.module-carousel-lp' ).slick( "slickGoTo", 0 );
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
                $( '.module-carousel-lp' ).slick( "slickGoTo", scroll_position );
                $( '.module-carousel-lp' ).slick( "slickNext" );
                $( scroll_element ).scrollLeft( 0 );
            }
        });
    }

    // User Account Slider on User Management Page
    if ( $('.user-account-preview-slider').length ) {

        $('.modal').on('shown.bs.modal', function (e) {
            $('.user-account-preview-slider').slick('setPosition');
            $('.wrap-modal-slider').addClass('open');
        });
        $('.user-account-preview-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<div class="canity-news-arrow right"><i class="fa fa-caret-right" aria-hidden="true"></i></div>',
            prevArrow: '<div class="canity-news-arrow left"><i class="fa fa-caret-left" aria-hidden="true"></i></div>',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        dots: false
                    }
                }
            ]
        });
    }

    //Logo Carousel
    if ( $('.logos-carousel').length ) {
        $('.logos-carousel').on('init', function(){
            $('.spinner').fadeOut(200);
            $('.logos-carousel-wrapper').css({ 'visibility': 'visible', 'position': 'relative' });
        }).slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: $('#lp-logos').length ? 7 : 9,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        autoplay: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        autoplay: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        autoplay: true,
                        dots: false
                    }
                }
            ]
        });
    }

    //Manually set the active slide

    function slideCountCheck(  ) {
        activeSlide = 0;

        if( $( '.module-carousel-container .slick-active' ).length == 3 ) {
            activeSlide = 1;
        } else if( $( '.module-carousel-container .slick-active' ).length == 5 ) {
            activeSlide = 2;
        } else if( $( '.module-carousel-container .slick-active' ).length == 7 ) {
            activeSlide = 3;
        }
        return( activeSlide );
    }

    function initialiseHomepageSlider( autoPlay ) {
        $( '.module-carousel' ).on( 'init', function(){
            $( '.spinner' ).fadeOut( 200 );
            $( '.module-carousel-wrapper' ).css( { 'visibility': 'visible', 'position': 'relative' } );
        }).slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1,
            centerPadding: 0,
            centerMode: true,
            swipeToSlide: true,
            accessibility: true,
            nextArrow: '<div class="module-carousel-arrow right"><i class="fa fa-caret-right" aria-hidden="true"></i></div>',
            prevArrow: '<div class="module-carousel-arrow left"><i class="fa fa-caret-left" aria-hidden="true"></i></div>',
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    function gotoSlideSlick( slideNumber ) {
        if( slideNumber !== undefined ) {
            $( '.module-carousel' ).slick( 'slickSetOption', 'slidesToScroll', 1, true );
            $( '.module-carousel' ).slick( 'slickGoTo', slideNumber, true );
            $( '.module-carousel' ).slick( 'slickSetOption', 'slidesToScroll', 3, true );
        }
    }

    // Canity Home Page Modules carousel
    var slideToScrollTo;
    if ( $( '.module-carousel' ).length ) {
        var modules = {
            'phone-skills'                          : "Teach your team all the dos and don’ts of business phone etiquette",
            'dealing-with-difficult-customers'      : "Discover why dealing with difficult customers doesn’t have to be so difficult",
            'customer-personality-types'            : "Learn to differentiate between all the different customer personality types",
            'email-skills'                          : "How, when, what, why – learn to send emails like a pro",
            'sales-skills'                          : "Master the fundamental skills to turn prospects into loyal customers",
            'retail-skills'                         : "Explore the essential skills required for retail customer service",
            'online-chat-skills'                    : "Learn how to handle complaints and queries via online chat",
            'presentation-skills'                   : "Grow the skills to present professionally and engage with any audience",
            'reception-skills'                      : "Train your team to impress every visitor walking through your doors",
            'dealing-with-anxious-customers'        : "Discover how to identify, empathise with and reassure anxious customers",
            'dealing-with-disappointed-customers'   : "Master the skills required to turn disappointed customers into raving fans",
            'dealing-with-rude-customers'           : "Learn to explain your stance, hold your ground and handle rude customers",
            'dealing-with-happy-customers'          : "Teach your team how to turn happy customers into loyal advocates",
            'interview-skills'                      : "Learn when and how to ask the right questions to find the right candidate",
            'the-art-of-small-talk'                 : "Discover the techniques you can use to confidently converse with customers",
            'hospitality-restaurant-skills'         : "Teach your team the key skills required to survive in the world of hospitality",
            'workplace-behaviours'                  : "Understand what is and isn’t appropriate workplace behaviour",
            'delivering-internal-customer-service'  : "Learn how to provide great customer service to your co-workers",
            'do-your-customers-trust-you'           : "Discover how trust is earned, the reasons it falls apart and how it’s regained",
            'saving-customer-cancellations'         : "Understand why customers leave and the steps required to save them",
            'health-at-work'                        : "Learn how to build healthy work habits",
            'safety-at-work'                        : "Learn what hazards are and how to spot them",
            'covid-19-safety'                       : "Learn what COVID-19 is and how to reduce the risk of infection",
            'video-conferencing-etiquette'          : "Learn strategies to keep your video conferencing productive and respectful",
            'time-management-at-work'               : "Find out why Time Management is vital for achieving your goals in business"
        };

        if( $( '#hero-v4').length && $( '.module-carousel' ).length && window.location.search.indexOf('module_set=') > -1 ) {
            var moduleSet = getParameterByName( 'module_set' );

            if( moduleSetArray[ moduleSet ] !== undefined ) {
                $( '.module-carousel #' + moduleSetArray[ moduleSet ][ 2 ]  ).prependTo( '.module-carousel' );
                $( '.module-carousel #' + moduleSetArray[ moduleSet ][ 1 ]  ).prependTo( '.module-carousel' );
                $( '.module-carousel #' + moduleSetArray[ moduleSet ][ 0 ]  ).prependTo( '.module-carousel' );
                initialiseHomepageSlider( false );
                slideToScrollTo = 0;
            } else{
                initialiseHomepageSlider( true );
            }
        } else {
            initialiseHomepageSlider( true );
        }

        // Change content based on what slide is in focus
        $( '.module-carousel-container' ).on( 'afterChange', function( event, slick, currentSlide, nextSlide ){
            var activeSlide = slideCountCheck();
            var currentModule =  $( '.module-carousel-container .slick-active:eq(' + activeSlide + ')' ).attr( 'id' );
            var currentModuleDescription = modules[ currentModule ];

            // Hide default image
            $( '.home .gradient-background .header-image-container video' ).addClass( 'hide' ).fadeOut();
            // Changes background image and gradient
            var activeSlideId = $( '.module-carousel-container .slick-active:eq(' + activeSlide + ')' ).attr( 'id' );
            $( '.header-container' ).attr( 'id', activeSlideId );
            $( '.header-image-container' ).attr( 'id', activeSlideId );
            // Changes module heading and description
            $( '.homepage-header' ).html( $( '.module-carousel-container .slick-active:eq(' + activeSlide + ')' ).attr( 'title' ) );
            $( '.homepage-sub' ).text( currentModuleDescription );
        });
    }

    if( $( '#hero-v4').length && $( '.module-carousel' ).length && window.location.search.indexOf('module_name=') > -1 ) {
        var moduleName, moduleIndex;
        moduleName = getParameterByName( 'module_name' );

        if( $( '.slick-slide' ).length ) {
            $( '.slick-slide' ).each( function() {
                if( $( this ).is( "#" + moduleName ) ) {
                    moduleIndex =  $(this).attr( 'data-slick-index' );
                    $( '.module-carousel' ).slick( 'slickSetOption', 'slidesToScroll', 1, true );
                    $( '.module-carousel' ).slick( 'slickGoTo', moduleIndex -1, true );
                    $( '.module-carousel' ).slick( 'slickSetOption', 'slidesToScroll', 3, true );
                    $( '.module-carousel' ).slick( 'slickPause' );
                }
            });
        }
    }

    if( slideToScrollTo !== undefined ) {
        gotoSlideSlick( slideToScrollTo );
    }

    // New multi-steps checkout page
    if ( $( ".woocommerce-checkout" ).length ) {
        // Move the order review and coupon field to the correct position
        if ( $( "#customer_details .col-2 .woocommerce-shipping-fields" ).length ) {
            $( ".shop_table.woocommerce-checkout-review-order-table" ).appendTo( '#customer_details .col-2 .woocommerce-shipping-fields' );
            $( ".woocommerce-content-box.full-width.checkout_coupon" ).prependTo( '#customer_details .col-2 .woocommerce-shipping-fields' );
        }
        // Display the coupon field on click
        $( ".woocommerce-side-nav.woocommerce-checkout-nav li:nth-child(2) a, a.button.continue-checkout, a.woocommerce-remove-coupon" ).on( 'click', function() {
            if ( ! $( "tr.cart-discount" ).length ) {
                if ( $( ".woocommerce-content-box.full-width.checkout_coupon" ).attr( 'style' ) != 'display: inline-block !important' ) {
                    $( ".woocommerce-content-box.full-width.checkout_coupon" ).attr( 'style', 'display: inline-block !important' );
                }
            }
        });
        $(".woocommerce-side-nav.woocommerce-checkout-nav").prepend( '<h4 class="checkout-form-header"></h4>' );

        var form_header = {
            'logged-in' : {
                'col-1'         : '<strong>STEP 1</strong>: Review Your Billing Details',
                'col-2'         : '<strong>STEP 2</strong>: Review Your Order Details',
                '#order_review' : '<strong>STEP 3</strong>: Confirm Your Payment Details'
            },
            'logged-out' : {
                'col-1'         : '<strong>STEP 1</strong>: Create Your Canity Account and Set Your Password',
                'col-2'         : '<strong>STEP 2</strong>: Review Your Order Details',
                '#order_review' : '<strong>STEP 3</strong>: Confirm Your Payment Details'
            }
        };
        // Event trigggered by the hack on main.min.js
        $( "body" ).on( 'checkout-tab-change', function() {
            $( "#wc-authorize-net-cim-credit-card-account-number_field, #wc-authorize-net-cim-credit-card-expiry_field, #wc-authorize-net-cim-credit-card-csc_field" ).removeClass( 'woocommerce-invalid woocommerce-invalid-required-field' );
            var data_name = $( ".woocommerce-checkout li.active a" ).attr( "data-name" );
            if ( data_name ) {
                // Testimonial
                var testimonial_name = data_name.replace( '#', '' );
                if ( $( ".testimonial-container." + testimonial_name ).length && $( ".testimonial-container." + testimonial_name ).css( 'display' ) != 'block' ) {
                    $( ".testimonial-container:not(." + testimonial_name + ")" ).css( 'display', 'none' );
                    $( ".testimonial-container." + testimonial_name ).css( 'display', 'block' );
                }
                // Form header
                if ( $( ".woocommerce-checkout.logged-in" ).length ) {
                    var checkout_form_header = $( ".checkout-form-header" );
                    if ( form_header['logged-in'][data_name] ) {
                        checkout_form_header.html( form_header['logged-in'][data_name] );
                    }
                    else {
                        if ( form_header['logged-out'][data_name] ) {
                            checkout_form_header.html( form_header['logged-out'][data_name] );
                        }
                    }
                }
            }
            // Full screen checkout form
            var min_height = $( window ).height() - $( ".fusion-header-v1" ).height() - $( ".fusion-footer-copyright-area" ).height();
            if ( parseInt( $( "#checkout-form" ).css( "min-height" ).replace('px', '') ) != parseInt( min_height ) ) {
                $( "#checkout-form" ).css( "min-height", min_height );
            }
            // Testimonial top margin
            var margin_top = parseInt( $( "#checkout-testimonial" ).css( "margin-top" ) );
            margin_top = 100;

            if ( parseInt( $( "#checkout-testimonial" ).css('margin-top') ) != parseInt( margin_top ) ) {
                $( "#checkout-testimonial" ).css( "margin-top", margin_top  );
            }
        });
        $( "body" ).trigger( "checkout-tab-change" );
        // Checkout step label
        var label = {
            'logged-in'  : [ 'BILLING DETAILS', 'REVIEW', 'PAYMENT' ],
            'logged-out' : [ 'CREATE ACCOUNT',  'REVIEW', 'PAYMENT' ]
        };
        for ( var step = 0; step < 3; step++ ) {
            var el_label = $( ".woocommerce-side-nav.woocommerce-checkout-nav li:nth-child(" + ( step + 2 ) + ")" );
            var el_label_link = $( ".woocommerce-side-nav.woocommerce-checkout-nav li:nth-child(" + ( step + 2 ) + ") a" );

            // el_label.prepend( '<span class="checkout-step-label">' + (step + 1) + '</span>' );
            el_label.prepend( '<div class="cs-menu-circle-outer"><div class="cs-menu-circle-inner"></div></div>' );
            if ( $( ".woocommerce-checkout.logged-in" ).length ) {
                el_label_link.html( label['logged-in'][step] );
            }
            else {
                el_label_link.html( label['logged-out'][step] );
            }
        }
        // Add a "selection" link to the checkout menu
        if( document.referrer.indexOf( "checkout-selection" ) >= 0  ) {
            $( '.woocommerce-side-nav.woocommerce-checkout-nav' ).prepend( '<li id="selection-page-div"><div class="cs-menu-circle-outer"><div class="cs-menu-circle-inner"></div></div><a data-name="col-1" href="#" style="display: inline-block;">SELECTION</a></li>' );
            if ( $( '#selection-page-div' ).length ) {
                var checkoutSelectionPage = getCookie( 'cs-link' );

                var checkoutSelectionPageURL = '';
                if ( checkoutSelectionPage.length > 0 ) {
                    checkoutSelectionPageURL = checkoutSelectionPage;
                } else {
                    checkoutSelectionPageURL = '/checkout-selection/?module_name=all-access';
                }
                $( '#selection-page-div' ).on( 'click', function() {
                    window.location = checkoutSelectionPageURL;
                });
                $( '#customer_details a[data-name="col-2"]' ).after( '<a href="' + checkoutSelectionPageURL + '" class="fusion-button button-default button-medium button default medium prev-checkout">PREVIOUS</a>' );
            }
        }

        $(".woocommerce-side-nav.woocommerce-checkout-nav li a").css( 'display', 'inline-block' );
        // Update coupon section
        $( ".checkout_coupon h2.promo-code-heading" ).html( 'Have a coupon? <a href="#" class="show-coupon">Click here to enter your code</a>' );
        // Show coupon
        $( ".show-coupon" ).on( 'click', function() {
            if ( $( ".woocommerce-checkout .woocommerce .checkout_coupon .coupon-contents" ).attr( "style") != 'display: block !important' ) {
                $( ".woocommerce-checkout .woocommerce .checkout_coupon .coupon-contents" ).attr( "style", "display: block !important" );
            } else {
                $( ".woocommerce-checkout .woocommerce .checkout_coupon .coupon-contents" ).attr( "style", "display: none !important" );
            }
        });
        // Add the click event for the step label
        $( "ul.woocommerce-side-nav.woocommerce-checkout-nav li span.checkout-step-label" ).on( 'click', function() {
            $( this ).next( 'a' ).trigger( 'click' );
        });
        // Hide the coupon code heading on click
        $( "input[name='apply_coupon']" ).on( 'click', function() {
            $( "h2.promo-code-heading" ).hide();
        });
        // Update the continue button text
        $( ".col-1 a[data-name='col-2'], .col-2 a[data-name='#order_review']" ).text( "NEXT" );
        // Add the previous button
        $( ".col-2 a[data-name='#order_review']" ).after( '<a data-name="col-1" href="#" class="fusion-button button-default button-medium button default medium continue-checkout">PREVIOUS</a>' );
        // No payment required
        if ( $( ".woocommerce-checkout-payment ul li" ).length === 0 ) {
            $( ".woocommerce-checkout-payment ul li" ).prepend( '<div class="no-payment">No payment required</div>' );
        }
    }

    // Get or set cookies on checkout page only
    if (window.location.href.indexOf('checkout') > -1) {
        // If user is already logged in - DO NOT save/get cookies
        if ( ! $( '.woocommerce-checkout.logged-in' ).length ) {
            var contact_fields = [
                'billing_first_name',
                'billing_last_name',
                'billing_company',
                'billing_email',
                'billing_phone',
                'billing_address_1',
                'billing_address_2',
                'billing_city',
                'billing_state',
                'billing_postcode',
                'billing_country'
            ];

            if ( getCookie('billing_address_cookie') ) {
                $('#billing_address_google_field .input-text').val(getCookie('billing_address_cookie'));
            }

            for ( var j = 0; j < contact_fields.length; j++ ) {
                if ( getCookie(contact_fields[j] + '_cookie' )) {
                    $('#' + contact_fields[j] ).val(getCookie( contact_fields[j] + '_cookie'));
                }
            }

            // Flag for hiding the details_billing  if #billing_address_google_field .input-text has a value
            setCookie( 'display_full_address', '1', 1, 'checkout' );

            // Set Cookies when input changes
            var exdays = 30;
            $('.woocommerce-checkout #customer_details .col-1 input,.woocommerce-checkout #customer_details .col-1 select').on('blur change keyup paste', function(event) {
                // Get the element id & value
                var billing_element_id = event.currentTarget.id;
                var billing_element_value = $(this).val();
                // Set the cookie value for the element
                if ( billing_element_id && billing_element_value ) {
                    if ( getCookie( billing_element_id + '_cookie' ) != billing_element_value ) {
                        setCookie( billing_element_id + '_cookie', billing_element_value , exdays , 'checkout');
                    }
                }
            });

            // Update Cookies if the address has been selected from google adrress drop down list
            $('body').on('chosen:updated', function() {
                if ($( '#billing_address_google_field' ).length && $( '#customer_details .col-1' ).length ) {
                    billing_element_value = $('#billing_address_google_field .input-text').val();
                    setCookie('billing_address_cookie', billing_element_value , exdays, 'checkout');

                    var address_fields = [
                        'billing_address_1',
                        'billing_address_2',
                        'billing_city',
                        'billing_state',
                        'billing_postcode',
                        'billing_country'
                    ];

                    for ( var k = 0; k < address_fields.length; k++ ) {
                        billing_element_id = address_fields[k];
                        billing_element_value = $( '#' + billing_element_id ).val();

                        if ( billing_element_id && billing_element_value ) {
                            if ( getCookie( billing_element_id + '_cookie' ) != billing_element_value ) {
                                setCookie( billing_element_id + '_cookie', billing_element_value, exdays , 'checkout');
                            }
                        }

                    }
                }
            });
        } // End check logged-in
    }

    if ( $( '.postid-20927.logged-in' ).length && $( '#subscription-switcher' ).length ) {
        $( '.fusion-header, .fusion-footer' ).hide();
        $( '.postid-20927.logged-in' ).css( { 'height':'100%' } );
        $( '.postid-20927.logged-in #main' ).css( { 'background-image':'url(/wp-content/uploads/2016/11/canity-hero-bg-v4.jpg)','background-size':'cover','height':'100%','background-color':'#66afda' } );
    }
    // Play video based on URL parameter, eg /?vid=2
    if (window.location.search.indexOf('vid=') > -1) {
        var video_id = parseInt( getParameterByName('vid') );
        if (  video_id && $('li.playable .jw-plist-item[data-video=' + video_id+ ']').length ) {
            setTimeout(function(){jwplayer().playlistItem(video_id);},2000);
        }
    }

    // Smooth scrolling
    $( '.scroll-button' ).on( 'click', function() {
        var scroll_to = $( this ).attr( 'scroll-to' );
        if ( scroll_to && $( '#' + scroll_to ).length  ) {
            $( 'html, body' ).animate({
                scrollTop: $( '#' + scroll_to ).offset().top - 90
            }, 1000 );
            return false;
        }
    });

    //Scroll to top of page when Take a Tour button is clicked
    $('#mycanity-button').click(function(){
        $(window).scrollTop(0);
    });
    // Account & view order page text changes
    if ( $( '.page-id-14193, .page-id-19801' ).length ) {
        $( '.amount' ).each( function() {
            $( this ).text( $( this ).text().replace( 'AUD', '' ) );
        });
        $( '.subscription-title' ).each( function() {
            $( this ).text( $( this ).text().replace( 'Canity Training Subscription → ', '' ) );
            $( this ).text( $( this ).text().replace( 'USD Subscription → ', '' ) );
            $( this ).text( $( this ).text().replace( 'Subscription → ', '' ) );
            $( this ).text( $( this ).text().replace( 'USD Addon → ', '' ) );
            $( this ).text( $( this ).text().replace( 'Addon → ', '' ) );
            $( this ).text( $( this ).text().replace( 'USD Module Pass → ', '' ) );
            $( this ).text( $( this ).text().replace( 'Module Pass → ', '' ) );
            $( this ).text( $( this ).text().replace( 'USD Individual Training Pass → ', '' ) );
            $( this ).text( $( this ).text().replace( 'Individual Training Pass → ', '' ) );
            $( this ).text( $( this ).text().replace( 'Lifetime Lifetime ', '' ) );
            $( this ).text( $( this ).text().replace( 'Lifetime ', '' ) );
        });
        // Hide the pay manual subscription renewal button
        if ( $( 'a.button.pay.dashboard-btn' ).length ) {
            $( 'a.button.pay.dashboard-btn' ).each( function() {
                if ( $( this ).attr( 'href' ) && $( this ).attr( 'href' ).indexOf( 'manual_subscription_renewal' ) > -1 ) {
                    $( this ).hide();
                }
            });
        }
    }

    // Remove trailing slash from the home link - https://www.canity.com/
    if ( $( 'li#menu-item-43013 a' ).length ) {
        $( 'li#menu-item-43013 a' ).attr( 'href',  $( 'li#menu-item-43013 a' ).attr( 'href' ).replace( /\/$/, "" ) );
    }
    function showUserCalculator() {
        $( '.intl-header' ).hide();
        $( '.intl-header' ).html( 'Add users now or as your team grows' ).show();
        $( '.international-pricing-option-container' ).hide();
        $( '.user-calculator-container' ).show();
    }

    function hideUserCalculator() {
        $( '.intl-header' ).hide();
        $( '.intl-header' ).html( "Get access to the entire training library!" ).show();
        $( '.user-calculator-container' ).hide();
        $( '.international-pricing-option-container' ).show();
    }

    if ( $( '#sub-upgrade-get-started' ).length ) {
        $( '#sub-upgrade-get-started' ).on( 'click', function() {
            $( '#sub-upgrade-get-started' ).toggle();
            $( '#sub-upgrade-pricing-calculator' ).toggle();
        });
    }

    if ( $( '.subscription-actions.order-actions .button.switch.dashboard-btn, .subscription-actions.order-actions .button.renew.dashboard-btn' ).length ) {
        $( '.subscription-actions.order-actions .button.switch.dashboard-btn' ).attr( 'data-href', $( '.subscription-actions.order-actions .button.switch.dashboard-btn' ).attr( 'href' ) );
        $( '.subscription-actions.order-actions .button.renew.dashboard-btn' ).attr( 'data-href', $( '.subscription-actions.order-actions .button.renew.dashboard-btn' ).attr( 'href' ) );
        $( '.subscription-actions.order-actions .button.switch.dashboard-btn' ).removeAttr( 'href' );
        $( '.subscription-actions.order-actions .button.renew.dashboard-btn' ).removeAttr( 'href' );

        if ( $( '.upgrade-sub-pricing-modal' ).length ) {
            $( '.subscription-actions.order-actions .button.switch.dashboard-btn, .subscription-actions.order-actions .button.renew.dashboard-btn' ).on( 'click', function() {
                $( ".upgrade-sub-pricing-modal" ).modal( 'show' );
            });
        } else {
            $( '.woocommerce_account_subscriptions' ).hide();
        }
    }

    if ( $( '#upgrade-sub' ).length ) {
        $( '#upgrade-sub' ).on( 'click', function() {
            $( ".upgrade-sub-pricing-modal" ).modal( 'show' );
        });
    }

    if ( $( '.cs-checkout-next' ).length ) {

        var csOldLink = getCookie( 'cs-link' );
        var csNewLink = window.location.pathname + window.location.search;

        // Set checkout selection page link
        $( '.cs-checkout-next' ).on( 'click', function()  {
            setCookie( 'cs-link', csNewLink, 3, '' );
        });
    }

    function getAddonProductsInsideMyCanity( region ) {
        var addon_products;

        if( region == 'au' ) {
            addon_products = [
                {
                    'id' : 44155, 'cost' : 15, 'limit' : 10000
                }
            ];
        } else {
            addon_products = [
                {
                    'id' : 44158, 'cost' : 15, 'limit' : 10000
                }
            ];
        }

        return addon_products;
    }

    /*
        Generate the product cart details
        --
        existing_user: total number of existing users under the customer (overwritten by base product if include_base_product is set to true)
        additional_user: total number of additional users to be added under the customer
        --
    */
    function generateProductCart( existing_user, additional_user, modulesBeingPurchased, additional_admin ) {
        // Base product and additional user product details
        var products = {
            'AU' : {
                'base_product' :
                    { 'id' : 44024, 'cost' : 500, 'limit' : 5     },
                'addon_products' : [
                    { 'id' : 44155, 'cost' : 15,  'limit' : 100   },
                    { 'id' : 44156, 'cost' : 10,  'limit' : 200   },
                    { 'id' : 44157, 'cost' : 5,   'limit' : 10000 }
                ],
                'additional_admin' :
                    { 'id' : 48083, 'cost' : 15, 'limit' : 0      },
            },
            'US' : {
                'base_product' :
                    { 'id' : 42190, 'cost' : 500, 'limit' : 5     },
                'addon_products' : [
                    { 'id' : 44158, 'cost' : 15,  'limit' : 100   },
                    { 'id' : 44159, 'cost' : 10,  'limit' : 200   },
                    { 'id' : 44160, 'cost' : 5,   'limit' : 10000 }
                ],
                'additional_admin' :
                    { 'id' : 48084, 'cost' : 15, 'limit' : 0      },
            }
        };

        if( $( '#add-more-user-modal' ).length ) {
            products[ 'AU' ][ 'addon_products' ] = getAddonProductsInsideMyCanity( 'au' );
            products[ 'US' ][ 'addon_products' ] = getAddonProductsInsideMyCanity();
        }
        var product = $( '.number-of-users' ).attr( 'data-country' ) == 'AU' ? products['AU'] : products['US'];

        // Initialise return data
        var product_cart = {
            'link'              : '',
            'base'              : { 'user' : 0, 'cost' : 0 },
            'additional'        : { 'user' : 0, 'cost' : 0 },
            'additional_admin'  : { 'user' : 0, 'cost' : 0 },
            'average'           : { 'cost' : 0 },
            'total'             : { 'user' : 0, 'cost' : 0 },
            'modules'           : ''
        };

        // Base product - from either the .default-package-price (for single module) or the base product from products variable above
        if ( $( '.default-package-price' ).length ) {
            var base_product = product['base_product'];
            if ( $( '.default-package-price' ).length && $( '.default-package-price' ).attr( 'data-id' ) && $( '.default-package-price' ).attr( 'data-price' ) ) {
                product_cart['link'] = product_cart['link'].concat( $( '.default-package-price' ).attr( 'data-id' ) + ':1' );
                product_cart['base']['cost'] = parseInt( $( '.default-package-price' ).attr( 'data-price' ) );
            } else {
                product_cart['link'] = product_cart['link'].concat( base_product['id'] + ':1' );
                product_cart['base']['cost'] = base_product['cost'];
            }
            product_cart['base']['user'] = base_product['limit'];
            existing_user = base_product['limit'];
        }

        // Overwrite existing user from max user count (on the manage user page) - excluding subscription upgrade
        if ( $( '.add-more-user' ).length && $( '#max-user-count' ).length ) {
            existing_user = parseInt( $( '#max-user-count' ).text() );
        }

        // Overwrite existing user from max user count (on the checkout selection page) - excluding subscription upgrade
        if ( $( '#cs-total-users' ).length ) {
            if( $( '#cs-total-users' ).attr( 'data-total-users' ) > 0 )  {
                existing_user = parseInt( $( '#cs-total-users' ).attr( 'data-total-users' ) );
            }
            else {
                existing_user = product[ 'base_product' ][ 'limit' ];
            }
        }

        var base_user = existing_user;
        var addon_user = additional_user;
        var remaining_user = additional_user;
        var total_user = additional_user + existing_user;

        // Additional user
        product_cart['additional']['user'] = additional_user;
        product_cart['total']['user'] = product_cart['base']['user'] + product_cart['additional']['user'];

        // Work out the total cost and product link
        var addon_products = product['addon_products'];
        for ( var i = 0; i < addon_products.length; i++ ) {
            var addon_product = addon_products[i];
            var addon_limit = addon_product['limit'];

            // Work out which addon to use/start from
            if ( base_user < addon_limit ) {
                // Work out the quantity
                if ( total_user <= addon_limit ) {
                    addon_user = remaining_user;
                } else {
                    addon_user = addon_limit - base_user;
                    base_user = addon_limit;
                }
                // Calculate the remaining user
                remaining_user -= addon_user;
                // Generate the product link and calculate the total additional user cost
                var comma_separator = product_cart['link'] ? ',' : '';
                product_cart['link'] = product_cart['link'].concat( comma_separator + addon_product['id'] + ':' + addon_user );
                product_cart['additional']['cost'] += addon_user * addon_product['cost'];
            }
            if ( remaining_user === 0 ) {
                break;
            }
        }

        if ( additional_admin ) {
            product_cart['additional_admin']['cost'] = additional_admin * product['additional_admin']['cost'];
            product_cart['link'] = product_cart['link'].concat( ',' + product['additional_admin']['id'] + ':' + additional_admin );
        }

        // Calculate the product total cost
        product_cart['total']['cost'] = product_cart['base']['cost'] + product_cart['additional']['cost'] + product_cart['additional_admin']['cost'];

        // Calculate the additional user average cost
        if ( additional_user ) {
            product_cart['average']['cost'] = parseFloat( Math.round( product_cart['additional']['cost'] / additional_user * 100 ) / 100 ).toFixed( 2 );
        } else {
            product_cart['average']['cost'] = product['addon_products'][0]['cost'];
        }

        if ( $( '#checkout-content-form' ).length ) {
            product_cart[ 'modules' ] = modulesBeingPurchased;
        }

        return product_cart;
    }

    if ($('.free-account-container').length && ('.free-account-message').length ){
        $('.free-account-message').css('display', 'block');
        $('#free-account-message-close').on('click', function(e) {
            $('.free-account-message').slideUp();
        });
}
    // Check currently selected modules from Checkout Selection page
    function csModulesSelectedCalculator() {
        var selectedModules = '', currentModuleId = '', totalPrice, discountAmount, modulePrice;
        var baseUsers = parseInt( $( '#cs-no-of-users-selected' ).attr( 'data-base-users' ) );
        var baseAdmins = parseInt( $( '#cs-no-of-admins-selected' ).attr( 'data-base-admins' ) );
        var noOfModulesSelected = $( '#cs-module-list-checkboxes li:not(.cs-select-all) input:checked' ).length;

        var singleModulePrice = getParameterByName( 'iv' ) == 1 ? 50 : 150;
        var maxModulesPrice = 500 - parseInt( $( '#cs-base-price' ).attr( 'data-base-price' ) );
        var maxModulesSelected = parseInt( Math.ceil( maxModulesPrice / singleModulePrice ) );

        // Initialise return data
        var selectedModulesData = {
            'total'              : 0,
            'discount-percent'   : 0,
            'undiscounted-price' : 0,
            'discount-amount'    : '',
            'modules'            : '',
            'total-users'        : '',
            'total-admins'       : ''
        };

        // Go through each checked module box
        if ( $( '#cs-module-list-checkboxes' ).length && $( '#cs-module-list-checkboxes li.base-module input:checked' ).attr( 'product_code' ) ) {
            selectedModulesData[ 'modules' ] = $( '#cs-module-list-checkboxes li.base-module input:checked' ).attr( 'product_code' ) + ':1,';
        }

        $( '#cs-module-list-checkboxes li:not(.base-module):not(.cs-select-all) input:checked' ).each( function() {
            currentModuleId = $( this ).attr( 'product_code' ) + ':1,';
            selectedModulesData[ 'modules' ] =  selectedModulesData[ 'modules' ] + currentModuleId;
            modulePrice = parseInt( $( this ).attr( 'product_price' ) );

            // Calculate undiscounted price total
            selectedModulesData[ 'undiscounted-price' ] = selectedModulesData[ 'undiscounted-price' ] + modulePrice;
        });

        if ( noOfModulesSelected <= maxModulesSelected ) {
            selectedModulesData[ 'total' ] = selectedModulesData[ 'undiscounted-price' ];
            selectedModulesData[ 'discount-amount' ] = 0;
            selectedModulesData[ 'discount-percent' ] = 0;
            // Hide the discount calculation
            $( '#cs-module-discount-calculation' ).fadeOut();
        } else {
            // Calculate discounted price total
            selectedModulesData[ 'total' ] = maxModulesPrice;
            selectedModulesData[ 'modules' ] = $( '.user-calculator-continue' ).attr( 'base-product' ) + ':1,' ;

            // Calculate the total amount that's being dicounted
            selectedModulesData[ 'discount-amount' ] = selectedModulesData[ 'undiscounted-price' ] - maxModulesPrice;
            selectedModulesData[ 'discount-percent' ] = Math.floor( ( selectedModulesData[ 'discount-amount' ] / selectedModulesData[ 'undiscounted-price' ] ) * 100 );

            // Show the discount calculation
            if ( selectedModulesData[ 'discount-percent' ] ) {
                $( '#cs-module-discount-calculation' ).fadeIn();
                $( '#cs-module-price-nd' ).text( parseInt( selectedModulesData[ 'undiscounted-price' ] ).toLocaleString( 'en' ) );
                $( '#cs-module-price-dc' ).text( selectedModulesData[ 'discount-percent' ] );
            } else {
                $( '#cs-module-discount-calculation' ).fadeOut();
            }
        }
        selectedModulesData[ 'total-users' ] = baseUsers + parseInt( $( '.number-of-users' ).val() );
        selectedModulesData[ 'total-admins' ] = baseAdmins + parseInt( $( '.number-of-admins' ).val() );

        return selectedModulesData;
    }

    // Get the total price on the checkout selection page
    function csPriceCombiner() {
        var totalModulePrice;
        if ( $( '#cs-combined-module-price' ).length ) {
            totalModulePrice = parseInt( $( '#cs-combined-module-price' ).val() );
        } else if( $( '.default-package-price' ).length ) {
            if( $( '#cs-all-access-settings' ).length ) {
                totalModulePrice = 0;
            } else {
                totalModulePrice = parseInt( $( '.default-package-price' ).attr( 'data-value' ) );
            }
        }
        var totalBasePrice = parseInt( $( '#cs-base-price' ).attr( 'data-base-price' ));
        var totalUserPrice = parseInt( $( '.users-package-total-price' ).text().replace( /\D/g, '' ) );
        var totalAdminPrice = parseInt( $( '.admins-package-total-price' ).text().replace( /\D/g, '' ) );
        var totalPrice = totalBasePrice + totalModulePrice + totalUserPrice + totalAdminPrice;

        return totalPrice;
    }

    // Update the pricing page
    function updatePricingPage( product_cart ) {
        $( '.users-package-total-price, .users-cost, .total-users' ).hide();

        // Update the additional user pricing based on if it's the checkout selection page
        if ( $( '#cs-add-more-users-outer' ).length ) {
            $( '.users-package-total-price' ).text( parseInt( product_cart['additional']['cost'] ).toLocaleString( 'en' ) ).show();
        }
        else {
            $( '.users-package-total-price' ).text( parseInt( product_cart['total']['cost'] ).toLocaleString( 'en' ) ).show();
        }
        if ( $( '#cs-add-more-admins-outer' ).length ) {
            $( '.admins-package-total-price' ).text( parseInt( product_cart['additional_admin']['cost'] ).toLocaleString( 'en' ) ).show();
        }

        $( '.users-cost' ).text( parseInt( product_cart['additional']['cost'] ).toLocaleString( 'en' ) ).show();
        $( '.total-users' ).text( parseInt( product_cart['total']['user'] ).toLocaleString( 'en' ) + " Users" ).show();

        // Update the average cost per additional user
        if ( $( '.average-user-cost-container' ).length ) {
            if ( parseInt( product_cart['average']['cost'] ) ) {
                $( '.average-user-cost-container' ).fadeIn( 200 );
                var average_cost = product_cart['average']['cost'].toString().split( '.' );
                $( '.average-user-cost#dollar-cost' ).html( average_cost[0] );
                if ( parseInt( average_cost[1] ) ) {
                    $( '.average-user-cost#cent-cost' ).html( '.' + average_cost[1] ).show();
                } else {
                    $( '.average-user-cost#cent-cost' ).hide();
                }
            }
        }
        $( '.user-calculator-continue' ).attr( "href", '/checkout/?add-to-cart=' + product_cart[ 'modules' ] + product_cart[ 'link' ] );
        // Overwrite the additional user product cost and id if it's defined (see: page-manage-user.php)
        if ( $( '.add-more-user' ).length ) {
            if ( $( '.add-more-user' ).attr( 'data-product-id' ) && $( '.add-more-user' ).attr( 'data-product-cost' ) ) {
                $( '.users-cost' ).text( ( parseInt( $( '.add-more-user' ).attr( 'data-product-cost' ) ) * parseInt( product_cart['total']['user'] ).toLocaleString( 'en' ) ) ).show();
                $( '.user-calculator-continue' ).attr( "href", '/checkout/?add-to-cart=' + $( '.add-more-user' ).attr( 'data-product-id' ) + ':' + parseInt( product_cart['total']['user'] ) );
            }
        }
    }

    // Pricing/single module/upgrade/add more user page
    if ( $( '.smp-pricing-modal, .international-top-container, .upgrade-sub-pricing-modal, #add-more-user-modal, #cs-add-more-users' ).length ) {
        if ( $( '.international-top-container' ).length ) {
            // Show calculator if coming from inside free account link
            if ( window.location.href.indexOf("?user_calculator") > -1 ) {
               showUserCalculator();
            }
            // Switch between calculator and main pricing page
            $( '.user-calculator-back' ).on( 'click', function() {
               hideUserCalculator();
            });
        }

        // If it's the single-module pricing page
        if ( $( '.smp-module-image-container' ).length ) {
            $( '.smp-module-image-container, .smp-price' ).on( 'click', function() {
                // Get the base product id and price
                var base_product_id = $( this ).closest( '.smp-module-outer' ).attr( 'data-product-code' );
                var base_price = parseInt( $( this ).closest( '.smp-module-outer' ).attr( 'data-base-price' ) );
                // Default package price
                $( '.default-package-price' ).attr( 'data-id', base_product_id );
                $( '.default-package-price' ).attr( 'data-price', base_price );
                $( '.default-package-price' ).text( '$' + base_price );
                // Generate the product cart data
                var product_cart = generateProductCart( 0, parseInt( $( '.number-of-users' ).val() ) );
                // Calculate the initial price
                var user_cost = parseInt( product_cart['additional']['cost'] );
                var initial_cost = base_price + user_cost;
                // Update the single module pricing modal
                $( '.users-package-total-price' ).text( '$' + initial_cost );
                if ( $( this ).closest( '.smp-pricing-container' ).find( '.smp-module-title h4' ).text() ) {
                    $( '.smp-pricing-modal-title' ).text( $( this ).closest( '.smp-pricing-container' ).find( '.smp-module-title h4' ).text() );
                }
                $( '.user-calculator-continue' ).attr( "href", '/checkout/?add-to-cart=' + product_cart['link'] );
                $( ".smp-pricing-modal" ).modal( 'show' );
            });
        }

        // Plus/Minus on the additional user calculator/pricing page
        $( '.number-of-users-container, .add-more-user-container, .number-of-admins-container, .add-more-admin-container' ).each( function() {
            var
                spinner = $( this ),
                input   = spinner.find( 'input[type="number"]' ),
                btnUp   = spinner.find( '.quantity-up' ),
                btnDown = spinner.find( '.quantity-down' ),
                min     = input.attr( 'min' ),
                max     = input.attr( 'max' );

            btnUp.click( function() {
                var newVal;
                var oldValue = parseFloat( input.val() );
                if ( oldValue >= max ) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue + 1;
                }
                spinner.find( "input" ).val( newVal );
                spinner.find( "input" ).trigger( "change" );
            });

            btnDown.click( function() {
                var oldValue = parseFloat( input.val() );
                if ( oldValue <= min ) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue - 1;
                }
                spinner.find( "input" ).val( newVal );
                spinner.find( "input" ).trigger( "change" );
            });
        });

        // Number of additional user changes calculator
        $( '.number-of-users, .number-of-admins, .quantity-down, .quantity-up, #cs-module-list-checkboxes li input' ).on( 'change input click touchstart', function( e ) {
            var limit = 0;
            if ( $( this ).hasClass( 'number-of-users' ) || $( this ).hasClass( 'number-of-admins' ) ) {
                if ( $( this ).hasClass( 'number-of-users' ) ) {
                    limit = 9995;
                } else if ( $( this ).hasClass( 'number-of-admins' ) ) {
                    limit = 99;
                }

                if ( $( this ).val() < 0 ) {
                    $( this ).val( 0 );
                } else if ( limit && $( this ).val() > limit ) {
                    $( this ).val( limit );
                }
            }
            // Don't allow an empty field.
            if ( e.target.value === '' ) {
                e.target.value = 0;
            }
            // Replace leading 0 when amount of users is updated.
            if (  $( '.number-of-users' ).val() > 0 ) {
                $( '.number-of-users' ).val( $( '.number-of-users' ).val().replace(/^0+/, '' ) );
            }
            if (  $( '.number-of-admins' ).val() > 0 ) {
                $( '.number-of-admins' ).val( $( '.number-of-admins' ).val().replace(/^0+/, '' ) );
            }
            var product_cart, cs_modules_selected;
            // Get the product cart details
            if ( $( '#checkout-content-form' ).length ) {
                cs_modules_selected = csModulesSelectedCalculator();
                product_cart = generateProductCart( 0, parseInt( $( '.number-of-users-container input' ).val() ), cs_modules_selected[ 'modules' ], parseInt( $( '.number-of-admins-container input' ).val() ) );
            } else {
                product_cart = generateProductCart( 0, parseInt( $( '.number-of-users' ).val() ) );
            }
            // Update pricing page
            updatePricingPage( product_cart );

            // Count the number of modules selected if it's the checkout selection page or if it's all access
            if ( $( '#cs-module-list-checkboxes' ).length ||  $( '#cs-total-users' ).length ) {
                var numberOfModulesSelected = $( '#cs-module-list-checkboxes li:not(.cs-select-all) input:checked' ).length;
                $( '#cs-no-of-modules-selected' ).text( numberOfModulesSelected );

                // Update the modules total price
                $( '#cs-combined-module-price' ).text( parseInt( cs_modules_selected[ 'total' ] ).toLocaleString( 'en' ) ).val( cs_modules_selected[ 'total' ] );

                // Update the total number of users on the checkout selection page
                cs_modules_selected_user = cs_modules_selected[ 'total-users' ];
                if ( cs_modules_selected_user > 10000 ) {
                    cs_modules_selected_user = 10000;
                }
                cs_modules_selected_admin = cs_modules_selected[ 'total-admins' ];
                $( '#cs-no-of-users-selected' ).text( cs_modules_selected_user.toLocaleString( 'en' ) ).val( cs_modules_selected_user );
                $( '#cs-no-of-admins-selected' ).text( cs_modules_selected_admin.toLocaleString( 'en' ) ).val( cs_modules_selected_admin );
            }

            // Count the total price on the checkout selection page
            if ( $( '#cs-module-user-total' ).length ) {
                var csTotalPrice = csPriceCombiner();

                var discountPercentage = $( '#cs-module-user-total' ).attr( 'data-discount-percentage' );
                if ( discountPercentage ) {
                    var csTotalDiscountedPrice = parseInt( Math.round( csTotalPrice * ( ( 100 - discountPercentage ) / 100 ) ) ).toLocaleString( 'en' );
                    $( '#cs-module-user-total' ).text( parseInt( csTotalPrice ).toLocaleString( 'en' ) ).val( csTotalPrice );
                    $( '#cs-module-user-total-cp' ).text( csTotalDiscountedPrice ).val( csTotalDiscountedPrice  );
                } else {
                    $( '#cs-module-user-total' ).text( parseInt( csTotalPrice ).toLocaleString( 'en' ) ).val( csTotalPrice );
                }
            }
        });

        // Set cost of users if they return to the page after going to checkout
        if ( parseInt( $( '.number-of-users' ).val() ) !== 0 ) {
            // Display the 2nd pricing page
            $( '.intl-header' ).hide();
            $( '.intl-header' ).text( 'Add users now or as your team grows' ).fadeIn();
            $( '.international-pricing-option-container' ).hide();
            $( '.user-calculator-container' ).fadeIn();
            // Update the page
            product_cart = generateProductCart( 0, parseInt( $( '.number-of-users' ).val() ) );
            updatePricingPage( product_cart );
        }

        // Individual product - extra users not allowed
        if ( getParameterByName( 'iv' ) == 1 ) {
            $( '.number-of-users' ).val( '0' );
            $( '.number-of-admins' ).val( '0' );
        }
    }
    $( '.number-of-users' ).trigger( 'change' );
    $( '.number-of-admins' ).trigger( 'change' );

    // Get the current width and round it up to the nearest 100
    function calculateRoundedWidth ( currentWidth ) {
        var requiredHeight = Math.ceil( currentWidth / 100 ) * 100;
        return requiredHeight;
    }

    // Grab the width
    function calculateRequiredHeight( startingHeight, heightToAdd ) {
        width = calculateRoundedWidth( initialWidth ) - 1100;
        width = width / 100 * heightToAdd;
        heightToSet = width + startingHeight;
        $("#about-us-top-container").height( heightToSet );
    }

    // Apply the height calculated.
    function heightApplier( width ) {
        if( width > 2500 ) {
            calculateRequiredHeight( 350, 30 );
        }
        else if( width > 1800 ) {
            calculateRequiredHeight( 300, 30 );
        }
        else if( width > 1500 ) {
            calculateRequiredHeight( 400, 40 );
        }
        else if( width > 1200 ) {
            calculateRequiredHeight( 350, 35 );
        }
        else if( width > 992 ) {
            calculateRequiredHeight( 500, 40 );
        }
    }

    if( $( '#about-us-top-container' ).length ) {
        var initialWidth = window.innerWidth;
        var remainingWidth, heightToSet;

        heightApplier( initialWidth );

        $( window ).resize(function() {
            var currentWidth = window.innerWidth;

            if( currentWidth > 900 ) {
                if( currentWidth - initialWidth > 50 ) {
                    initialWidth = calculateRoundedWidth( currentWidth );

                    heightApplier( initialWidth );
                } else if ( initialWidth - currentWidth > 50 ) {
                    initialWidth = currentWidth;

                    heightApplier( initialWidth );
                }
            }
        });
    }

    var Source = function() {
        "use strict";
        var ref = 'Direct',
            med = 'None',
            referrer = document.referrer;

        // Google
        if ( document.referrer.search('https?://(.*)google.([^/?]*)') === 0 ) {
            ref = 'Google';
            if ( window.location.search.length > 0 ) {
                if ( getParameterByName( 'gclid' ).length > 0 ) {
                    med = 'Adwords';
                }
                else {
                    med = "Unknown medium (" + window.location.href + ")";
                }
            } else {
                med = 'Organic';
            }
        }
        else if ( getParameterByName( 'gclid' ).length > 0 ) {
            ref = 'Google';

            if ( !referrer ) {
                referrer = "Adwords (" + window.location.href + ")";
            }

            med = referrer;
        }
        // Bing
        else if ( document.referrer.search('https?://(.*)bing.([^/?]*)') === 0 ) {
            ref = 'Bing';
            if ( window.location.search.length > 0 ) {
                if ( getParameterByName( 'utm_source' ).length > 0 && getParameterByName( 'utm_medium' ) === 'cpc' ) {
                    med = 'Bingcpc';
                }
            } else {
                med = 'Organic';
            }
        }
        // Ontraport
        else if ( getParameterByName( 'utm_source' ) === 'ontraport' && getParameterByName( 'utm_medium' ) === 'email' ) {
            ref = 'Ontraport';
            med = 'Email';
        }
        // Yahoo
        else if ( document.referrer.search('https?://(.*)yahoo.([^/?]*)' ) === 0 ) {
            ref = 'Yahoo';
            med = 'Organic';
        }
        // Facebook
        else if ( document.referrer.search('https?://(.*)facebook.([^/?]*)' ) === 0 || document.location.search.indexOf( 'facebook.com' ) > -1 ) {
            ref = 'Facebook';
            if ( window.location.search.length > 0 || getCookie( 'md' ) === 'Facebookcpc' ) {
                if ( getParameterByName( 'utm_source' ).length > 0 ) {
                    med = 'Facebookcpc';
                }
            } else {
                med = 'Referral';
            }
        }
        // Twitter
        else if ( document.referrer.search('https?://(.*)twitter.([^/?]*)' ) === 0 ) {
            ref = 'Twitter';
            med = 'Referral';
        }
        // Referral
        else if ( document.referrer.length > 0 ) {
            if( referrer.indexOf( 'canity.com' ) === -1 && referrer.indexOf( '.staging.wpengine' ) === -1  ) {
                ref = 'Referral';
                med = document.referrer;
            }
        }
        return {
            ref: ref,
            med: med,
            referrer: referrer
        };
    };

    var source = Source();
    var date = new Date();
    date.setTime( date.getTime() + ( 30 * 60 * 1000 ) );

    // Check if tracking cookies have been set
    if ( getCookie( 'src' ) === '' || ( getCookie( 'src' ) === 'Direct' && source.ref !== 'Direct' ) ) {
        setCookie( 'src', source.ref, date, '' );
        setCookie( 'lp', window.location.href, date, '' );
        setCookie( 'md', source.med, date, '' );
    }
    // If they've previously visited the site organically through Google, and then visited again by clicking on an ad in Google, re-set the cookies to the ad.
    else if ( getCookie( 'src' ) === 'Google' && getCookie( 'md' ) === 'Organic' && source.med === 'Adwords' ) {
        setCookie( 'md', source.med, date, '' );
        setCookie( 'src', source.ref, date, '' );
        setCookie( 'lp', window.location.href, date, '' );
    }

    if ( getCookie( 'md' ) === '' ) {
        if ( document.referrer ) {
            setCookie( 'md', document.referrer, date, '' );
        }
        else if ( getCookie( 'src' ) === 'Google' ) {
            setCookie( 'md', 'Organic', date, '' );
        }
        else {
            setCookie( 'md', 'None', date, '' );
        }
    }

    if ( getCookie( 'referrer' ) === '' ) {
        setCookie( 'referrer', source.referrer, date, '' );
    }

    // Set referring URL based on cookies.
    var referringUrl = getCookie( 'src' ) + ' - ' + getCookie( 'md' ) + ' (URL is ' + getCookie( 'referrer' ) + ')';

    // Update Demo Request form referral fields.
    if( $( '#ninja_forms_form_37_cont' ).length ) {

        // ID of Landing Page field
        if( $( '#ninja_forms_field_95' ).length ) {
            $( '#ninja_forms_field_95' ).val( getCookie( 'lp' ) );
        }

        // ID of Referring URL field
        if( $( '#ninja_forms_field_96' ).length ) {
            if( $( '#ninja_forms_field_96' ).val() !== referringUrl ) {
                $( '#ninja_forms_field_96' ).val( referringUrl );
            }
        }
    }

    // Update Contact Us form referral fields.
    if ( $( '#ninja_forms_form_5_cont' ).length ) {
        // ID of Landing Page field
        if ( $( '#ninja_forms_field_92' ).length ) {
            $( '#ninja_forms_field_92' ).val( getCookie( 'lp' ) );
        }

        // ID of Referring URL field
        if ( $( '#ninja_forms_field_93' ).length ) {
            if ( $( '#ninja_forms_field_93' ).val() !== referringUrl ) {
                $( '#ninja_forms_field_93' ).val( referringUrl );
            }
        }
    }
    // Consent tracking - set the class name to "set-consent"
    // with "data-consent-type" (e.g. cookie) and "data-consent-action" (e.g. close) attributes
    if ( $( '.set-consent' ).length ) {
        $( '.set-consent' ).on( 'click', function() {
            $.ajax({
                url: CONTROLLER_LIB_PATH + '/request.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    'head' : 'SetConsent',
                    'args' : {
                        'consent_type' : $( this ).attr( 'data-consent-type' ),
                        'consent_action' : $( this ).attr( 'data-consent-action' )
                    }
                },
                error: function ( xhr, ajaxOptions, thrownError ) {
                    console.log( thrownError );
                }
            });
        });
    }

    if ( getCookie( 'cookie-consent-store' ) !== 'true' ) {
        if ($('#cookie-consent-box').length && $('img.canity-cookie').length) {
            $( '#cookie-consent-box , img.canity-cookie' ).show();
            $( '#cookie-consent-box , img.canity-cookie' ).delay(3000).fadeIn(500);
                if ( getCookie( 'cookie-consent-view' ) !== 'true' ) {
                    setCookie("cookie-consent-view", 'true', 365, ''); /* expire in 1 year */
            }
            $( '#close-cookie-consent' ).click(function()  {
                $('#cookie-consent-box , img.canity-cookie').fadeOut();
                setCookie("cookie-consent-store", 'true', 365, ''); /* expire in 1 year */
            });
        }
    }

    // Display different version of the video on mobile based on its orientation
    $( window ).bind( 'orientationchange', function() {
        if ( $ ( window ).width() < 2500 ) {
            var default_orientation = '#video-landscape-hd';
            var video_element = '.home .gradient-background .header-image-container video';

            if ( typeof orientation !== 'undefined' ) {
                var old_orientation = '#video-landscape-hd';
                var new_orientation = '#video-portrait-hd';
                if ( Math.abs( orientation ) == 90 ) {
                    old_orientation = '#video-portrait-hd';
                    new_orientation = '#video-landscape-hd';
                }
                if ( $( video_element ).length ) {
                    $( video_element + old_orientation ).hide();
                    if ( ! $( video_element + new_orientation ).hasClass( 'hide') ) {
                        $( video_element + new_orientation ).show();
                    }
                }
            } else {
                $( video_element + default_orientation ).show();
            }
        }
    });
    $( window ).trigger( 'orientationchange' );

    // Email link clicked
    if( $( '.contact-us-details-text' ).length ) {
        $( '.contact-us-details-text' ).on( 'click', function() {
            sendGoogleEventClick( 'Email clicked', getCookie( 'src' ), getCookie( 'md' ) );
        });
    }

    function smoothScrollPost( clickedId ) {
        $( '#' + clickedId ).on( 'click', function() {
            var scroll_to = $( this ).attr( 'scroll-to' );
            if ( scroll_to && $( '#' + scroll_to ).length  ) {
                $( 'html, body' ).animate({
                    scrollTop: $( '#' + scroll_to ).offset().top - 90
                }, 1000 );
                return false;
            }
        });
    }

    // Show Contact Us Submit button
    if( $( '.page-id-27078' ).length && $( '#ninja_forms_field_56_div_wrap' ).length ) {
        $( window ).load( function () {
            $( '#ninja_forms_field_56_div_wrap' ).css("visibility", "visible");
        });

        // Update FAQ links inside contact us page
        if( $( '#faq-ct-rmbr-pass' ).length ) {
            $( '#faq-ct-rmbr-pass' ).removeAttr( 'data-target', 'data-target' ).addClass( 'scroll-button' ).attr( 'scroll-to', 'ninja_forms_form_5' );
            smoothScrollPost( 'faq-ct-rmbr-pass' );
        }

        if( $( '#faq-integrate-lms' ).length ) {
            $( '#faq-integrate-lms' ).removeAttr( 'data-target', 'data-target' ).addClass( 'scroll-button' ).attr( 'scroll-to', 'ninja_forms_form_5' );
            smoothScrollPost( 'faq-integrate-lms' );
        }
    }

    // Show LMS Pricing on explore licencing page if parameter exists in URL
    if( window.location.href.indexOf( "/explore-licencing" ) && $( '.page-template-page-explore-licencing' ).length ) {
        if( getParameterByName( 'lms-pricing' ) == '1' ) {
            setTimeout( function() {
                $( '.explore-lms-licencing' ).modal( 'show' );
            }, 500 );
        }
    }
    // Google review
    if ( $( '.wpac' ).length ) {
        $( '.wpac' ).on( 'click', '.wp-google-badge', function() {
            $( '.wpac .wp-google-form' ).removeClass( 'hide' );
        }).on( 'click', '.wp-google-close', function() {
            $( '.wpac .wp-google-form' ).addClass( 'hide' );
        });
    }
}); // End ready

// Rotate angles of min,hour and second hand on clock in contact us form
function clockDisplay() {
    var Perth_date = new Date(new Date( new Date().getTime() + 8 * 3600 * 1000).toUTCString().replace( / GMT$/, "" ));
    var hrs = parseInt(Perth_date.getHours());
    var after_hour_msg = "Because we're down under, there's a chance you've contacted us outside our regular business hours. But don't worry, we'll get back to you as soon as we re-open.";
    var weekend_msg = "It's already the weekend here in Australia. But don't worry, we'll get back to you as soon as we re-open on Monday morning.";

    if ( ( Perth_date.getDay() == 5 &&  hrs > 15 ) || Perth_date.getDay() == 6 || Perth_date.getDay() === 0  )  {  // After 3pm on Friday, Saturday and Sunday
        showClock( weekend_msg );
    }
    else if ( hrs < 7 || hrs > 15 ) {
        showClock( after_hour_msg );
    }
}

function showClock( msg ) {
    var html =
        '<div id="display_clock">'+
        '<p> <strong>' + msg + '</strong></p>'+
        '<h4 id="clock_title"><br> Perth, Western Australia</h4>'+
        '<div id="clock">'+
            '<div class="hours-container">'+
                '<div class="hours"></div>' +
            '</div>' +
            '<div class="minutes-container">' +
                '<div class="minutes"></div>' +
            '</div>'+
            '<div class="seconds-container">' +
                '<div class="seconds"></div>' +
            '</div>' +
        '</div>'+
        '<h4 id="digital_clock"></h4>';
    if ( ! jQuery( '#display_clock' ).length ) {
        if ( jQuery('#ninja_forms_form_20_response_msg.ninja-forms-success-msg').length ) { // My Canity - Contact Us Form
            jQuery("#normal-hours").hide();
            jQuery('#ninja_forms_form_20_response_msg .ninja-form-success-message h4').after(html);
        }
        if ( jQuery('#ninja_forms_form_5_response_msg.ninja-forms-success-msg').length ) { // Canity - Contact Us Form
            jQuery(".contact-us-heading").hide();
            jQuery(".fusion-separator").hide();
            jQuery("#normal-hours").hide();
            jQuery('#ninja_forms_form_5_response_msg .ninja-form-success-message h4').after(html);
        }
        if ( jQuery('#ninja_forms_form_14_response_msg.ninja-forms-success-msg').length ) { // My Canity - Feedback Form
            jQuery("#normal-hours").hide();
            jQuery('#ninja_forms_form_14_response_msg .ninja-form-success-message h4').after(html);

        }
        if ( jQuery('#ninja_forms_form_37_response_msg.ninja-forms-success-msg').length ) { // Canity - Request Demo Account Form
            jQuery("#normal-hours").hide();
            jQuery('#ninja_forms_form_37_response_msg .ninja-form-success-message h4').after(html);
        }
    }

    setInterval( function() {
        var offset = 8;
        var Perth_date = new Date(new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" ));
        var seconds = Perth_date.getSeconds();
        var hours = Perth_date.getHours();
        var mins = Perth_date.getMinutes();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";
        var hdegree = hours * 30 + (mins / 2);
        var hrotate = "rotate(" + hdegree + "deg)";
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
        var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

        function checkTime(digit) {
            if (digit < 10) {
                digit = "0" + digit;
            }
            return digit;
        }

        mins = checkTime(mins);
        seconds = checkTime(seconds);
        var hrs_24 = parseInt(hours);
        var ampm = "AM";
        if ( hrs_24 >= 12 ) {
            ampm = "PM";
        }
        hours = ( hrs_24 % 12 ) || 12;

        jQuery("#clock .seconds").css({ "transform": srotate });
        jQuery("#clock .minutes ").css({ "transform" : mrotate });
        jQuery("#clock .hours").css({ "transform": hrotate});
        jQuery("#digital_clock").html(hours + ":" + mins +" "+ ampm + " AWST" + "<br>" + days[Perth_date.getDay()] + ", " + Perth_date.getDate() + " " + months[Perth_date.getMonth()] + " " + Perth_date.getFullYear());
    }, 1000 );
}

// Recaptcha
// var RC2KEY = '6LfIIycUAAAAADC7t06mFH6NZJVzJiVhf26aMhhT',
// allowSubmit = false;
allowSubmit = true;
// function reCaptchaVerify( response ) {
//     gresponse = grecaptcha.getResponse(0);
//     if ( response === gresponse ) {
//         allowSubmit = true;
//     } else {
//          gresponse = grecaptcha.getResponse(1);
//          if ( response === gresponse ) {
//              allowSubmit = true;
//          }
//     }
// }

// function reCaptchaCallback () {
//     /* this must be in the global scope for google to get access */
//     if ( $('#g-recaptcha-container').length ) {
//             grecaptcha.render('g-recaptcha-container', {
//             'sitekey': RC2KEY,
//             'callback': reCaptchaVerify
//         });
//     }
//     if ( $('#g-recaptcha-container-2').length ) {
//         grecaptcha.render('g-recaptcha-container-2', {
//             'sitekey': RC2KEY,
//             'callback': reCaptchaVerify
//         });
//     }
// }

jQuery( '#ninja_forms_form_5, #ninja_forms_form_37' ).on( 'submit',function( e ) {
    if ( allowSubmit ) {
        sendGoogleEventClick( 'Contact form submitted', getCookie( 'src' ), getCookie( 'md' ) );
        return true;
    }
    e.preventDefault();
    alert( 'Please fill in the captcha.' );
});
// End Recaptcha