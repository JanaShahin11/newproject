    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');
    menuBtn.addEventListener('click', ()=>{
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      if(!expanded){
        nav.classList.add('nav-open');
      } else {
        nav.classList.remove('nav-open');
      }
    });
