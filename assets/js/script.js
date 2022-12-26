// menu display

// const menu = document.querySelector(".hamburger-menu");
// const topbar = document.querySelector(".topbar");

// menu.addEventListener("click", () => {
// 	if(topbar.style.display = "none")
// 	topbar.style.display = "flex"
// 	else(
// 		topbar.style.display = "none"
// 	)
// });

const menu = document.querySelector(".hamburger-menu")
menu.addEventListener('click', ()=>{
	document.querySelector(".topbar").classList.toggle('change')
})
// const topbar = document.querySelector(".topbar")

// menu.addEventListener("click", () => {
// 	topbar.classList.add("change");
// 	topbar.classList.remove("change")
//   });

// counter
const counterItems = document.querySelectorAll('.counter')
const counterBox = document.querySelector('.counter-box')

const options = {
	rootMargin: '-50px'
}


const startCounter = entry => {
	console.log(entry[0].isIntersecting);

	if (entry[0].isIntersecting) {
		counterItems.forEach(counter => {
			
			const updateCounter = () => {
				const finalNumber = counter.getAttribute('data-number')
				const value = parseInt(counter.textContent)

				const speed = finalNumber / 300
				
				if(value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCounter, 1)
				} else {
					counter.textContent = finalNumber
				}
			}

			updateCounter()

		})
	}
}


const observer = new IntersectionObserver(startCounter, options)
observer.observe(counterBox)

// Full screen


const makeFullScreen = (el) => {
	if (!document.fullscreenElement) {
	  el.requestFullscreen();
	  return;
   } 
	 document.exitFullscreen();
  
  }
  
  const  fullscreenables = document.querySelectorAll(".fullscreenEnabled");
  fullscreenables.forEach( (span) => {
  
	span.addEventListener("click", () => {
  
	makeFullScreen(span);
  
  });
  span.addEventListener('keydown', (e) => {
   if (e.key === "Enter") {
	 makeFullScreen(span);
  
   }
  });
  
  });