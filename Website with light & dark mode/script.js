const toggle_btn = document.querySelector('#checkbox');
toggle_btn.addEventListener('change', () => {
  if(toggle_btn.checked){
    document.body.classList.add('dark-mode')
    console.log('checked');
  }
  else{
    document.body.classList.remove('dark-mode')
    console.log('un-checked');
  }
})
