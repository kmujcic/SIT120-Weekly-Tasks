// Globally registered component
Vue.component('global-component', {
    template: '<div><h1>Here is my global component!</h1></div>'
})

// Locally registered component
var localcomponent = {
    template: '<div><h1>Here is my local component</h1></div>'
}

var app = new Vue({
    el: '#app',
    data: {
        test: 'Testing! 123...'
    },
    
    components: {
        localcomponent
    }
})