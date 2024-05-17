// let counts = setInterval(updated); // Update every second
// let upto = 0;
// function updated() {
//     let count = document.getElementById("counter");
//     count.innerHTML = ++upto;
//     if (upto === 125) {
//         count.innerHTML = "125"+"+";
//         clearInterval(counts);
//     }
// }

// let count2 = setInterval(updated2); // Update every second
// let upto2 = 5;
// function updated2() {
//     let count = document.getElementById("counter2");
//     count.innerHTML = upto2++;
//     if (upto2 === 100) {
//         count.innerHTML = "45+";
//         clearInterval(count2);
//     }
// }

// // Counter for People Hired
// let count3 = setInterval(updated3); // Update every second
// let upto3 = 700;
// function updated3() {
//     let count = document.getElementById("counter3");
//     count.innerHTML = upto3++;
//     if (upto3 === 1000) {
//         count.innerHTML = "999+";
//         clearInterval(count3);
//     }
// }

// // Counter for Satisfied Users
// let count4 = setInterval(updated4); // Update every second
// let upto4 = 30;
// function updated4() {
//     let count = document.getElementById("counter4");
//     count.innerHTML = upto4++;
//     if (upto4 === 100) {
//         count.innerHTML = "95" + "%";
//         clearInterval(count4);
//     }
// }


// window.addEventListener("scroll", function() {
//     const counters = document.querySelectorAll("[data-count]");
//     counters.forEach((counter) => {
//       const isVisible = isElementInViewport(counter);
//       if (isVisible) {
//         startCounterAnimation(counter);
//       }
//     });
//   });
//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.bottom <= window.innerHeight &&
//       rect.left >= 0 &&
//       rect.right <= window.innerWidth
//     );
//   }
  // Initialization for ES Users
   
  let menuList = document.getElementById("menuList")
  menuList.style.maxHeight = "0px";

  function toggleMenu(){
      if(menuList.style.maxHeight == "0px")
      {
          menuList.style.maxHeight = "300px";
      }
      else{
          menuList.style.maxHeight = "0px";
      }
    }