// validation and pop up

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const closeBtn = document.querySelector(".close");
const popup = document.querySelector(".popup");

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} need to have at least ${min} characters.`
    );
  }
};

const checkEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "E-mail is not correct");
  }
};

const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });

  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
};
// close and open pop pup

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm([username, email, phone]);
  checkLength(username, 3);
  checkLength(phone, 8);
  checkEmail(email);
  checkErrors();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  [username, email, phone, message].forEach((el) => {
    el.value = "";
    clearError(el);
  });
});

// close  pop up
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show-popup");
});
