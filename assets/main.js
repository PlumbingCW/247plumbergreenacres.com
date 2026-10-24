(function(){
  var d=document,root=d.documentElement;
  root.classList.add('js');
  var hamb=d.querySelector('.hamburger'),drawer=d.querySelector('.mob-drawer'),ov=d.querySelector('.mob-overlay');
  function setNav(open){
    root.classList.toggle('nav-open',open);
    if(hamb){hamb.setAttribute('aria-expanded',open?'true':'false');}
    if(drawer){drawer.setAttribute('aria-hidden',open?'false':'true');}
  }
  if(hamb){hamb.addEventListener('click',function(){setNav(!root.classList.contains('nav-open'));});}
  if(ov){ov.addEventListener('click',function(){setNav(false);});}
  d.querySelectorAll('.mob-close').forEach(function(b){b.addEventListener('click',function(){setNav(false);});});
  d.addEventListener('keydown',function(e){if(e.key==='Escape'){setNav(false);}});
  if(drawer){drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setNav(false);});});}
  var mq=window.matchMedia('(min-width: 769px)');
  function onMq(){if(mq.matches){setNav(false);}}
  if(mq.addEventListener){mq.addEventListener('change',onMq);}else if(mq.addListener){mq.addListener(onMq);}
  d.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var item=q.parentNode,a=item.querySelector('.faq-a'),open=item.classList.toggle('open');
      q.setAttribute('aria-expanded',open?'true':'false');
      a.style.maxHeight=open?a.scrollHeight+'px':'0px';
    });
  });
  window.addEventListener('resize',function(){
    d.querySelectorAll('.faq-item.open .faq-a').forEach(function(a){a.style.maxHeight=a.scrollHeight+'px';});
  });
})();
