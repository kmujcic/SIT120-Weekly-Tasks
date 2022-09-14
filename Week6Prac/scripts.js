var app = new Vue({
    el: '#app',
    data: {
        email: '',
        password: '',
        checked: '',
        checkedOptions: [],
        selected: '',
    },
});

var app = new Vue({
    el: '#app2',
    data: {
        selected: '',
        options: [
            {text: 'Kakashi', value: 'Kakashi'},
            {text: 'Naruto', value: 'Naruto'},
            {text: 'Sasuke', value: 'Sasuke'},
            {text: 'Rock-Lee', value: 'Rock-Lee'},
        ]
    },
});