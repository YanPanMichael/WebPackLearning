import $ from 'jquery';

import '../css/index.css';
import '../css/index.scss';

$(function() {
  $('li:odd').css('backgroundColor', 'green')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})