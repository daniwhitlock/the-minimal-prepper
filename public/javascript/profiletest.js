//CODE FOR NAV TABS
var articleTriggerEl = document.querySelector('#nav-article-tab a[href="#nav-articles"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

var feedTriggerEl = document.querySelector('#nav-feed-tab a[href="#nav-feed"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name



var triggerTabList = [].slice.call(document.querySelectorAll('#nav-article-tab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

