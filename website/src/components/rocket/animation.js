// Creates animation of the RAPID SPACEMAN
export default function rocketAnimation() {
  if (typeof document === 'undefined') {
    return;
  }
  var jetBubbles = document.getElementsByClassName('rocket_svg__jetBubble');
  var astronaut = document.querySelector('.rocket_svg__astronaut');
  var star = document.querySelector('.rocket_svg__star');
  var starContainer = document.querySelector('.rocket_svg__starContainer');

  TweenMax.to(astronaut, 0.05, {
    y: '+=4',
    repeat: -1,
    yoyo: true,
  });
  var mainTimeline = new TimelineMax({ repeat: -1 });
  mainTimeline.timeScale(6).seek(100);

  function createJets() {
    TweenMax.set(jetBubbles, {
      attr: {
        r: '-=5',
      },
    });
    //jet bubbles
    for (var i = 0; i < jetBubbles.length; i++) {
      var jb = jetBubbles[i];
      var tl = new TimelineMax({ repeat: -1 });
      tl.to(jb, 1, {
        attr: {
          r: '+=15',
        },
        ease: Linear.easeNone,
      }).to(jb, 1, {
        attr: {
          r: '-=15',
        },
        ease: Linear.easeNone,
      });

      mainTimeline.add(tl, i / 4);
    }
    //stars
    for (var i = 0; i < 7; i++) {
      var sc = star.cloneNode(true);
      starContainer.appendChild(sc);
      var calc = (i + 1) / 2;

      TweenMax.fromTo(
        sc,
        calc,
        {
          x: Math.random() * 600,
          y: -30,
          scale: 3 - calc,
        },
        {
          y: Math.random() * 100 + 600,
          repeat: -1,
          repeatDelay: 1,
          ease: Linear.easeNone,
        },
      );
    }
  }

  createJets();
}
