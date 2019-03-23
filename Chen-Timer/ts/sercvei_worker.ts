if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      // github Page
      .register('/JasonGF-Timer/sw.js', { scope: '/JasonGF-Timer' })
      .then(function(registration) {
        // 注册成功
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        )
      })
      .catch(function(err) {
        // 注册失败:(
        console.log('ServiceWorker registration failed: ', err)
      })
  })
}
