/* script.js
   Contrôle la rotation des mots pour le rotator
*/
(function(){
  // initialize one instance per `.aptr-rotator` container to avoid collisions
  const containers = Array.from(document.querySelectorAll('.aptr-rotator'));
  if(containers.length === 0) return;

  containers.forEach(container=>{
    const list = container.querySelector('.rotator__list');
    if(!list) return;
    const words = Array.from(container.querySelectorAll('.rotator__word'));
    const viewport = container.querySelector('.rotator__viewport');
    let index = 0;
    // Default timings (ms). `data-delay` controls how long each word stays fully visible.
    // `data-transition` controls the swipe transition duration.
    // Default delay set to 1500ms per client request; can be overridden per instance via data attributes.
    let delay = 1500;
    let transition = 500; // default swipe transition set to 1.5s per client request
    if(container.dataset && container.dataset.delay){
      const d = parseInt(container.dataset.delay, 10);
      if(!isNaN(d) && d >= 0) delay = d;
    }
    if(container.dataset && container.dataset.transition){
      const t = parseInt(container.dataset.transition, 10);
      if(!isNaN(t) && t >= 0) transition = t;
    }

    let mainTimer = null;
    let postTransitionTimer = null;
    let paused = false;

    function clearTimers(){
      if(mainTimer) { clearTimeout(mainTimer); mainTimer = null; }
      if(postTransitionTimer) { clearTimeout(postTransitionTimer); postTransitionTimer = null; }
    }

    function syncHeights(){
      const first = words[0];
      const computed = Math.max(first.getBoundingClientRect().height, parseFloat(getComputedStyle(first).lineHeight) || 0);
      const h = computed || 40;
      viewport.style.height = h + 'px';
      words.forEach(w=> w.style.height = h + 'px');
      list.style.transition = `transform ${transition}ms ease`;
    }

    function scheduleTransform(){
      if(index >= words.length - 1) return;
      mainTimer = setTimeout(()=>{
        index++;
        list.style.transform = `translateY(-${index * viewport.clientHeight}px)`;
        postTransitionTimer = setTimeout(()=>{
          if(!paused) scheduleTransform();
        }, transition);
      }, delay);
    }

    function init(){
      syncHeights();

      viewport.addEventListener('mouseenter', ()=>{
        paused = true;
        clearTimers();
      });
      viewport.addEventListener('focusin', ()=>{
        paused = true;
        clearTimers();
      });
      viewport.addEventListener('mouseleave', ()=>{
        if(index >= words.length -1) return;
        if(paused){
          paused = false;
          scheduleTransform();
        }
      });

      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      if(media.matches){
        clearTimers();
        list.style.transition = 'none';
      }

      window.addEventListener('resize', ()=>{
        syncHeights();
        list.style.transform = `translateY(-${index * viewport.clientHeight}px)`;
      });
    }

    function revealAndStart(){
      // ensure first word visible
      index = 0;
      list.style.transform = `translateY(-${index * viewport.clientHeight}px)`;
      // reveal container after sizes are known
      container.classList.add('js-ready');
      // start the rotation chain
      scheduleTransform();
    }

    // init when DOM inside container is ready
    // wait briefly for fonts to load to avoid visual jump, then reveal+start
    if(document.fonts && document.fonts.ready){
      Promise.race([document.fonts.ready, new Promise(r=>setTimeout(r,300))]).then(()=>{ init(); revealAndStart(); });
    } else {
      requestAnimationFrame(()=>{ init(); revealAndStart(); });
    }
  });
})();


