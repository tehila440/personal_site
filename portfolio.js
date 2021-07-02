const GITHUB_URL = "https://api.github.com/users/tehila440";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    
    const myName = document.getElementById('my-name').innerHTML = data.login;
  })

  //This is where one would add more languages.
  const languagesUsed = [
  'HTML,', 'CSS,', 'JavaScript'
  ];

  languagesUsed.splice(-1, 0, 'and');

  const footerComment = document.getElementById('lang-used').innerHTML = `This page was built using: ${languagesUsed.join(' ')} `;

  var header = document.getElementById("active-page");
  var menus = header.getElementsByClassName("menu");
  for (var i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
  current[0].className = current[0].className.replace(" active", "");}
  this.className += " active";
  });
}

//bouncing profile picture
  const { easing, physics, spring, tween, styler, listen, value, transform } = window.popmotion;
  const { pipe, clampMax } = transform;
  
  const ball = document.querySelector('.ball');
  const ballStyler = styler(ball);
  const ballY = value(0, (v) => ballStyler.set('y', Math.min(0, v)));
  const ballScale = value(1, (v) => {
    ballStyler.set('scaleX', 1 + (1 - v));
    ballStyler.set('scaleY', v);
  });
  let count = 0;
  let isFalling = false;
  
  const ballBorder = value({
    borderColor: '',
    borderWidth: 0
  }, ({ borderColor, borderWidth }) => ballStyler.set({
    boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
  }));
  
  const checkBounce = () => {
    if (!isFalling || ballY.get() < 0) return;
    
    isFalling = false;
    const impactVelocity = ballY.getVelocity();
    const compression = spring({
      to: 1,
      from: 1,
      velocity: - impactVelocity * 0.01,
      stiffness: 800
    }).pipe((s) => {
      if (s >= 1) {
        s = 1;
        compression.stop();
        
        if (impactVelocity > 20) {
          isFalling = true;
          gravity
            .set(0)
            .setVelocity(- impactVelocity * 0.5);
        }
      }
      return s;
    }).start(ballScale);
  };
  
  const checkFail = () => {
    if (ballY.get() >= 0 && ballY.getVelocity() !== 0 && ball.innerHTML !== 'Tap') {
      count = 0;
      tween({
        from: { borderWidth: 0, borderColor: 'rgb(255, 28, 104, 1)' },
        to: { borderWidth: 30, borderColor: 'rgb(255, 28, 104, 0)' }
      }).start(ballBorder);
  
      ball.innerHTML = 'Tap';
    }
  };
  
  const gravity = physics({
    acceleration: 2500,
    restSpeed: false
  }).start((v) => {
    ballY.update(v);
    checkBounce(v);
    checkFail(v);
  });
  
  listen(ball, 'mousedown touchstart').start((e) => {
    e.preventDefault();
    count++;
    ball.innerHTML = count;
    
    isFalling = true;
    ballScale.stop();
    ballScale.update(1);
  
    gravity
      .set(Math.min(0, ballY.get()))
      .setVelocity(-1200);
  
    tween({
      from: { borderWidth: 0, borderColor: 'rgb(173, 255, 47, 1)' },
      to: { borderWidth: 30, borderColor: 'rgb(173, 255, 47, 0)' }
    }).start(ballBorder);
  });

  //clicked card
  
  document.querySelector('.card-container').addEventListener('click', function(event) {
    alert(`You clicked on my card`);
  });

  