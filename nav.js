const nav = document.querySelector('.nav')
const navToggle = document.querySelector('.mobile-toggle')
const navLinks = document.querySelectorAll('.nav__link')

const currentUrl = window.location.href
navLinks.forEach((link) => {
  console.log(currentUrl)
  console.log(link.id)

  if (currentUrl.includes(link.id)) {
    link.classList.add('nav__link--active')
    link.classList.add('unclickable')
    link.href = ''
  }
})

navToggle.addEventListener('click', () => {
  const visible = nav.getAttribute('data-visible')

  if (visible === 'false') {
    nav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else if (visible === 'true') {
    nav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }

  console.log(visible)
})
