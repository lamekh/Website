/* jshint sub:true */
// JS location
var CONTROLLER_DIR = '/wp-content/themes/Avada-child';
// Upload dir (CDN)
var BASE_DIR = 'https://1bqngz45g73v42ldj2vx5syi-wpengine.netdna-ssl.com';
var UPLOAD_DIR = BASE_DIR + '/wp-content/uploads';
// Common properties
var COMMON_PROPERTIES = {
    'controller'          : 'get-overview.php',
    'video-id'            : 'overview-top-player-0',
    'element-prefix-id'   : 'overview',
    'jwplayer-play'       : 'play-button',
    'display-thumbnail'   : 5
};
// Page properties
var PAGE_PROPERTIES = {
    '19798'  : {
        'page-type'         : 'overview',
        'page-class'        : 'Overview',
        'page-visibility'   : 'logged-in',
        'playlist'          : false,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-subsection', 'content-thumbnail', 'content-title', 'content-category', 'content-duration' ],
            'bottom'          : [ 'bottom-label', 'bottom-subsection', 'bottom-type', 'bottom-content', 'bottom-separator', 'bottom-text' ]
        },
        'total-element'     : {
            'top-video'       : 1,
            'content-video'   : 4,
            'bottom-quiz'     : 5,
            'bottom-activity' : 5
        }
    },
    '21444'  : {
        'page-type'         : 'module',
        'page-class'        : 'Phone Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 32,
            'content-video'   : 32
        }
    },
    '21445'  : {
        'page-type'         : 'module',
        'page-class'        : 'Sales Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 33,
            'content-video'   : 33
        }
    },
    '21446'  : {
        'page-type'         : 'module',
        'page-class'        : 'Retail Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 34,
            'content-video'   : 34
        }
    },
    '21572'  : {
        'page-type'         : 'module',
        'page-class'        : 'Email Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 27,
            'content-video'   : 27
        }
    },
    '23192'  : {
        'page-type'         : 'module',
        'page-class'        : 'Dealing With Difficult Customers',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 16,
            'content-video'   : 16
        }
    },
    '25545'  : {
        'page-type'         : 'module',
        'page-class'        : 'Dealing With Difficult Customers Part 1',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 10,
            'content-video'   : 10
        }
    },
    '25546'  : {
        'page-type'         : 'module',
        'page-class'        : 'Dealing With Difficult Customers Part 2',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 9,
            'content-video'   : 9
        }
    },
    '24324'  : {
        'page-type'         : 'module',
        'page-class'        : 'Dealing With Happy Customers',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 9,
            'content-video'   : 9
        }
    },
    '33292'  : {
        'page-type'         : 'module',
        'page-class'        : 'Dealing With Rude Customers',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 11,
            'content-video'   : 11
        }
    },
    '24449'  : {
        'page-type'         : 'module',
        'page-class'        : 'Dealing With Disappointed Customers',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 10,
            'content-video'   : 10
        }
    },
    '24445'  : {
        'page-type'         : 'module',
        'page-class'        : 'Dealing With Anxious Customers',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 10,
            'content-video'   : 10
        }
    },
    '26470'  : {
        'page-type'         : 'module',
        'page-class'        : 'Customer Personality Types',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 6,
            'content-video'   : 6
        }
    },
    '27059'  : {
        'page-type'         : 'module',
        'page-class'        : 'Online Chat Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 9,
            'content-video'   : 9
        }
    },
    '28520'  : {
        'page-type'         : 'module',
        'page-class'        : 'Presentation Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 20,
            'content-video'   : 20
        }
    },
    '29332'  : {
        'page-type'         : 'module',
        'page-class'        : 'Presentation Skills Part 1',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 11,
            'content-video'   : 11
        }
    },
    '29333'  : {
        'page-type'         : 'module',
        'page-class'        : 'Presentation Skills Part 2',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 11,
            'content-video'   : 11
        }
    },
    '31207'  : {
        'page-type'         : 'module',
        'page-class'        : 'The Art Of Small Talk',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 10,
            'content-video'   : 10
        }
    },
    '32185'  : {
        'page-type'         : 'module',
        'page-class'        : 'Interview Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 12,
            'content-video'   : 12
        }
    },
    '33161'  : {
        'page-type'         : 'module',
        'page-class'        : 'Hospitality Restaurant Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 13,
            'content-video'   : 13
        }
    },
    '35887'  : {
        'page-type'         : 'module',
        'page-class'        : 'Reception Skills',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 15,
            'content-video'   : 15
        }
    },
    '37196'  : {
        'page-type'         : 'module',
        'page-class'        : 'Workplace Behaviours',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 11,
            'content-video'   : 11
        }
    },
    '39845'  : {
        'page-type'         : 'module',
        'page-class'        : 'Delivering Internal Customer Service',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 8,
            'content-video'   : 8
        }
    },
    '42022'  : {
        'page-type'         : 'module',
        'page-class'        : 'Do Your Customers Trust You',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 9,
            'content-video'   : 9
        }
    },
    '42848'  : {
        'page-type'         : 'module',
        'page-class'        : 'Saving Customer Cancellations',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 12,
            'content-video'   : 12
        }
    },
    '44876'  : {
        'page-type'         : 'module',
        'page-class'        : 'Health at Work',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 11,
            'content-video'   : 11
        }
    },
    '46031'  : {
        'page-type'         : 'module',
        'page-class'        : 'Safety at Work',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 10,
            'content-video'   : 10
        }
    },
    '47080'  : {
        'page-type'         : 'module',
        'page-class'        : 'Video Conferencing Etiquette',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 8,
            'content-video'   : 8
        }
    },
    '50667'  : {
        'page-type'         : 'module',
        'page-class'        : 'Time Management at Work',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 1,
            'content-video'   : 10
        }
    },
    '46349'  : {
        'page-type'         : 'module',
        'page-class'        : 'COVID-19 Safety',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 9,
            'content-video'   : 9
        }
    },
    '20225'  : {
        'page-type'         : 'module',
        'page-class'        : 'Master Sales',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration' ],
        },
        'total-element'     : {
            'top-video'       : 23,
            'content-video'   : 23
        }
    },
    '20226'  : {
        'page-type'         : 'module',
        'page-class'        : 'Master Marketing',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration' ],
        },
        'total-element'     : {
            'top-video'       : 32,
            'content-video'   : 32
        }
    },
    '20227'  : {
        'page-type'         : 'module',
        'page-class'        : 'Master Customer Service',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration' ],
        },
        'total-element'     : {
            'top-video'       : 23,
            'content-video'   : 23
        }
    },
    '21553'  : {
        'page-type'         : 'module',
        'page-class'        : 'Complimentary Segment 1',
        'playlist'          : true,
        'playlist-order'    : [2,1,0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-subsection', 'content-thumbnail', 'content-title', 'content-category', 'content-duration' ],
        },
        'total-element'     : {
            'top-video'       : 22,
            'content-video'   : 22
        }
    },
    '21665'  : {
        'page-type'         : 'module',
        'page-class'        : 'Complimentary Segment 1',
        'playlist'          : true,
        'playlist-order'    : [2,1,0,3,4,5,6,7,8,9],
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-subsection', 'content-thumbnail', 'content-title', 'content-category', 'content-duration' ],
        },
        'total-element'     : {
            'top-video'       : 10,
            'content-video'   : 10
        }
    },
    '22200'  : {
        'page-type'         : 'module',
        'page-class'        : 'Complimentary Segment 2',
        'playlist'          : true,
        'nocontrolsbar'     : false,
        'playlist-order'    : [1,2,3,4,0],
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-subsection', 'content-thumbnail', 'content-title', 'content-category', 'content-duration' ],
        },
        'total-element'     : {
            'top-video'       : 5,
            'content-video'   : 5
        }
    },
    '13775'  : {
        'page-type'         : 'player',
        'page-class'        : 'Phone Skills',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 30
        }
    },
    '14257'  : {
        'page-type'         : 'player',
        'page-class'        : 'Sales Skills',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 33
        }
    },
    '20631'  : {
        'page-type'         : 'player',
        'page-class'        : 'Retail Skills',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 34
        }
    },
    '21568'  : {
        'page-type'         : 'player',
        'page-class'        : 'Email Skills',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 27
        }
    },
    '23194'  : {
        'page-type'         : 'player',
        'page-class'        : 'Dealing With Difficult Customers',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 16
        }
    },
    '17433'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Sales',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 23
        }
    },
    '17432'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Marketing',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 31
        }
    },
    '17425'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Customer Service',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 24
        }
    },
    '19521'  : {
        'page-type'         : 'player',
        'page-class'        : 'Phone Skills',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 30
        }
    },
    '19522'  : {
        'page-type'         : 'player',
        'page-class'        : 'Sales Skills',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 33
        }
    },
    '20633'  : {
        'page-type'         : 'player',
        'page-class'        : 'Retail Skills',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 34
        }
    },
    '21569'  : {
        'page-type'         : 'player',
        'page-class'        : 'Email Skills',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 27
        }
    },
    '23195'  : {
        'page-type'         : 'player',
        'page-class'        : 'Dealing With Difficult Customers',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 16
        }
    },
    '19523'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Sales',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 23
        }
    },
    '19524'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Marketing',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 31
        }
    },
    '19525'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Customer Service',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 23
        }
    },
    '20082'  : {
        'page-type'         : 'player',
        'page-class'        : 'Phone Skills Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 7
        }
    },
    '20087'  : {
        'page-type'         : 'player',
        'page-class'        : 'Sales Skills Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 7
        }
    },
    '20452'  : {
        'page-type'         : 'player',
        'page-class'        : 'Retail Skills Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 6
        }
    },
    '20908'  : {
        'page-type'         : 'player',
        'page-class'        : 'Email Skills Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 7
        }
    },
    '22949'  : {
        'page-type'         : 'player',
        'page-class'        : 'Dealing With Difficult Customers Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 4
        }
    },
    '24293'  : {
        'page-type'         : 'player',
        'page-class'        : 'Dealing With Happy Customers Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 4
        }
    },
    '20024'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Sales Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 5
        }
    },
    '20062'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Marketing Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 5
        }
    },
    '20068'  : {
        'page-type'         : 'player',
        'page-class'        : 'Master Customer Service Demo',
        'playlist'          : true,
        'listbar'           : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 5
        }
    },
    '21158'  : {
        'page-type'         : 'player',
        'page-class'        : 'Training Modules Demo',
        'playlist'          : true,
        'listbar'           : false,
        'noautoplay'        : true,
        'page-element'      : {},
        'total-element'     : {
            'top-video'       : 33
        }
    },
    '23299'  : {
        'page-type'         : 'staff_training',
        'noautoplay'        : false,
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-subsection', 'content-thumbnail', 'content-class', 'content-total', 'content-staff-video', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ]
        },
        'total-element'     : {
            'top-video'       : 99,
            'content-video'   : 99
        }
    },
    '14211'  : {
        'page-type'         : 'staff_training',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-subsection', 'content-thumbnail', 'content-class', 'content-total', 'content-staff-video', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ]
        },
        'total-element'     : {
            'top-video'       : 99,
            'content-video'   : 99
        }
    },
    '38374'  : {
        'page-type'         : 'staff_training',
        'noautoplay'        : false,
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-subsection', 'content-thumbnail', 'content-class', 'content-total', 'content-staff-video', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ]
        },
        'total-element'     : {
            'top-video'       : 99,
            'content-video'   : 99
        }
    },
    '45175'  : {
        'page-type'         : 'staff_training',
        'noautoplay'        : false,
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-subsection', 'content-thumbnail', 'content-class', 'content-total', 'content-staff-video', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ]
        },
        'total-element'     : {
            'top-video'       : 99,
            'content-video'   : 99
        }
    },
    '24205'  : {
        'page-type'         : 'module',
        'page-class'        : 'Phone Skills Part 1',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 11,
            'content-video'   : 11
        }
    },
    '24206'  : {
        'page-type'         : 'module',
        'page-class'        : 'Phone Skills Part 2',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 12,
            'content-video'   : 12
        }
    },
    '24207'  : {
        'page-type'         : 'module',
        'page-class'        : 'Phone Skills Part 3',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 13,
            'content-video'   : 13
        }
    },
    '24208'  : {
        'page-type'         : 'module',
        'page-class'        : 'Sales Skills Part 1',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 12,
            'content-video'   : 12
        }
    },
    '24209'  : {
        'page-type'         : 'module',
        'page-class'        : 'Sales Skills Part 2',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 12,
            'content-video'   : 12
        }
    },
    '24210'  : {
        'page-type'         : 'module',
        'page-class'        : 'Sales Skills Part 3',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 13,
            'content-video'   : 13
        }
    },
    '24211'  : {
        'page-type'         : 'module',
        'page-class'        : 'Retail Skills Part 1',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 11,
            'content-video'   : 11
        }
    },
    '24212'  : {
        'page-type'         : 'module',
        'page-class'        : 'Retail Skills Part 2',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 13,
            'content-video'   : 13
        }
    },
    '24213'  : {
        'page-type'         : 'module',
        'page-class'        : 'Retail Skills Part 3',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 14,
            'content-video'   : 14
        }
    },
    '24214'  : {
        'page-type'         : 'module',
        'page-class'        : 'Email Skills Part 1',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 11,
            'content-video'   : 11
        }
    },
    '24215'  : {
        'page-type'         : 'module',
        'page-class'        : 'Email Skills Part 2',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 10,
            'content-video'   : 10
        }
    },
    '24216'  : {
        'page-type'         : 'module',
        'page-class'        : 'Email Skills Part 3',
        'page-visibility'   : 'logged-in',
        'playlist'          : true,
        'page-element'      : {
            'top'             : [ 'top-header', 'top-category', 'top-type', 'top-description', 'top-button', 'top-extra-button' ],
            'content'         : [ 'content-extra-button', 'content-video', 'content-subsection', 'content-thumbnail', 'content-title', 'content-title-order', 'content-category', 'content-duration', 'content-ebook', 'content-ebook-thumbnail', 'content-ebook-text', 'content-ebook-title' ],
        },
        'total-element'     : {
            'top-video'       : 10,
            'content-video'   : 10
        }
    }
};

