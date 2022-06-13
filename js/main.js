document.getElementById('button').addEventListener('click', function () {
    document.querySelector('#leftClouds').classList.add('leftMove');
    document.querySelector('#middle').classList.add('middleMove');
    document.querySelector('#rightClouds').classList.add('rightMove');
  });

  function delay (URL) {
      setTimeout( function() { window.location = URL }, 4000);
  }