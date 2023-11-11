// counter
const counterItems = document.querySelectorAll(".counter");
const counterBox = document.querySelector(".counter-box");

const options = {
  rootMargin: "-50px",
};

const startCounter = (entry) => {
  console.log(entry[0].isIntersecting);

  if (entry[0].isIntersecting) {
    counterItems.forEach((counter) => {
      const updateCounter = () => {
        const finalNumber = counter.getAttribute("data-number");
        const value = parseInt(counter.textContent);

        const speed = finalNumber / 300;

        if (value < finalNumber) {
          counter.textContent = `${Math.floor(value + speed)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.textContent = finalNumber;
        }
      };

      updateCounter();
    });
  }
};

const observer = new IntersectionObserver(startCounter, options);
observer.observe(counterBox);
