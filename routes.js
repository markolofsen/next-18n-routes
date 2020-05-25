const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add({
  name: 'index',
  page: 'index',
  pattern: '/',
  params: {
    lang: 'no',
  }
})
.add({
  name: 'second',
  page: 'second',
  pattern: '/second/:id',
  params: {
    lang: 'no',
    id: 'no_id'
  }
})
