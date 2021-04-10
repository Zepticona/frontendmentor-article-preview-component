const shareOptions = document.querySelector('.c-article-preview__social--hover');
const shareBtn = document.querySelector('.c-article-preview__social');

const showShareOptions = function() {
    shareOptions.classList.toggle('hide');
}
shareBtn.addEventListener('click', showShareOptions);