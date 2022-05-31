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

// convert score to stars rating on restaurant cards
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

// section user menu user profile

// remove dashboard button for non admin users
if (!sessionStorage.getItem('user_is_admin')) {
    document.getElementById('dashboard').outerHTML = ""
}

// make available these variables in every script after signing in
let user_id = sessionStorage.getItem('user_id');
let full_name = sessionStorage.getItem('user_full_name');
let email = sessionStorage.getItem('email');
let user_type = sessionStorage.getItem('user_is_admin');
let dob = sessionStorage.getItem('dob');

let menuHandler = () => {
    menu.classList.toggle('none');
    profile_mask.classList.toggle('none');
}

let showProfileHandler = () => {
    menuHandler();
    //   getting data from locat storage, which was set on sign in or sign up
    document.getElementById('full_name').value = full_name;
    document.getElementById('email').value = email;
    document.getElementById('date_of_birth').value = dob.slice(0, 10);
    profile_modal.classList.toggle('none');
}

// handler of user updating profile
let updateSubmitHandler = (e) => {
    // get data from form
    e.preventDefault();
    let data = new FormData();
    data.append('email', sessionStorage.getItem('email'));
    data.append('full_name', document.getElementById('full_name').value);
    data.append('password', document.getElementById('password').value);

    //api call that takes user id and password, and updates only full name if they were valid
    axios({
        method: 'post',
        url: 'http://localhost/snoop/Snoop-backend/updateuser.php',
        data: data,
    }).then(function (response) {
        console.log(response);
        sessionStorage.setItem('user_id', response.data.user_id);
        sessionStorage.setItem('user_full_name', response.data.full_name);
        sessionStorage.setItem('email', response.data.email);
        sessionStorage.setItem('dob', response.data.date_of_birth);
        sessionStorage.setItem('user_is_admin', response.data.user_type);
        // if sign in success, redirect to home
        if (response.data.user_id) {
            console.log('success')
        } else {
            console.log('response has no response.data.user_id ');
        }
    }).catch(function (error) {
        console.log(error);
    });
    profile_modal.classList.toggle('none');
}

let displayMessage = (message, theme) => {
    let className;
    if (theme == 0) { className = 'good' } else { className = 'bad' }
    let messag_div = document.createElement("div");
    messag_div.id = 'message_key'
    messag_div.classList.add('message-wrapper')
    messag_div.innerHTML = `
    <div class="message ${className}">
        <span>
            ${message}
        </span>
    </div>
    `;
    let body = document.getElementsByTagName("BODY")[0]
    body.appendChild(messag_div);
    setTimeout(() => {
        document.getElementById('message_key').parentNode.removeChild(document.getElementById('message_key'));
    }, 1000)
}
