'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  const email = $('#email_address');
  const name1 = $('#name1');

  let isValid = true;

  if (name1.value == '') {
    name1.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    name1.nextElementSibling.textContent = '';
  }

  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }

  if (isValid == true) {
    alert("Congratulation You Have Successfully Subscribe!");

  }
};


document.addEventListener('DOMContentLoaded', () => {
  $('#register').addEventListener('click', processEntries);
});