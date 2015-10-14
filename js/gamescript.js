document.addEventListener('DOMContentLoaded', function() {
	console.log('Voila!')
});

var GameObjects = new Array('', "notepad", "camera", "key", "graffiti");


//pages for choose your own adventure
var current_page = 0;
$(document).ready(function () {
    load_page(0);
    $('#response').on('click', '.choice', function () {
        var target = $(this).data('target');
        load_page(target);
    });
});

//choose your own adventure script
function load_page(id) {
    // Fetch JSON for page data associated with given ID
    var page_data = PAGES[id];

    clear_page();
    set_page_text(page_data.text);
    if (page_data.type === 'choice') {
        for (var choice in page_data.choices) {
            var choice_data = page_data.choices[choice];
            add_choice(choice_data.text, choice_data.target);

        }
    }
}




function set_page_text(text) {
    $("#page_text").append("<p>" + text + "</p>");
}

function add_choice(text, target) {
    $("#response").append("<button class=choice data-target=" + target + ">" + text + "</button>");
}

function clear_page() {
    $("#page_text").empty();
    $("#response").empty();
}

// Page data
var PAGES = [{
    'text': 'You approach an abandoned warehouse. Which entrance do you take?',
        'type': 'choice',
        'choices': [{
        'text': 'Side door.',
            'target': 1
    }, {
        'text': 'Back sliding garage door.',
            'target': 2
    }, {
        'text': 'Next step.',
            'target': 3
    }, {
        'text': 'Next step.',
            'target': 4
    }]
}, {
    'text': 'Next step.',
        'type': 'choice',
        'choices': [{
        'text': 'Result',
            'target': 0
    }]
}, {
    'text': 'Next step.',
        'type': 'choice',
        'choices': [{
        'text': 'Result',
            'target': 0
    }]
}, {
    'text': 'Next step.',
        'type': 'choice',
        'choices': [{
        'text': 'Result',
            'target': 0
    }]
}, {
    'text': 'Next step.',
        'type': 'choice',
        'choices': [{
        'text': 'Result',
            'target': 0
    }]
}];

