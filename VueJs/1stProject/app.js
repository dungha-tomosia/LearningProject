const app = Vue.createApp({
    //template: '<h2>Hello vue!</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'John Cena',
            age: 45,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks 
        }
    }
})

app.mount('#app')