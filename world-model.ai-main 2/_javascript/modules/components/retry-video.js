export function retryVideo() {
  var timeout = 3000
  var retry = function () {
    var count = 0
    document.querySelectorAll('video.ratio-8-5').forEach(video => {
      if (count >= 5) return
      if (video.readyState < 2) {
        console.log(video)
        video.load()
        count++
      }
    })
  }
  setInterval(() => {
    retry()
  }, timeout)
}
