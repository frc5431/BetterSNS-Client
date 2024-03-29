import { goPage } from "./script"

document.getElementById('back').addEventListener('click', () => {
    goPage('index')
})

document.getElementById('updateCache').addEventListener('click', () => {
    localStorage.setItem('requestCache', JSON.parse(document.getElementById('localStorage').value))

    updateCacheWithNewValues()
})

function updateCacheWithNewValues() {
    document.getElementById('localStorage').value = JSON.stringify(JSON.parse(localStorage.getItem('requestCache')), null, '  ')
    console.log(JSON.stringify(JSON.parse(localStorage.getItem('requestCache'))))
}
updateCacheWithNewValues();

document.getElementById('day').innerHTML = window.localStorage.getItem('lastUploaded');

document.getElementById('exe_ace').addEventListener('click', () => {
    eval(document.getElementById('ace').value)
})