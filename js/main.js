document.getElementById('button').addEventListener('click', function () {
    document.querySelector('#topLeftClouds').classList.add('leftMove');
    document.querySelector('#bottomLeftClouds').classList.add('leftMove');
    document.querySelector('#middle').classList.add('middleMove');
    document.querySelector('#topRightClouds').classList.add('rightMove');
    document.querySelector('#bottomRightClouds').classList.add('rightMove');
    document.querySelector('p').classList.add('opacity');
    document.querySelector('button').classList.add('opacity');
});

function delay (URL) {
    setTimeout( function() { window.location = URL }, 3500);
}
