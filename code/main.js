
night_mode.addEventListener('click',function() {
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night_mode.classList.toggle('active');
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    change_color.classList.toggle('active');
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})

