'use strict';

{
  




  class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.textContent = 'とめる'
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {
        
        if (this.stop.classList.contains('inactive')) {
          return;
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);

        panelsLeft--;

        if (panelsLeft === 0) {
          const slotmain = document.getElementById('slotmain');
          slotmain.classList.add('box');
          checkResult();
          const box02 = document.getElementById('box02');
          const box04 = document.getElementById('box04');
          // if (finalScore === 2 && box02.classList.contains('box') !== true){
          //   box02.classList.add('box');
          //   box04.classList.remove('box');
          // }
          if (miss === 1){
            box02.classList.add('box');
            box04.classList.remove('box');

          }
          spin.classList.remove('inactive');
          panelsLeft = 3;        
        }

      });


      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);

    }

    getRandomImage() {
      const images = [
        '../../images/for-game/virus_ugai.png',
        '../../images/for-game/tearai_hand_suidou.png',
        '../../images/for-game/medicine_fukuro.png',
      ];
    
      return images[Math.floor(Math.random() * images.length)];
    }

  

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 700);
    }

    

    isUnmatched(p1, p2) {
      if (this.img.src !== p1.img.src && this.img.src !== p2.img.src) {
        return true;
      } else {
        return false;
      }
    }

    match(p1, p2) {
      if (this.img.src === p1.img.src && this.img.src === p2.img.src) {
        return true;
      } else {
        return false;
      }
    }

    

     unmatch() {
      this.img.classList.add('unmatched');
      miss = 1;
    }

    activate() {
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
      // box04.classList.remove('box04');
    }

    inActive() {
      this.img.classList.add('unmatched');
      this.stop.classList.add('inactive');
      // box04.classList.remove('box04');
    }

  }


  let miss;

  
  



  function check777() {
    const p = document.getElementById('box');

    
    if (panels[0].match(panels[1], panels[2])) {
      const slotA = panels[0].match(panels[1], panels[2]);
      p.classList.remove('box');
      
      finalScore++;
      score.textContent = finalScore;


    

    }
    else if (panels[1].match(panels[0], panels[2])) {
      const slotB = panels[0].match(panels[1], panels[2]);
      p.classList.remove('box');
      
      finalScore++;
      score.textContent = finalScore;
    
 
    
    }
    else if (panels[2].match(panels[0], panels[1])) {
      const slotC = panels[2].match(panels[0], panels[1]);
      p.classList.remove('box');
      
      finalScore++;
      score.textContent = finalScore;
    
   
    }
    
    if (finalScore === 2) {
      const box02 = document.getElementById('box02');
      p.classList.add('box');
      box02.classList.remove('box');
      
    }

    if (finalScore >= 3) {
           
      const box = document.getElementById('box');
      box.classList.add('box');
      const box05 =  document.getElementById('box05');     
      box05.classList.remove('box');   
      resetbtn.classList.remove('box');
      
      const score = document.getElementById('score');
      score.textContent = '3回達成！神レベル！！';
      const spin = document.getElementById('spin');
      spin.classList.add('inactive');
      spin.classList.add('box');

      alert('クリア');
      
      



      
      spin.classList.add('box');
      spin.addEventListener('click', () => {
        if (spin.classList.contains('inactive')) {
          return;
        }
      });
    }

    
   
  



  }

 
 






  function checkResult() {
    check777();
    
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatch();
      
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatch();
    }
    

  }



  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];


  let panelsLeft = 3;

  const box04 = document.getElementById('box04');
  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    if (spin.classList.contains('inactive')) {
      return;
    };

    box04.classList.add('box');
    miss = 0;

    spin.classList.add('inactive');
    panels.forEach(panel => {
      panel.activate();
      panel.spin(); 
    });

    const p = document.getElementById('box');
    p.classList.add('box');
    const box02 = document.getElementById('box02');
    box02.classList.add('box');

    const slotmain = document.getElementById('slotmain');
    if (panelsLeft === 3) {
      slotmain.classList.remove('box');
    } 
  });


  


  const resetbtn =  document.getElementById('resetbtn');
  resetbtn.classList.add('box');


  resetbtn.addEventListener('click', () => {
    resetbtn.classList.add('box');
    score.textContent = finalScore = 0;  
    spin.classList.remove('box');
    const box05 = document.getElementById('box05');
    box05.classList.add('box');
    // goback();
    const slotmain = document.getElementById('slotmain');
    if (slotmain.classList.contains('box')) {
      slotmain.classList.remove('box');
    }
    
  })  





  let finalScore = 0;
  const score = document.getElementById('score');
  score.textContent = finalScore;

}

  
