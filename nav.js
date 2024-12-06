const navLinks = document.querySelector('.nav__links')
const navToggle = document.querySelector('.mobile-toggle')

navToggle.addEventListener('click', () => {
  const visible = navLinks.getAttribute('data-visible')

  if (visible === 'false') {
    navLinks.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else if (visible === 'true') {
    navLinks.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }

  console.log(visible)
})
