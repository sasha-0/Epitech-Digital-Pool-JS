/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_01.js
*/

var splide = new Splide( '.splide', {
    type   : 'loop',
    focus  : 'center',
    perPage: 3,
    perMove: 1,
    autoplay    : true,
    rewind      : true,
    pauseOnHover: false,
    pauseOnFocus: false,
    });

  
  splide.mount();