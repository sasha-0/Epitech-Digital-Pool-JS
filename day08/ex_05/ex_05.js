/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_05.js
*/

var app = new Vue({
    el: '#app',
    data: {
        message: '',
    },
    methods: {
        currentDateTime() {
            const current = new Date();
            const time = "The current time is " + current.getHours() + ":" + current.getMinutes();
            return time;
        }
    },
    mounted: function(){
        this.message = this.currentDateTime()
    }
})