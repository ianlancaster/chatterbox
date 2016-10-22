
const autoSize = (o) => {
  console.log('textarea height changed')
  console.log('this', this)
  o.style.height = '1px'
  o.style.height = (25 + o.scrollHeight) + 'px'
}

module.exports = autoSize
