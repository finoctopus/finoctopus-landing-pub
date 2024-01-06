document.addEventListener('DOMContentLoaded', () => {
  function openModal(modalSelector = '.modal') {
    const modal = document.querySelector(modalSelector);
    const close = '.modalClose';
    modal.classList.add('modal--open');
    modal.setAttribute('tabindex', '-1');

    modal.addEventListener('animationend', () => {
      modal.firstElementChild.classList.add('modal__content--open');
    });

    modal.addEventListener('click', event => {
      const target = event.target;
      if (target.closest(close) || target.closest(modalSelector) && !target.closest('.modal__content')) {
        modal.firstElementChild.classList.remove('modal__content--open');
        modal.classList.remove('modal--open');
        modal.removeAttribute('tabindex');
      }
    });
  }

  $('.contact-button').on('click', function (e) {
    e.preventDefault();
    openModal('.form-modal');
  });
  
  function valLength(count, el) {
    var valid = false
    if ($(el).val().length < count) {
      $(el).addClass('invalid');
    } else {
      $(el).removeClass('invalid');
      valid = true;
    }
    return valid;
  }

  $('#offer-form').on('submit', function (e) {
    e.preventDefault();
    var formValid = false
    if (
      valLength(1, '.fieldName') &&
      valLength(1, '.fieldCompany') &&
      valLength(1, '.fieldPosition') &&
      valLength(1, '.fieldWebsite') &&
      valLength(1, '.fieldPhone') &&
      valLength(1, '.fieldEmail') &&
      valLength(1, '.fieldCustomers') &&
      valLength(1, '.fieldShippers') &&
      valLength(1, '.fieldMontlyTurnover') &&
      // valLength(1, '.fieldCod') &&
      valLength(1, '.fieldInvoice')
    ) {
      formValid = true;
    }
    if (!formValid) return;

    var action = $(this).attr('action');
    var payload = {}
    $('#offer-form').serializeArray().forEach((field) => {
      if (field.name === 'phone') {
        payload[field.name] = field.value.split('-').join('').split(' ').join('').split('(').join('').split(')').join('');
        return;
      }
      payload[field.name] = field.value
    });
    $.post(action, payload, function(data) {
      openModal('.success-modal');
    }).fail(function(error) {
      console.log( "error", error.responseJSON.result);
    })
  });

  $('.fieldName').on('blur', function () {
    valLength(1, '.fieldName');
  });
  $('.fieldCompany').on('blur', function () {
    valLength(1, '.fieldCompany');
  });
  $('.fieldPosition').on('blur', function () {
    valLength(1, '.fieldPosition');
  });
  $('.fieldWebsite').on('blur', function () {
    valLength(1, '.fieldWebsite');
  });
  $('.fieldPhone').on('blur', function () {
    valLength(1, '.fieldPhone');
  });
  $('.fieldEmail').on('blur', function () {
    valLength(1, '.fieldEmail');
  });
  $('.fieldCustomers').on('blur', function () {
    valLength(1, '.fieldCustomers');
  });
  $('.fieldShippers').on('blur', function () {
    valLength(1, '.fieldShippers');
  });
  $('.fieldMontlyTurnover').on('blur', function () {
    valLength(1, '.fieldMontlyTurnover');
  });
  $('.fieldCod').on('blur', function () {
    valLength(1, '.fieldCod');
  });
  $('.fieldInvo').on('blur', function () {
    valLength(1, '.fieldInvo');
  });
});


$(document).ready(function () {
  $('.accordionBtn').on('click', function () {
    $(this).closest('li').toggleClass('open');
    $(this).closest('li').find('.accordionContent').slideToggle();
  });

});


const player = document.querySelector("lottie-player");

if (player) {
  player.load(player.getAttribute('src'), {
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });
}




