const $orderBtns = document.querySelectorAll('.furniture_card .card_btn')
const $orderModal = document.querySelector('.order_modal')
const $modalCloseIcon = document.querySelector('.modal_close')
const $successModal = document.querySelector('.success_modal')
const $body = document.body

function closeModal($elem) {
  $elem.classList.remove('modal_show')
  $body.classList.remove('stop_scroll')
  document.body.onclick = null
}

function showModal($elem) {
  $elem.classList.add('modal_show')
  $body.classList.add('stop_scroll')
}

function clickObserver($elem) {
  document.body.onclick = event => {
    console.log(event.target);
    console.log(event.target.closest('.modal_window'))
    if (!event.target.closest('.modal_window')) {
      console.log('!!');
      closeModal($elem)
      document.body.onclick = null
    }
  }
}


$modalCloseIcon.addEventListener('click', () => closeModal($orderModal))

Array.from($orderBtns).forEach($elem => {
  $elem.addEventListener('click', () => {
    showModal($orderModal)
    setTimeout(() => clickObserver($orderModal))

    const orderModalBtn = document.querySelector('.order_modal_btn')

    orderModalBtn.addEventListener('click', () => {
      closeModal($orderModal)
      showModal($successModal)
      setTimeout(() => closeModal($successModal), 1000)
    })
  })
})

