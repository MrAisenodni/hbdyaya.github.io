// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];
  const dbd = document.getElementsByClassName("wish-dbd")[0];
  const audio = new Audio('assets/mp3/Backsound.mpeg');

  audio.play();

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  dbd.innerHTML = `<span>${dbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 1.8, {
      opacity: 0,
      y: 10
    })
    .from(".two", 1.2, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      1.8,
      {
        opacity: 0,
        y: 10
      },
      "+=5"
    )
    .to(
      ".two",
      1.8,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 1.8, {
      opacity: 0,
      y: 10
      // scale: 1.8
    })
    .to(
      ".three",
      1.8,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 1.8, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.6, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      1,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      1,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=1.8"
    )
    .from(".idea-1", 1.8, ideaTextTrans)
    .to(".idea-1", 1.8, ideaTextTransLeave, "+=1.5")
    .staggerFrom(
      ".idea-2 span",
      1.2,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-2 span",
      1.2,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .from(".idea-3", 1.8, ideaTextTrans)
    .to(".idea-3 strong", 1, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 1.8, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 1.8, ideaTextTrans)
    .to(".idea-4", 1.8, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 1.8, ideaTextTrans)
    .to(".idea-5", 1.8, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-6",
      1.8,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=1"
    )
    .to(
      ".idea-6 span",
      1.8,
      {
        rotation: 90,
        x: 8
      },
      "+=1.2"
    )
    .to(
      ".idea-6",
      1.8,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .from(".idea-7", 1.8, ideaTextTrans)
    .to(".idea-7", 1.8, ideaTextTransLeave, "+=1.5")
    .from(".idea-8", 1.8, ideaTextTrans)
    .to(".idea-8", 1.8, ideaTextTransLeave, "+=1.5")
    .staggerFromTo(
      ".baloons img",
      5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      1,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .staggerFrom(
      ".wish-hbd span",
      1.8,
      {
        opacity: 0,
        y: -50,
        // scale: 0.6,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 1)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      1.8,
      {
        scale: 1.8,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      1,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .to(
      ".wish h5 span",
      1,
      {
        rotation: 90,
        x: 8
      },
      "party"
    )
    .to(".six", 1, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .from(
      ".yaya-dp",
      1,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(
      ".ten .wish h5",
      1,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerFrom(
      ".ten .wish-dbd span",
      1.8,
      {
        opacity: 0,
        y: -50,
        // scale: 0.6,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 1)
      },
      0.1
    )
    .staggerFromTo(
      ".ten .wish-dbd span",
      1.8,
      {
        scale: 1.8,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".ten .wish h5",
      1,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .to(
      ".ten .wish h5 span",
      1,
      {
        rotation: 90,
        x: 8
      },
      "party"
    )
    .to(".ten", 1, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      1,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      Object.keys(data).map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
