// convert score to stars element on hero image
let generateMainRating = (score) => {
    let rating_html_string = '';
    let i = 0;
    while (i < score) {
        rating_html_string += '<span class="fa fa-2x fa-star checked"></span>';
        i++;
    }
    while (i < 5) {
        rating_html_string += '<span class="fa fa-2x fa-star"></span>';
        i++;
    }
    return rating_html_string;
}

// convert score to stars element on reviews
let generateReviewRating = (score) => {
    let rating_html_string = '';
    let i = 0;
    while (i < score) {
        rating_html_string += '<span class="fa fa-lg fa-star checked"></span>';
        i++;
    }
    while (i < 5) {
        rating_html_string += '<span class="fa fa-lg fa-star"></span>';
        i++;
    }
    return rating_html_string;
}

let generateRating = (score) => {
    let rating_html_string = '';
    let i = 0;
    while (i < score) {
        rating_html_string += '<span class="fa fa-star checked"></span>';
        i++;
    }
    while (i < 5) {
        rating_html_string += '<span class="fa fa-star"></span>';
        i++;
    }
    return rating_html_string;
}

