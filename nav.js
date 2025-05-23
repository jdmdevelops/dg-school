const nav = document.querySelector('.nav')
const navToggle = document.querySelector('.mobile-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  const visible = nav.getAttribute('data-visible')

  if (visible === 'false') {
    nav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else if (visible === 'true') {
    nav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})