jQuery(document).ready( function($) {
    // Get the page properties
    var page_properties, page_id;
    for ( var id in PAGE_PROPERTIES ) {
        if ( $( '.page-id-' + id ).length ) {
            page_properties = PAGE_PROPERTIES[id];
            var page_visibility = '';
            if ( page_properties['page-visibility'] ) {
                page_visibility = '.' + page_properties['page-visibility'];
            }

            if ( $( '.page-id-' + id + page_visibility ).length ) {
                page_id = id;
                break;
            }
        }
    }

    // Subtitles GA event tracking
    function subtitleTracking() {
        $(  '.video-container-player, .player-container, .jw-video-player, #home-hero-player-v4, #jw-video-player, #tms-player'  ).on(  'click', 'button.jw-settings-content-item', function() {
            var selected_option = $( '.jwplayer .jw-settings-submenu .jw-settings-item-active' ).text();

            language = '';
            if ( selected_option.indexOf( 'Chinese' ) !== -1 ) {
                language = 'Chinese';
            } else if ( selected_option.indexOf( 'English' ) !== -1 ) {
                language = 'English';
            }

            if ( language == 'Chinese' || language == 'English' ) {
                if ( page_properties ) {
                    dataLayer.push({
                        event : 'subs',
                        subLanguage : language,
                        module: page_properties['page-class']
                    });
                }
                // Tracking for video player.
                else if ( $( '#home-hero-player-v4, #jw-video-player' ).length ) {
                  dataLayer.push({
                      event : 'subs',
                      subLanguage : language
                  });
                }
            }
        });
    }
    subtitleTracking();

    $( window ).load( function() {
        if( $( '#home-hero-player-v4, #jw-video-player' ).length ) {
            subtitleTracking();
        }
    });

    // Set up JWPlayer
    function playerSetup( id, args ) {
        "use strict";
        // Default setup option
        var jwp_args = {
            'aspectratio' : '16:9',
            'width' : '100%',
            'preload' : 'none'
        };
        // Add/overwrite option
        for ( var key in args ) {
            if ( ! args.hasOwnProperty( key ) ) {
                    continue;
            }

            if ( args[key] ) {
                jwp_args[key] = args[key];
            } else {
                delete jwp_args[key];
            }
        }
        if ( ! $( '#' + id + ' .jwplayer' ).length ) {
            window.jwplayer( id ).setup( jwp_args );

            if ( args[ 'noautoplay' ] ) {
                 jwplayer().on('beforeComplete', function() {
                    // This stops JwPlayer from playing the next video in the playlist.
                    jwplayer().stop();
                    if ( $( '#overlay-video' ).length ) {
                        $( '#overlay-video' ).modal( 'hide' );
                    }
                });
            }

            // GA events
            jwplayer().on( 'play', function(event) {
                if ( window.location.href.indexOf( "my-canity" ) !== -1 && $('.overview-content-thumbnail.demo-account').length ) {
                    dataLayer.push({'event': 'onfreeplay'});
                } else {
                    dataLayer.push({'event': 'onplay'});
                    // Record video play conversion in GA & LO
                    if ( ! getCookie( 'onplayconversion' ) && ! $( '.logged-in' ).length ) {
                        setCookie( 'onplayconversion', 1, 365, '' );
                        dataLayer.push({'event': 'onplayconversion'});
                        window._loq = window._loq || [];
                        window._loq.push(["tag", "Video Play Conversion"]);
                    }
                }
            } );
            jwplayer().on('complete', function(event){
                dataLayer.push({'event': 'oncomplete'});
            });

        }
        else {
            console.log( "jwplayer id " + id + " is already setup, ready to play" );
        }
    }

    function playlistBuilder (  ) {
        var playlist = [];

        $( '.video-container' ).each( function() {
            var video_file = $( this ).attr( 'data-video-location' );
            var video_image = $( this ).attr( 'data-video-thumbnail' );

            if ( video_file ) {
                if ( video_file && video_file.indexOf( BASE_DIR ) === -1 ) {
                    video_file = BASE_DIR + video_file;
                }
                if ( video_image && video_image.indexOf( BASE_DIR ) === -1 ) {
                    video_image = BASE_DIR + video_image;
                }

                playlist.push({
                    file :  video_file,
                    image :  video_image,
                    title : $( this ).attr( 'data-video-title' ),
                    tracks: [{
                        file: $( this ).attr( 'data-cc-english' ),
                        label: "English",
                        kind: "captions",
                    },{
                        file: $( this ).attr( 'data-cc-chinese' ),
                        kind: "captions",
                        label: "Chinese"
                    }]
                });

                videoIndex = playlist.length - 1;
                $( this ).attr( 'data-index', videoIndex );
                if( $('#play-video-btn').length ){
                    $( this ).siblings( '.video-button' ).find( '#play-video-btn' ).attr('data-index', videoIndex );
                }
            }
        });
        playerSetup( 'jw-video-player', { 'playlist' : playlist, 'noautoplay' : true } );
    }

    function videoModalController() {
        // Close modal when close-btn is clicked
        $( '#overlay-video .close-btn' ).on( 'click',  function() {
            if ( $( '#overlay-video' ).hasClass( 'in' ) ) {
                window.jwplayer( 'jw-video-player' ).stop();
                $( '#overlay-video' ).modal( 'hide' );
            }
        });
        $( '#overlay-video' ).on( 'hide.bs.modal', function ( e ) {
            window.jwplayer( 'jw-video-player' ).stop();
        });
        $('body').on( 'click', '.video-play, #play-video-btn, .video-container, .mycanity-video-container', function() {
            window.jwplayer( 'jw-video-player' ).playlistItem( $( this ).attr( 'data-index' ) );
            if ( ( $( this ).attr( 'data-cc-english' ) === undefined || $( this ).attr( 'data-cc-chinese' ) === undefined ) ) {
            	$('#jw-video-player .jw-icon-cc').css('display', 'none');
            	$('#jw-video-player .jw-settings-submenu-button').css('display', 'none');
            } else {
            	$('#jw-video-player .jw-icon-cc').css('display', 'flex');
            	$('#jw-video-player .jw-settings-submenu-button').css('display', 'flex');
            }
            $( '#overlay-video' ).modal( 'show' );
            return false;
        });
        window.jwplayer( 'jw-video-player' ).on( 'play', function(event) {
            if ( mobileCheck() ) {
                window.jwplayer( 'jw-video-player' ).setFullscreen( true );
            }
        });
        window.jwplayer( 'jw-video-player' ).on( 'complete', function(event) {
            if ( mobileCheck() ) {
                $( '#overlay-video' ).modal( 'hide' );
            }
        });
    }

    // Build the jwplayer if the page has the correct ID 's
    if( $( '#jw-video-player' ).length &&  $( '#overlay-video' ).length ) {
        playlistBuilder();
        videoModalController();
    }

    // How it works page currently using it's own jwplayer setup.
    if( $( '#video-modal' ).length  ){
        //How it works page smaller 3 exolainer videos
        var howItWorksPlaylist = {
            'hiw': [
                {
                    "file": UPLOAD_DIR + "/2018/05/how-to-use-canity-part-01.mp4",
                    "image": UPLOAD_DIR + "/2018/05/onboarding-hiw-part-1.jpg",
                    "title": "How the training works",
                },{
                    "file": UPLOAD_DIR + "/2018/05/how-to-use-canity-part-02.mp4",
                    "image": UPLOAD_DIR + "/2018/05/onboarding-hiw-part-2.jpg",
                    "title": "Scheduling your training",
                },{
                    "file": UPLOAD_DIR + "/2018/05/how-to-use-canity-part-03.mp4",
                    "image": UPLOAD_DIR + "/2018/05/onboarding-hiw-part-3.jpg",
                    "title": "Using the Canity resources",
                }
            ]
        };

        // playlist =  howItWorksPlaylist.hiw;
        playerSetup( 'video-player', { 'playlist' : howItWorksPlaylist.hiw } );

        $(  '.mycanity-video-container' ).on( 'click', function() {
            $( '#video-modal' ).modal( 'show' );
            window.jwplayer( 'video-player' ).playlistItem( $( this ).attr( 'data-index' ) );
        });

        // New Canity Intro video setup
        $( '#video-modal' ).on( 'hide.bs.modal', function() {
            window.jwplayer( 'video-player' ).stop();
        });
    }

    // For the faq videos on Canity Resources and FAQ page
    if ( $( '.faq-video-modal' ).length ) {

        // Array with videos containing a "Contact Us" button at the end
        var titlesWithContactUs = [ "How do I create a sub-admin account?", "How do I print a certificate?", "How do I view completed modules?", "My team members can't login", "My team aren't getting training emails?" ];
        var hasContactUsButton, currentPosition, totalLength, timeLeft, timeToWait, setVideoTimer, currentVideoTitle;

        $( '.video-container, #play-video-btn' ).on( 'click', function() {
            if ( titlesWithContactUs.indexOf( $( this ).closest( '.instructional-video-content' ).find('.video-container').attr( 'data-video-title' ) ) > -1 ) {
                hasContactUsButton = true;
            } else {
                hasContactUsButton = false;
            }

            if ( $( '.page-id-26599' ).length ) {
                hasContactUsButton = true;
            }
        });

        jQuery( window ).on( "load", function() {
            jwplayer().on( 'play', function() {
                currentVideoTitle = jwplayer().getPlaylistItem().title;
                $( '.transparent-contact-container' ).remove();

                if ( hasContactUsButton ) {
                    dataLayer.push({
                        'event' : 'faqVideoWatched',
                        'faqVideoTitle' : currentVideoTitle
                    });
                    // Clear the timer
                    clearTimeout( setVideoTimer );
                    // If the video has a contact us button at the end, set a timer, this will update if they skip parts of the video.
                    currentPosition = jwplayer( 'jw-video-player' ).getPosition();
                    duration = jwplayer( 'jw-video-player' ).getDuration();
                    timeLeft = duration - currentPosition;
                    timeToWait = timeLeft * 1000 - 5000;

                    // Only hide the transparent button if there is more than 5 seconds remaining
                    // This ensures that if they pause, the button will still be present
                    if ( timeToWait > 5000 ) {
                        $( '.transparent-contact-container' ).remove();
                    }

                    // Set the timer that the button appears based on the time remaining of the video
                    setVideoTimer = window.setTimeout( function() {
                        $( '.jw-media' ).append( '<div class="transparent-contact-container"><a class="transparent-contact-button" href="/contact-us/" target="_blank"></a></div>' );
                    }, timeToWait );
                }
            });

            // Remove the transparent contact us button when the video finishes
            jwplayer().on( 'beforeComplete', function() {
                $( '.transparent-contact-container' ).remove();
            });
        });

        // Reset the timer to ensure hidden contact us button doesn't appear at the wrong time
        $( '#jw-video-player' ).on( 'click', function() {
            if ( hasContactUsButton ) {
                clearTimeout( setVideoTimer );
            }
        });
    }
    // Populate the overview page
    if ( page_properties && page_id ) {
        var total_element = page_properties['total-element'];
        // Main overview page
        if ( page_properties['page-type'] == 'overview' ) {
            getOverviewType( page_id, 'video', 'top', 0, 'Featured Segment', total_element['top-video'] );
            getOverviewType( page_id, 'video', 'content', 0, 'Popular Segment', total_element['content-video'] );
            getOverviewType( page_id, 'video', 'content', 1, 'Featured Segment', total_element['content-video'] );
            getOverviewType( page_id, 'video', 'content', 2, 'Latest Segment', total_element['content-video'] );
        }
        // Module page (e.g. Phone Skills, Email Skills)
        else if ( page_properties['page-type'] == 'module' ) {
            getOverviewType( page_id, 'video', 'top', 0, page_properties['page-class'], total_element['top-video'] );
            getOverviewType( page_id, 'video', 'content', 0, page_properties['page-class'], total_element['content-video'] );
            toggleSegmentDisplay( COMMON_PROPERTIES['display-thumbnail'], total_element['content-video'], 'none' );
        }
        // Player page
        else if ( page_properties['page-type'] == 'player' ) {
            getOverviewType( page_id, 'video', 'top', 0, page_properties['page-class'], total_element['top-video'] );
        }
        // Staff training page
        else if ( page_properties['page-type'] == 'staff_training' ) {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: [ CONTROLLER_DIR, 'get-training-name.php' ].join('/'),
                data: { 'tid' : $('#tid').val() },
                success: function( page_class ) {
                    if ( page_class ) {
                        getOverviewType( page_id, 'video', 'top', 0, page_class, total_element['top-video'] );
                        getOverviewType( page_id, 'video', 'content', 0, page_class, total_element['content-video'] );
                    }
                },
                error: function ( xhr, ajaxOptions, thrownError ) {
                    console.log(thrownError);
                }
            });
        }

    }
    // Compact staff training page
    if ( $('#cid').length ) {
        $('#main').css('background-color', '#fff');
        $('#main').css('padding', '0px');
        $('.player-container').css('border-bottom-style', 'none');
    } else {
        $('.fusion-header').css('display', 'block');
    }

    // Display/hide all segment button on the module page
    $('#display-all-segments').on( 'click', function() {
        if ( $( this ).html() == 'Show All' ) {
            toggleSegmentDisplay( COMMON_PROPERTIES['display-thumbnail'], total_element['content-video'], 'inline-block' );
            $( this ).html( 'Show Less' );
        } else {
            toggleSegmentDisplay( COMMON_PROPERTIES['display-thumbnail'], total_element['content-video'], 'none' );
            $( this ).html( 'Show All' );
        }
    });

    function toggleSegmentDisplay ( start, end, display ) {
        for ( var i = start; i < end; i++ ) {
            if ( $( '#overview-content-thumbnail-' + i ).length ) {
                if ( display == 'block' ) {
                    $( '#overview-content-thumbnail-' + i ).parent().parent().fadeIn().css( 'display', display );
                } else {
                    $( '#overview-content-thumbnail-' + i ).parent().parent().css( 'display', display );
                }
            }
        }
    }

    // Render html for number of questions in the quiz
    var total_questions = parseInt($('.wpProQuiz_question_page span:last-child').html());

    function questionNumbers( active ) {
        var html = '<div class="question-container"><div class="question-title">Questions</div>';
            for ( var i = 1; i < total_questions + 1; i++ ) {
                if ( i == active ) {
                    html += '<div id="q' + i + '" class="question-number active" question-number="' + i + '">' + i + '</div>';
                } else {
                    html += '<div id="q' + i + '" class="question-number" question-number="' + i + '">'+ i +'</div>';
                }
            }
        html += '</div></div>';
        return html;
    }

    function renderQuestions( ) {
        if ( $('.question-container').length ) {
            $('.question-container').remove();
        }
        for ( var i = 1; i < total_questions + 1; i++ ) {
            $('li.wpProQuiz_listItem:nth-child('+ i +')').prepend(questionNumbers(i));
        }
    }

    $("input.wpProQuiz_button[value='Start quiz']").on( 'click', function( e ) {
        setTimeout(function() {
            renderQuestions();
        }, 500);
    });

    // Staff training page quiz
    $('.page-id-23299 .quiz-container, .page-id-14211 .quiz-container').on( 'click', '.wpProQuiz_question .wpProQuiz_questionInput', function() {
        var question_number = $( this ).parentsUntil('.wpProQuiz_listItem').parent().find('.question-number.active').attr('question-number');
        $(".question-container .question-number[question-number='" + question_number + "']").addClass('quiz-completed');
    });
    // Dashboard quiz
    $('.modal.quiz').on( 'click', '.wpProQuiz_question .wpProQuiz_questionInput', function() {
        var question_number = $( this ).parentsUntil('.wpProQuiz_listItem').parent().find('.question-number.active').attr('question-number');
        $(".question-container .question-number[question-number='" + question_number + "']").addClass('quiz-completed');
    });

    // Remove previous question numbers if quiz restarts
    $("input.wpProQuiz_button[value='Restart quiz']").on( 'click', function( e ) {
        $('.question-container').remove();
    });

    // Overview page
    $( '.page-id-19798.logged-in' ).on( 'click', '.overview-content-thumbnail', function() { updateVideo (this, '19798'); } );
    // Module page
    $( '.page-id-21444.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '21444'); } );
    $( '.page-id-21445.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '21445'); } );
    $( '.page-id-21446.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '21446'); } );
    $( '.page-id-21572.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '21572'); } );
    $( '.page-id-23192.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '23192'); } );
    $( '.page-id-20225.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '20225'); } );
    $( '.page-id-20226.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '20226'); } );
    $( '.page-id-20227.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '20227'); } );
    $( '.page-id-24205.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24205'); } );
    $( '.page-id-24206.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24206'); } );
    $( '.page-id-24207.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24207'); } );
    $( '.page-id-24208.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24208'); } );
    $( '.page-id-24209.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24209'); } );
    $( '.page-id-24210.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24210'); } );
    $( '.page-id-24211.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24211'); } );
    $( '.page-id-24212.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24212'); } );
    $( '.page-id-24213.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24213'); } );
    $( '.page-id-24214.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24214'); } );
    $( '.page-id-24215.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24215'); } );
    $( '.page-id-24216.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24216'); } );
    $( '.page-id-24324.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24324'); } );
    $( '.page-id-24449.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24449'); } );
    $( '.page-id-24445.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '24445'); } );
    $( '.page-id-25545.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '25545'); } );
    $( '.page-id-25546.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '25546'); } );
    $( '.page-id-26470.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '26470'); } );
    $( '.page-id-27059.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '27059'); } );
    $( '.page-id-28520.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '28520'); } );
    $( '.page-id-29332.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '29332'); } );
    $( '.page-id-29333.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '29333'); } );
    $( '.page-id-31207.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '31207'); } );
    $( '.page-id-32185.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '32185'); } );
    $( '.page-id-33161.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '33161'); } );
    $( '.page-id-33292.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '33292'); } );
    $( '.page-id-35887.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '35887'); } );
    $( '.page-id-37196.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '37196'); } );
    $( '.page-id-39845.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '39845'); } );
    $( '.page-id-42022.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '42022'); } );
    $( '.page-id-42848.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '42848'); } );
    $( '.page-id-44876.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '44876'); } );
    $( '.page-id-46031.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '46031'); } );
    $( '.page-id-46349.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '46349'); } );
    $( '.page-id-47080.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '47080'); } );
    $( '.page-id-50667.logged-in .overview-content-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { updateVideo (this, '50667'); } );
    // Complimentary pages
    $( '.page-id-21553' ).on( 'click', '.overview-content-thumbnail', function() { updateVideo (this, '21553'); } );
    $( '.page-id-21665' ).on( 'click', '.overview-content-thumbnail', function() { updateVideo (this, '21665'); } );
    $( '.page-id-22200' ).on( 'click', '.overview-content-thumbnail', function() { updateVideo (this, '22200'); } );
    // Staff Training page
    $( '.page-id-23299 .overview-content-staff-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { if( $( this ).find( '.disabled-action' ).length  === 0 ) { updateVideo (this, '23299'); } } );
    $( '.page-id-14211 .overview-content-staff-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { if( $( this ).find( '.disabled-action' ).length  === 0 ) { updateVideo (this, '14211'); } } );
    $( '.page-id-38374 .overview-content-staff-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { if( $( this ).find( '.disabled-action' ).length  === 0 ) { updateVideo (this, '38374'); } } );
    $( '.page-id-45175 .overview-content-staff-video' ).on( 'click', '.overview-content-thumbnail:not(.demo-account)', function() { if( $( this ).find( '.disabled-action' ).length  === 0 ) { updateVideo (this, '45175'); } } );

    // Update the video
    function updateVideo (obj, page_id) {
        getOverviewId(page_id, 'video', 'top', 0, '', 1, obj.getAttribute('video-id'), obj.getAttribute('video-index') );
    }
    // Get the overview type
    function getOverviewType( page_id, overview_type, position, section, type, total ) {
        getOverview({
            'page_id': page_id,
            'overview': overview_type,
            'position': position,
            'section': section,
            'type': type,
            'total': total
        });
    }
    // Get the overview id
    function getOverviewId( page_id, overview_type, position, section, type, total, video_id, video_index ) {
        getOverview({
            'page_id': page_id,
            'overview': overview_type,
            'position': position,
            'section': section,
            'type': type,
            'total': total,
            'video_id': video_id,
            'video_index': video_index
        });
    }

    // Check cookies for autoplay on/off
    var noautoplayCookie = getCookie('noautoplay');
    if ( noautoplayCookie && noautoplayCookie == 'true' ) {
        page_properties['noautoplay'] = true;
    }

    // Check if it's a mobile device or not
    window.mobileCheck = function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    // Get the overview
    function getOverview ( args ) {
        var page_properties = PAGE_PROPERTIES[args['page_id']];
        if ( args['video_id'] ) {
            var video_scroll = page_properties['video-scroll'];
            if ( ! video_scroll ) {
                video_scroll = 0;
            }
            $( "html, body" ).animate( { scrollTop: video_scroll }, "slow" );
            // Play a specific video on the playlist on the module & staff training pages
            if ( $('.jwplayer').length && page_properties['playlist'] && ! page_properties['playlist-order'] && args['video_index'] ) {
                jwplayer().playlistItem( args['video_index'] );
                return;
            }
        }
        $.ajax({
            type: "POST",
            dataType: "json",
            url: [ CONTROLLER_DIR, COMMON_PROPERTIES['controller'] ].join('/'),
            data: { 'args' : args },
            success: function( retval ) {
                // Set up the video player
                if ( args['overview'] == 'video' && args['position'] == 'top' && $( '#' + COMMON_PROPERTIES['video-id'] ).length ) {
                    // Basic JWP config
                    var jwp_args = {
                        width: "100%",
                        aspectratio: "16:9",
                        primary: "html5",
                        playlist: [],
                        displaytitle: false,
                        displaydescription: false,
                        visualplaylist: false,
                        preload: "none"
                    };

                    // Individual segment playlist
                    if ( $( '#jwplayer-embed-video' ).length && $( '#jwplayer-embed-video' ).attr( 'data-video' ) ) {
                        jwp_args['playlist'].push({
                            image : $( '#jwplayer-embed-video' ).attr( 'data-video-image' ).toString(),
                            title : $( '#jwplayer-embed-video' ).attr( 'data-video-title' ).toString(),
                            sources : [
                                { file : $( '#jwplayer-embed-video' ).attr( 'data-video' ).toString(), label: '720p HD' },
                                { file : $( '#jwplayer-embed-video' ).attr( 'data-video-hd' ).toString(), label: '1080p FHD' },
                            ],
                            tracks: [{
                                file: $( '#jwplayer-embed-video' ).attr( 'data-cc-english' ).toString(),
                                label: "English",
                                kind: "captions",
                            },{
                                file: $( '#jwplayer-embed-video' ).attr( 'data-cc-chinese' ).toString(),
                                kind: "captions",
                                label: "Chinese"
                            }]
                        });
                    }
                    // Default playlist
                    else {
                        if ( page_properties['listbar'] ) {
                            jwp_args['listbar'] = { position : 'right', size : 300 };
                        }
                        if ( page_properties['nocontrolsbar'] ) {
                            jwp_args['controls'] = false;
                        }

                        // Create a JWP playlist
                        if ( page_properties['playlist-order'] && page_properties['playlist-order'].length == page_properties['total-element']['content-video'] ) {
                            if ( ! args['video_index'] ) {
                                for ( var i = 0; i < page_properties['playlist-order'].length; i++ ) {
                                    var playlist_args_1 = getPlaylistArgs( retval[page_properties['playlist-order'][i]] );
                                    if ( playlist_args_1 ) {
                                        jwp_args['playlist'].push( playlist_args_1 );
                                    }
                                }
                            }
                        }
                        else {
                            for ( var j = 0; j < retval.length; j++ ) {
                                var playlist_args_2 = getPlaylistArgs( retval[j] );
                                if ( playlist_args_2 ) {
                                    jwp_args['playlist'].push( playlist_args_2 );
                                }
                            }
                        }
                    }

                    try {
                        // Set up the JWP
                        if ( ! $('.jwmain').length ) {
                            jwplayer( COMMON_PROPERTIES['video-id'] ).setup( jwp_args );
                            jwplayer( COMMON_PROPERTIES['video-id'] ).on( 'setupError', function( evt ) {
                                var error_code = evt.code;
                                var error_message = evt.error.message + ' (' + evt.error.stack + ')';
                                var error_type = evt.type;
                                console.log( "failed to set up jwplayer: " + error_type + ' (' + error_code + '): ' + error_message );
                                window._loq = window._loq || [];
                                window._loq.push(["tag", "JWP Setup Error"]);

                                url = 'https://ssl.p.jwpcdn.com/player/v/8.3.3/jwplayer.core.controls.html5.js';
                                var newWin = window.open( url );
                                if ( ! newWin || newWin.closed || typeof newWin.closed == 'undefined' ) {
                                    var jwp_error = 'Uh oh! Something is stopping your video from loading. This could be caused by your network error, firewall or AdBlock. If you have AdBlock enabled on your browser, please disable it and refresh the page. If this problem persists, check with your IT department, or <a target="_blank" href="/contact-us">contact us</a> for assistance.';
                                    if ( $( '.page-id-38374 .player-container, .page-id-23299 .player-container' ).length ) {
                                        $( '.page-id-38374 .player-container, .page-id-23299 .player-container' ).html( '<div class="video-setup-error"><img src="https://www.canity.com/wp-content/uploads/2016/08/anxious-man-2.png" /><p>' + jwp_error + '</p></div>' );
                                    }
                                }

                                var http = new XMLHttpRequest();
                                http.open('HEAD', url, false);
                                http.send();
                                console.log("HTTP status: " + http.status );
                            });

                            jwplayer( COMMON_PROPERTIES['video-id'] ).on( 'play', function( evt ) {
                                // Set to full screen on mobile
                                if ( mobileCheck() ) {
                                    jwplayer( COMMON_PROPERTIES['video-id'] ).setFullscreen( true );
                                }
                            });

                            getTrainingProgress();
                            trialOverlayHideShow();
                        }
                        else {
                            // Play from playlist
                            if ( page_properties['playlist'] ) {
                                jwplayer().playlistItem( args['video_index'] );
                            }
                            // Load a new playlist
                            else {
                                var playlists = [];
                                for ( var k = 0; k < retval.length; k++ ) {
                                    var playlist_args_3 = getPlaylistArgs( retval[k] );
                                    if ( playlist_args_3 ) {
                                        playlists.push( playlist_args_3 );
                                    }
                                }
                                jwplayer().load( playlists );
                            }
                        }

                        // Play button click
                        $( '#'+ COMMON_PROPERTIES['jwplayer-play'] ).on( 'click', function() {
                            playVideo();
                        });

                        // Get play back rate from cookies
                        if ( $('.speed-control').length ) {
                            var speedRate = getCookie('speed-rate');
                            if ( speedRate !== '' ) {
                                $('.speed-control').attr('data-selected-speed', speedRate);
                            }
                        }

                        // Player triggered events
                        jwplayer().on('play', function() {
                            hidePlayButton();
                            var jwplist = jwplayer().getPlaylistItem();
                            currentPlay( jwplist['mediaid'] );
                            videoDescriptionScroll();

                            // GA onplay event
                            if ( window.location.href.indexOf( "my-canity" ) !== -1 && $('.overview-content-thumbnail.demo-account').length ) {
                                dataLayer.push({'event': 'onfreeplay'});
                            } else {
                                dataLayer.push({'event': 'onplay'});
                            }

                            $('.now-playing').text('Now Playing');
                            if ( $('#video-title').length && $('#video-description').length ) {
                                $('#video-title').text( jwplist['title'] );
                                $('#video-description').text( jwplist['description'] );
                            }
                            if ( $('.video-absoulte-container').length && $('.video-absoulte-container').css('display') != 'none' ) {
                                $('.video-absoulte-container').fadeOut(200);
                                $('#controls-play-button i').addClass('fa-pause');
                                $('#controls-play-button i').removeClass('fa-play');
                                $('#controls-play-button').attr('title', 'Pause');
                            }

                            // Video play back rate
                            if ( $('.speed-control').length ) {
                                $('.jwplayer video')[0].playbackRate = $('.speed-control').attr('data-selected-speed');
                            }
                            // Hide the preview image once it started playing using inline style (IE issue)
                            if ( $( '.jwplayer .jw-preview.jw-reset' ).attr( 'style' ).indexOf( 'display: none' ) === -1 ) {
                                $( '.jwplayer .jw-preview.jw-reset' ).hide();
                            }
                        }); // End onPlay

                        var setIdle = function(state){
                            $('.overview-content-thumbnail .equalizer').removeClass('equalizer-animation');
                            $('.now-playing').text('Paused');
                            if (state === 'stop') {
                                $('.overview-content-thumbnail .play-btn-overlay').fadeOut("fast");
                            }
                            if ( $('.video-absoulte-container').length && $('.video-absoulte-container').css('display') == 'none' ) {
                                $('.video-absoulte-container').fadeIn(200);
                                $('#controls-play-button i').removeClass('fa-pause');
                                $('#controls-play-button i').addClass('fa-play');
                                $('#controls-play-button').attr('title', 'Play');
                            }
                        };

                        jwplayer().on('pause', function() {
                            setIdle('pause');
                        });
                        jwplayer().on('idle', function() {
                            setIdle('stop');
                        });
                        jwplayer().on('play', function() {
                            if ( jwplayer().getPlaylistItem( jwplayer().getPlaylistIndex() + 1 ) !== undefined ) {
                                $('#overview-text-next-0').html( "Coming Up Next: " + jwplayer().getPlaylistItem( jwplayer().getPlaylistIndex() + 1 )['title'] );
                            } else {
                                $('#overview-text-next-0').html( "" );
                            }

                            if ( $('#overview-text-current-0').length && $('#overview-text-duration-0').length ) {
                                if ( jwplayer().getPlaylistItem( jwplayer().getPlaylistIndex() ) !== undefined ) {
                                    if ( retval.length > 1 ) {
                                        if ( page_properties['playlist-order'] ) {
                                            $('#overview-text-current-0').html( retval[page_properties['playlist-order'][jwplayer().getPlaylistIndex()]]['class_name'] + ": " + retval[page_properties['playlist-order'][jwplayer().getPlaylistIndex()]]['video_title'] );
                                            $('#overview-text-duration-0').html( retval[page_properties['playlist-order'][jwplayer().getPlaylistIndex()]]['video_duration'] );
                                        } else {
                                            $('#overview-text-current-0').html( retval[jwplayer().getPlaylistIndex()]['class_name'] + ": " + retval[jwplayer().getPlaylistIndex()]['video_title'] );
                                            $('#overview-text-duration-0').html( retval[jwplayer().getPlaylistIndex()]['video_duration'] );
                                        }
                                    }
                                } else {
                                    $('#overview-text-current-0').html( "" );
                                    $('#overview-text-duration-0').html( "" );
                                }
                            }
                            if ( jwplayer().getPlaylistItem() !== undefined ) {
                                $('#overview-top-header-0').html( jwplayer().getPlaylistItem()['title'] );
                                $('#overview-top-description-0').html( jwplayer().getPlaylistItem()['description'] );
                            }
                            removeOverlay(jwplayer().getPlaylistItem()['mediaid'], true);

                            hidePlayButton();
                            var jwplist = jwplayer().getPlaylistItem();
                            currentPlay( jwplist['mediaid'] );
                            videoDescriptionScroll();

                            // GA onplay event
                            if ( window.location.href.indexOf( "my-canity" ) !== -1 && $('.overview-content-thumbnail.demo-account').length ) {
                                dataLayer.push({'event': 'onfreeplay'});
                            } else {
                                dataLayer.push({'event': 'onplay'});
                            }

                            $('.now-playing').text('Now Playing');
                            if ( $('#video-title').length && $('#video-description').length ) {
                                $('#video-title').text( jwplist['title'] );
                                $('#video-description').text( jwplist['description'] );
                            }
                            if ( $('.video-absoulte-container').length && $('.video-absoulte-container').css('display') != 'none' ) {
                                $('.video-absoulte-container').fadeOut(200);
                                $('#controls-play-button i').addClass('fa-pause');
                                $('#controls-play-button i').removeClass('fa-play');
                                $('#controls-play-button').attr('title', 'Pause');
                            }

                            // Video play back rate
                            if ( $('.speed-control').length ) {
                                $('.jwplayer video')[0].playbackRate = $('.speed-control').attr('data-selected-speed');
                            }
                            // Hide the preview image once it started playing using inline style (IE issue)
                            if ( $( '.jwplayer .jw-preview.jw-reset' ).attr( 'style' ).indexOf( 'display: none' ) === -1 ) {
                                $( '.jwplayer .jw-preview.jw-reset' ).hide();
                            }
                        });
                        jwplayer().on('complete', function(e) {
                            if ( ! page_properties['playlist'] ) {
                                displayPlayButton();
                                removeOverlay(jwplayer().getPlaylistItem()['mediaid'], true);
                            }
                            saveTrainingProgress( jwplayer().getPlaylistItem()['mediaid'] );
                            dataLayer.push( { 'event': 'oncomplete' } );
                        });
                        jwplayer().on('beforeComplete', function(e) {
                            if ( page_properties['noautoplay'] ) {
                                jwplayer().stop();
                                $( '.jwplayer .jw-preview.jw-reset' ).show();
                            }
                        });
                        jwplayer().on('fullscreen', function(e) {
                            if ( e.fullscreen ) {
                                $('div#jwplayer-0_wrapper, div#overview-top-player-0_wrapper, .jwplayer').addClass('no-border');
                            } else {
                                $('div#jwplayer-0_wrapper, div#overview-top-player-0_wrapper, .jwplayer').removeClass('no-border');
                            }
                        });
                        jwplayer().on('playlistComplete', function(){
                            removeOverlay(jwplayer().getPlaylistItem()['mediaid'], true);
                            $('.overview-content-thumbnail .play-btn-overlay').fadeOut("fast");
                            displayPlayButton();
                            $('#overview-top-header-0').html( jwplayer().getPlaylistItem(0)['title'] );
                            $('#overview-top-description-0').html( jwplayer().getPlaylistItem(0)['description'] );
                        });
                        jwplayer().on('time',function() {
                             var duration = jwplayer().getDuration();
                             var progress = jwplayer().getPosition();
                             var percentage = Math.floor((100 / duration) * progress);
                             $('.bs-progress-bar').attr('aria-valuenow', percentage);
                             $('.bs-progress-bar').css( 'width', percentage + "%");
                        });
                        // Auto play the video
                        if ( args['video_id'] ) {
                            playVideo();
                        }
                    }
                    catch ( error ) {
                        alert( error.message );
                    }
                }

                // Update the page content
                if ( page_properties['playlist-order'] && page_properties['playlist-order'].length == page_properties['total-element']['content-video'] ) {
                    for ( var l = 0; l < page_properties['playlist-order'].length; l++ ) {
                        if ( ! args['video_index'] ) {
                            if ( args['position'] == 'content' ) {
                                retval[page_properties['playlist-order'][l]]['attr']['content-thumbnail']['video-index'] = l;
                            }
                            updatePageContent( retval[page_properties['playlist-order'][l]], args['page_id'], args['position'], args['section'], l );
                        }
                    }
                }
                else {
                    for ( var m = 0; m < retval.length; m++ ) {
                        updatePageContent( retval[m], args['page_id'], args['position'], args['section'], m );
                    }
                }
                var index_number = 0;
                $( '.overview-content-thumbnail' ).each( function() {
                    if ( $( this ).attr('video-index') != index_number ) {
                        $( this ).attr('video-index', index_number );
                    }
                    index_number++;
                });

                setHover();

                // Hide show all button if needed
                if ( $( '.overview-content-thumbnail' ).length && $( '.display-all-segments-box' ).length ) {
                    if ( $( '.overview-content-thumbnail' ).length <= COMMON_PROPERTIES['display-thumbnail'] ) {
                        $( '.display-all-segments-box' ).hide();
                    }
                }
            },
            error: function ( xhr, ajaxOptions, thrownError ) {
                console.log(thrownError);
            }
        });
    }

    // Previous and next play button
    $('.overview-play-next').on( 'click', function()   { jwplayer().playlistItem( jwplayer().getPlaylistIndex() + 1 ); } );
    $('.overview-play-previous').on( 'click', function() { jwplayer().playlistItem( jwplayer().getPlaylistIndex() - 1 ); } );

    // Play/stop the video
    function playVideo ( ) {
        if ( $('.video-absoulte-container').length && $('.video-absoulte-container').css('display') != 'none' ) {
            $('.video-absoulte-container').fadeOut(200);
        }
        jwplayer().play();
        hidePlayButton();
    }

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    // Get the JWP playlist args
    function getPlaylistArgs ( playlistItem ) {
        var video_file = playlistItem["video_file"];
        var hd_video_file = playlistItem["hd_video_file"];
        var sd_video_file = playlistItem["sd_video_file"];
        var video_image_file = playlistItem["video_image_file"];
        var video_exclusion = playlistItem["video_exclusion"];

        // Allow admin to view deselected video
        if ( window.location.href.indexOf( "my-canity" ) !== -1 ) {
            video_exclusion = false;
        }


        var playlist_args;
        if ( ! video_exclusion ) {
            playlist_args = {
                image: video_image_file,
                title: playlistItem["video_title"],
                mediaid: playlistItem["video_id"],
                description: playlistItem["video_description"],
                sources: [
                    {
                        file: sd_video_file,
                        label: '480p SD'
                    },
                    {
                        file: video_file,
                        label: '720p HD',
                        default: true
                    },
                    {
                        file: hd_video_file,
                        label: '1080p FHD'
                    }
                ]
            };

            // Get captions if available
            if ( playlistItem.caption.length ) {
                playlist_args.tracks = [];
                for ( var n = 0; n < playlistItem.caption.length; n++ ) {
                    playlist_args.tracks.push({
                        file: playlistItem.caption[n].file,
                        kind: 'captions',
                        label: playlistItem.caption[n].language
                    });
                }
            }
        }
        return playlist_args;
    }

    // Hide/display play button
    function hidePlayButton() { $( '#'+ COMMON_PROPERTIES['jwplayer-play'] ).css( 'display', 'none' ); }
    function displayPlayButton() { $( '#'+ COMMON_PROPERTIES['jwplayer-play'] ).css( 'display', 'block' ); }

    // Update the page content
    function updatePageContent( data, page_id, position, section, element_number ) {
        if ( position in PAGE_PROPERTIES[page_id]['page-element'] ) {
            var page_elements = PAGE_PROPERTIES[page_id]['page-element'][position];
            var prefix_id   = COMMON_PROPERTIES['element-prefix-id'];

            for ( var i = 0; i < page_elements.length; i++ ) {
                var element_name = page_elements[i];
                var element_id =
                    '#' + [ prefix_id, position, 'section', section ].join('-') + ' ' +
                    '#' + [ prefix_id, element_name ].join('-') + '-' +
                    element_number;
                if ( element_name == 'bottom-label' ) {
                    element_id = '#' + [ prefix_id, element_name ].join('-') + '-' + element_number;
                }

                if ( $( element_id ).length ) {
                    // HTML
                    if ( data['html'] && data['html'][element_name] ) {
                        $( element_id ).html( data['html'][element_name] );
                    }
                    // Link
                    if ( data['link'] && data['link'][element_name] ) {
                        $( element_id ).attr( 'href', data['link'][element_name] );
                    }
                    // Image
                    if ( data['image'] && data['image'][element_name] ) {
                        $( element_id + ' img' ).attr( 'src', data['image'][element_name] );
                    }
                    // Attribute
                    if ( data['attr']  && data['attr'][element_name] ) {
                        for ( var key in data['attr'][element_name] ) {
                            $( element_id ).attr( key, data['attr'][element_name][key] );
                        }
                    }
                    // CSS
                    if ( data['css'] && data['css'][element_name] ) {
                        for ( var prop in data['css'][element_name] ) {
                            $( element_id ).css( prop, data['css'][element_name][prop] );
                        }
                    }
                }
            }
        }
    }

    // Add hover on overlay and highlight the currently playing item
    if ( $('.overview-content-thumbnail').length ) {
        if ( $('.overview-content-thumbnail-overlay').length ) {
            $('.overview-content-thumbnail-overlay').append('<span class="play-btn-overlay"><div class="play-circle"><span title="Play video" class="play"></span></div><div class="center-me"><div class="equalizer"></div></div></span>');
            $('.overview-content-thumbnail-overlay').on( 'click', function( e ) { playVideo(); });
        } else {
            $('.overview-content-thumbnail').append('<span class="play-btn-overlay"><span title="Play video" class="play"></span><div class="center-me"><div class="equalizer"></div></div></span>');
            $('.overview-content-thumbnail').on( 'click', function( e ) { playVideo(); });
        }
    }

    function setHover() {
        // Avoid duplicate event - see below
        if ( ! $( '.overview-content-video' ).length && ! $( '.overview-content-staff-video' ).length ) {
            // Set hover once
            if ( $( '.overview-content-thumbnail:not(.mouse-event)').length ) {
                $( '.overview-content-thumbnail' ).addClass( 'mouse-event' );
                // Mouse over
                $( '.overview-content-thumbnail' ).on( 'mouseover', function() {
                    $( this ).find( '.play-btn-overlay' ).stop().fadeIn( "fast" );
                });
                // Mouse leave
                $( '.overview-content-thumbnail' ).on( 'mouseleave', function() {
                    var state = jwplayer().getState();
                    var video_attr = $( this ).attr('video-id');
                    var playlist_item = jwplayer().getPlaylistItem();

                    var media_id = 0;
                    if ( playlist_item && playlist_item['mediaid'] ) {
                        media_id = playlist_item['mediaid'];
                    }
                    if ( state === 'idle' || video_attr !== media_id  ) {
                        $( this ).find( '.play-btn-overlay' ).stop().fadeOut("fast");
                    }
                });
            }
        }
    }
    // Avoid duplicate event - see setHover()
    if ( $( '.overview-content-video' ).length || $( '.overview-content-staff-video' ).length ) {
        $('.overview-content-video, .overview-content-staff-video').on( 'mouseover', '.overview-content-thumbnail', function() {
            $( this ).find('.play-btn-overlay').stop().fadeIn("fast");
        });
        $('.overview-content-video, .overview-content-staff-video').on( 'mouseleave', '.overview-content-thumbnail', function() {
            var state = jwplayer().getState();
            var video_attr = $( this ).attr('video-id');
            var playlist_item = jwplayer().getPlaylistItem();

            var media_id = 0;
            if ( playlist_item && playlist_item['mediaid'] ) {
                media_id = playlist_item['mediaid'];
            }

            if ( state === 'idle' || video_attr !== media_id ) {
                $( this ).find('.play-btn-overlay').stop().fadeOut("fast");
            }
        });
    }

    // Get the currently playing video and display the overlay and add the equalizer animation
    function currentPlay( id ) {
        removeOverlay(id , false);
        $('.overview-content-thumbnail[video-id='+ id +'] .play-btn-overlay').css( 'display', 'block');
        setTimeout( function() { $('.overview-content-thumbnail[video-id='+ id +'] .now-playing').animate({top: 10}, 400); }, 500);
        $('.overview-content-thumbnail[video-id='+ id +'] .play').css( 'display', 'none' );
        $('.overview-content-thumbnail[video-id='+ id +'] .play-circle').css( 'display', 'none' );
        $('.overview-content-thumbnail[video-id='+ id +'] .equalizer').addClass('equalizer-animation');
    }
    // Remove overlay on all thumbnails except the one playing
    function removeOverlay( id , i ) {
        if ( i !== false ) { $('.overview-content-thumbnail .now-playing').animate({top: -20}, 400); }
        $('.play-btn-overlay').not($('.overview-content-thumbnail[video-id='+ id +'] .play-btn-overlay')).fadeOut("fast");
        $('.overview-content-thumbnail .equalizer').removeClass('equalizer-animation');
        $('.overview-content-thumbnail .play').css( 'display', 'block' );
        $('.overview-content-thumbnail .play-circle').css( 'display', 'block' );
    }

    // Change href and text on complimentary segments nav
    if ( window.location.href.indexOf("complimentary-segments") > -1 ) {
        $('#menu-dashboard-menu li a').not($('#menu-dashboard-menu li a.canity-box-shadow')).attr("href", "/").text('<< Back to Home Page');
        $('.comp-play-btn').on( 'click', function( e ){
            playVideo();
        });
    }

    // Display the jwplayer play icon for individual segment videos
    $('.add-play-button').on( 'DOMNodeInserted', function(e) {
        if ( ! $('#overview-top-player-0_display_button').hasClass('jwplayer-player-button') ) {
            $('#overview-top-player-0_display_button').addClass('jwplayer-player-button');
        }
    });

    // Auto scroll video description when it's higher than the parent container of the custom control bar
    function videoDescriptionScroll() {
        var totalHeight = $('#video-title').height() + $('#video-description').height();
        if ( totalHeight > $('#control-bar-container').height() ) {
            var moveHeight = totalHeight - $('#control-bar-container').height() + 5;
            $('#video-info').delay( 3000 ).animate({
                bottom: moveHeight + 'px'
            },
            {
                easing: 'swing',
                duration: 2000,
                complete: function(){
                    $('#video-info').delay( 3000 ).animate({
                        bottom: '0px'
                    });
                    videoDescriptionScroll();
                }
            });
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

    // Autoplay on/off
    $('#playlist-autoplay').on('change', function(){
        if ( this.checked ) {
            page_properties['noautoplay'] = false;
            setCookie('noautoplay', false, 30, '');
        } else {
            page_properties['noautoplay'] = true;
            setCookie('noautoplay', true, 30, '');
        }
    });

    // Add staff activities
    function addActivity( category, type, single ) {
        var tid = getParameterByName('tid');
        var activity_cookie = [ tid, category, type ].join( '-' );
        if ( tid ) {
            if ( ! single || ( single && ! getCookie( activity_cookie ) ) ) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: LIB_PATH + '/activity.php',
                    data: {
                        'action'   : 'add',
                        'tid'      : tid,
                        'category' : category,
                        'type'     : type
                    },
                    success: function( retval ) {
                        if ( retval["retval"] ) {
                            setCookie( activity_cookie, true, 1, 'staff-training' );
                        }
                        else {
                            console.log( tid + ": activity not added (" + category + "/" + type + ")" );
                        }
                    },
                    error: function( jqXHR, textStatus, errorThrown ){
                        console.log( errorThrown );
                    }
                });
            }
            else {
                console.log( tid + ": activity not added, already exist (" + category + "/" + type + ")" );
            }
        }
    }

    // Get/save the training progress
    function getTrainingProgress() {
        trainingProgress( 'get' );
    }
    function saveTrainingProgress ( video_id ) {
        trainingProgress( 'save', video_id );
    }
    function trainingProgress ( action, video_id ) {
        // Training progress for new quiz
        if ( $( "#canity-quiz" ).length ) {
            var uid = getParameterByName( 'uid' );
            var tid = getParameterByName( 'tid' );
            if ( uid || tid ) {
                // Build the args
                var args = {
                    'action': action,
                    'uid': uid,
                    'tid': tid
                };
                if ( action == 'save' ) {
                    args['video_id'] = video_id;
                    var el = $( '.overview-content-thumbnail[video-id=' + video_id + ']' ).closest( '.episode-li' );
                    if ( ! el.hasClass( 'watched' ) ) {
                        el.addClass( 'watched' );
                    }
                    var video_completed = $( '.episode-li.watched' ).length;
                    var video_incomplete = $( '.episode-li:not(.watched)' ).length;
                    var total_video = video_completed + video_incomplete;
                    updateQuizProgressBar( video_completed, total_video );

                    if ( video_completed == 1 ) {
                        addActivity( "Started Watching", "has started watching " + $('.overview-content-class').text() + " training videos", true );
                    } else if ( video_completed == total_video ) {
                        addActivity( "Finished Watching", "has finished watching " + $('.overview-content-class').text() + " training videos", true );
                    }
                }
                // Send the request
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: [ CONTROLLER_DIR, 'training-progress.php' ].join('/'),
                    data: args,
                    success: function( data ) {
                        if ( data['retval'] ) {
                            var video_completed = data['progress']['completed'].length;
                            var video_incomplete = data['progress']['incomplete'].length;

                            // Mark watched video
                            for ( var i = 0; i < video_completed; i++ ) {
                                var completed = $( '.overview-content-thumbnail[video-id=' + data['progress']['completed'][i] + ']' ).closest( '.episode-li' );
                                if ( ! completed.hasClass( 'watched' ) ) {
                                    completed.addClass( 'watched' );
                                }
                            }
                            // Mark unwatched video
                            for ( var j = 0; j < video_incomplete; j++ ) {
                                var incomplete = $( '.overview-content-thumbnail[video-id=' + data['progress']['incomplete'][j] + ']' ).closest( '.episode-li' );
                                if ( incomplete.hasClass( 'watched' ) ) {
                                    incomplete.removeClass( 'watched' );
                                }
                            }
                            // Recalculate the number of videos from the front-end (faster)
                            video_completed = $( '.episode-li.watched' ).length;
                            video_incomplete = $( '.episode-li:not(.watched)' ).length;
                            var total_video = video_completed + video_incomplete;
                            updateQuizProgressBar( video_completed, total_video );
                        }
                        else {
                            console.log( "failed to " + action + " the training progress" );
                        }
                    },
                    error: function ( xhr, ajaxOptions, thrownError ) {
                        console.log( thrownError );
                    }
                });
            }
        }
    }
    // Update quiz progress bar
    function updateQuizProgressBar( video_completed, total_video ) {
        var completed_percentage = Math.round( video_completed / total_video * 100 );
        if ( ! video_completed ) {
            $( 'span.fusion-progressbar-text' ).html( 'No videos watched yet' );
        }
        else if ( video_completed != total_video ) {
            $( 'span.fusion-progressbar-text' ).html( 'Videos watched: ' + video_completed + ' out of ' + total_video );
        }
        else {
            $( 'span.fusion-progressbar-text' ).html( 'You\'ve watched the complete module! Click the button below to start the quiz.' );
            $( 'div.fusion-progressbar-bar' ).removeClass( 'progress-striped active ');
            $( '#start-quiz-button' ).removeClass( 'disabled' );
        }
        $( 'div.progress-bar-content' ).css( 'width', completed_percentage + '%' ).attr( 'aria-valuenow', completed_percentage );
    }

    if ( dataLayer && dataLayer[0] && dataLayer[0].visitorId ) {
        visitor_id = dataLayer[0].visitorId;
        window._loq = window._loq || [];
        window._loq.push(["tag", "U-" + visitor_id]);
    }
    if ( $( '.demo-account-trial-page' ).length ) {
        window._loq = window._loq || [];
        window._loq.push(["tag", "Demo Account"]);
    }

    // Deselect Video
    if ( $( '.overview-content-video' ).length ) {
        // Deselect video main button
        $( '.overview-play-deselect' ).on( 'click', function() {
            // First click
            if ( ! $( this ).hasClass( 'active' ) ) {
                $( this ).addClass( 'active' );
                $( '.overview-content-thumbnail:not(:first, :last, .main-deselected)' ).each( function() {
                    // Deselected - update the class & show button to remove the deselection
                    if ( $( this ).hasClass( 'deselected' ) ) {
                        $( this ).removeClass( 'greyed' );
                        $( this ).parent().children( 'i.deselect#remove' ).show();
                    }
                    // Not deselected - show button to deselect
                    else {
                        $( this ).parent().children( 'i.deselect#set' ).show();
                    }
                    $( this ).addClass( 'jiggle' ).parent().children( 'i.deselect').addClass( 'jiggleCircle' );
                    $( '.overview-content-video' ).addClass( 'border-box' );
                    $( '.deselect-header-text' ).show();
                });

            }
            // Second click
            else {
                $( this ).removeClass( 'active' );
                $( '.overview-content-thumbnail:not(:first, :last, .main-deselected)' ).each( function() {
                    // Hide the deselection buttons and greyed the image
                    $( this ).parent().children( 'i.deselect' ).hide();
                    if ( $( this ).hasClass( 'deselected' ) ) {
                        $( this ).addClass( 'greyed' );
                    }
                    $( this ).removeClass( 'jiggle' ).parent().children( 'i.deselect').removeClass( 'jiggleCircle' );
                    $( '.overview-content-video' ).removeClass( 'border-box' );
                    $( '.deselect-header-text' ).hide();
                });
            }
        });

        // Deselect - set or remove button
        $( '.overview-content-video' ).on( 'click', 'i.deselect', function() {
            var $this = $( this );
            var action = $this.attr( 'id' );
            var video_id = $this.parent().children( '.overview-content-thumbnail' ).attr( 'video-id' );
            var deselected_total = $( '.overview-content-thumbnail.deselected' ).length;

            // Update the deselection on the database
            if ( action && video_id ) {
                $.ajax({
                    url: CONTROLLER_LIB_PATH + '/request.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        'head' : 'VideoExclusionRequest',
                        'args' : {
                            'action'   : action,
                            'video_id' : video_id
                        }
                    },
                    success: function ( result ) {
                        if ( result.retval ) {
                            // Hide the clicked button
                            $this.hide();
                            // Show the other button and update the class
                            if ( action == 'set' ) {
                                $this.parent().children( 'i.deselect#remove' ).show();
                                $this.parent().children( '.overview-content-thumbnail' ).addClass( 'deselected' );
                            }
                            else if ( action == 'remove' ) {
                                $this.parent().children( 'i.deselect#set' ).show();
                                $this.parent().children( '.overview-content-thumbnail' ).removeClass( 'deselected' );
                            }
                        }
                    }
                });
            }
            else {
                console.log( "missing parameters (action=" + action + ";video=" + video_id + ")" );
            }
        });
    }
    // End Deselect Video
    function trialOverlayHideShow() {
        if( $( '.trial-video-overlay' ).length ) {
            jwplayer().on('play', function() {
                $( '.trial-video-overlay' ).hide();
            });

            jwplayer().on('playlistComplete', function(){
                $( '.trial-video-overlay' ).show();
            });
        }
    }

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            // Check to see if this current container is within viewport
            if ( ( element_bottom_position >= window_top_position ) &&
                 ( element_top_position <= window_bottom_position ) ) {
                $element.addClass('in-view');
            }
        });
    }

    // How it works page steps section animation
    if ( $( '.animation-element' ).length ) {
        var $animation_elements = $('.animation-element');
        var $window = $(window);
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }

    if( $( '.related-modules-slick-container' ).length ) {
        $( '.tms-list-suggestions' ).slick({
            slide: 'li',
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            nextArrow: $( '#related-modules-slick-right' ),
            prevArrow: $( '#related-modules-slick-left' ),
            responsive: [
                {
                    breakpoint: 1160,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 730,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        });
    }

    if( $( '.tms-playlist-show-all-lessons' ).length ) {
        $( '.tms-playlist-show-all-lessons' ).on( 'click', function() {
            $( '.tms-playlist .tms-list-options' ).toggleClass( 'first-three' );
            $( '.show-all-lessons-chevron-down, .show-all-lessons-chevron-up' ).toggle();
        });
    }

    if( $( '.lp-package-modules-slider' ).length ) {
        $( '.lp-package-modules-slider' ).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: '<a class="slick-next"><i class="fa fa-caret-right"></i></a>',
            prevArrow: '<a class="slick-prev"><i class="fa fa-caret-left"></i></a>',
            dots: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1160,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        autoplay: false
                    }
                },
                {
                    breakpoint: 730,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        autoplay: false,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        autoplay: false,
                        autoplaySpeed: 2000
                    }
                }
            ]
        });
    }

}); // End ready

jQuery( window ).load( function() {
    setTimeout( function() {
        if ( jQuery( "#loader" ).length ) {
            jQuery( "#loader" ).fadeOut();
        }
        if ( jQuery('#welcomeModal').length ) {
            if ( jQuery( window ).width() >= 1024 ) {
                jQuery('#welcomeModal').modal();
            }
        }
    }, 500);
});