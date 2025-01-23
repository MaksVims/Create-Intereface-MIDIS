const $orderBtns = document.querySelectorAll('.furniture_card .card_btn')
const $orderModal = document.querySelector('.order_modal')
const $modalCloseIcon = document.querySelector('.modal_close')
const $successModal = document.querySelector('.success_modal')

function closeModal($elem) {
  $elem.classList.remove('modal_show')
}

function showModal($elem) {
  $elem.classList.add('modal_show')
}

$modalCloseIcon.addEventListener('click', () => closeModal($orderModal))

Array.from($orderBtns).forEach(el => {
  el.addEventListener('click', () => {
    showModal($orderModal)

    const orderModalBtn = document.querySelector('.order_modal_btn')

    orderModalBtn.addEventListener('click', () => {
      closeModal($orderModal)
      showModal($successModal)
      setTimeout(() => closeModal($successModal), 1000)
    })
  })
})

