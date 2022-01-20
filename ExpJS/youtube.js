var express = require('express')
var router = express.Router()

// router.get('/', function (req, res) {
//   res.sendFile(__dirname +'/'+'index.html')
// })
// router.get('/', function (req, res) {
//       res.send("welcome to express js");
//     })
router.get('/', function (req, res) {
  res.redirect('https://www.youtube.com')
})
router.get('/feed', function (req, res) {
  res.redirect('https://www.youtube.com/feed')
})
router.get('/library', function (req, res) {
    res.redirect('https://www.youtube.com/feed/library')
})
router.get('/explore', function (req, res) {
    res.redirect('https://www.youtube.com/feed/explore')
})
module.exports = router