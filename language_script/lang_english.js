const titleElement = document.getElementById("title")
titleElement.innerText = "반려동물 집사들의 든든한 AI 동반자 - 아임포포 AIm PawPaw.";

const introTitleElement = document.getElementById("intro-title");
introTitleElement.innerText = "Prologue";

const introElement = document.getElementById("intro")
introElement.innerHTML = `
Hello, Pet Pals! 👋 I'm a guy who is lucky to have the most adorable companion named Bella~😃 <br> While taking care of Bella, I often find myself in situations where I need to visit animal hospitals for various reasons. However, I understand that not everyone can easily go to the hospital when they need to. Have you ever been in that situation? It can be quite challenging to navigate through such circumstances. When it happens to me, I usually resort to searching online or reaching out to friends, but honestly, it can get quite confusing at times. That's when I thought to myself, "What if there was a solution...?" Lately, there's been a trending solution that caught my attention!

I decided to seek advice for Bella's queries using the ever-helpful <span style="color:darksegreen">ChatGPT</span>. And guess what? The responses were absolutely fantastic!👍 It provided me with clear and concise answers that left me impressed!🥹

So, I wanted to extend my assistance to fellow pet owners, and that's why I created an app specifically designed to make their lives easier. My hope is that this app can provide a little extra support to all the pet owners out there who deeply care for their furry companions.

Are you ready to join me on this exciting journey? 😂
`

const qnaElement = document.getElementById("qna")
qnaElement.innerHTML = `
<p style="text-align:center">More information for AimPawPaw?</p>
          <details>
            <summary>Saving Conversation.</summary>
            <p>We want you to know that your privacy and security are of utmost importance to us. Rest assured that when you engage in conversations within the app, we prioritize the protection of your personal information. While we do keep a record of the inquiries and answers related to your beloved pets, we do not store any personal information such as your access equipment details or IP information. Our primary focus is on improving our services and ensuring a seamless experience for you and your furry friends.

            So, feel free to ask any questions, seek advice, or share your concerns with us. Your feedback plays a vital role in helping us enhance our app and cater to your specific needs. We appreciate your trust in us and look forward to assisting you every step of the way.
            
            Get ready to embark on a delightful journey with our pet-friendly app! 😅</p>
          </details>
          <details>
            <summary>Advertising Support.</summary>
            <p>To ensure the smooth operation of our app, there are certain costs involved, such as server operation fees and Chat GPT usage fees. In order to cover these expenses, we rely on advertising support.

            We kindly ask for your understanding in this matter. By allowing advertisements, we can continue to provide you with a delightful and user-friendly experience. Rest assured that we strive to strike a balance between offering valuable content and ensuring a pleasant app usage for you.
            
            Thank you for your understanding and support! We truly appreciate having you as a part of our community. Let's make this app even more amazing together! 😄</p>
          </details>
          <details>
            <summary>Origin of Images</summary>
            <p>We wanted to create a visually appealing experience for you, so we used some fantastic images from freepik.com for our top banner and background icon.

            If you're curious to learn more about these images or explore other great resources, we invite you to visit  <a
            href="https://www.freepik.com/free-vector/hand-drawn-pet-sitting-facebook-cover_32874038.htm#query=pets&position=1&from_view=search&track=sph">freepik.com</a>. They have a wide range of captivating visuals that can add charm and personality to any project.</p>
          </details>
          <details>
            <summary>More question?</summary>
            <p>We're here to assist you every step of the way! If you have any questions or need further information about our app, please don't hesitate to reach out to us.

            Feel free to contact us via email below. We value your feedback and are excited to address any inquiries or concerns you may have.
            
            Thank you for your interest in our app. We look forward to hearing from you soon! 🤣</p>
            <a href="mailto:aimpawpaw.question@gmail.com">aimpawpaw.question@gmail.com</a>
          </details>
`
const closeButtonElement = document.getElementById("close-button")
closeButtonElement.innerText = "Close"


const refreshMessageElement = document.getElementById("refresh_message")
refreshMessageElement.innerText = "If you click the 'Yes' button below, the refresh option will be activated. However, please note that this action will delete all conversations. So, before you proceed, please consider if you truly want to refresh and start with a clean message."

const refreshButtonMessageYes = document.getElementById("refresh_button_yes")
refreshButtonMessageYes.innerText = "Yes!"

const refreshButtonMessageNo = document.getElementById("refresh_button_no")
refreshButtonMessageNo.innerText = "No!"

const refreshLanguageMessageElement = document.getElementById("refresh_language_message")
refreshLanguageMessageElement.innerText = "언어를 변경하면, 문의하셨던 모든 기록이 제거 됩니다. 그래도 변경하시겠어요?"

const refreshLanguageButtonMessageYes = document.getElementById("refresh_lang_button_yes")
refreshLanguageButtonMessageYes.innerText = "네 변경해주세요!"

const refreshLanguageButtonMessageNo = document.getElementById("refresh_lang_button_no")
refreshLanguageButtonMessageNo.innerText = "No, Return me!"


const chatInputElement = document.getElementById("chat_input")
const inputBoxPlaceholder = "Just type in your questions here and hit that friendly little button on the right."
chatInputElement.placeholder = inputBoxPlaceholder

const opt10Element = document.getElementById("opt10")
opt10Element.innerText = "Select a pet species."

const opt11Element = document.getElementById("opt11")
opt11Element.value = "I have the cutest dog"
opt11Element.innerText = "A dog as my pet!"

const opt12Element = document.getElementById("opt12")
opt12Element.value = "I have the cutest cat"
opt12Element.innerText = "A cat as my pet!"


const opt20Element = document.getElementById("opt10")
opt20Element.innerText = "Choose the gender of your furry friend."

const opt21Element = document.getElementById("opt11")
opt21Element.value = "who is a boy"
opt21Element.innerText = "a boy"

const opt22Element = document.getElementById("opt12")
opt22Element.value = "who is a girl"
opt22Element.innerText = "a girl"

const opt30Element = document.getElementById("opt30")
opt30Element.innerText = "Determine your pet's age"

const opt31Element = document.getElementById("opt31")
opt31Element.value = "under a year old"
opt31Element.innerText = "under a year old"

const opt32Element = document.getElementById("opt32")
opt32Element.value = "1~4 years old"
opt32Element.innerText = "1~4 years old"

const opt33Element = document.getElementById("opt33")
opt33Element.value = "5~9 years old"
opt33Element.innerText = "5~9 years old"

const opt34Element = document.getElementById("opt34")
opt34Element.value = "10~14 years old"
opt34Element.innerText = "10~14 years old"

const opt35Element = document.getElementById("opt35")
opt35Element.value = "over 15 years old"
opt35Element.innerText = "over 15 years old"

const opt40Element = document.getElementById("opt40")
opt40Element.innerText = "Choose your pet's weight."

const opt41Element = document.getElementById("opt41")
opt41Element.value = "less than 1kg"
opt41Element.innerText = "less than 1kg or 2.2lb"

const opt42Element = document.getElementById("opt42")
opt42Element.value = "between 1~5kg"
opt42Element.innerText = "between 1~5kg or 2~11lb"

const opt43Element = document.getElementById("opt43")
opt43Element.value = "between 5~10kg"
opt43Element.innerText = "between 5~10kg or 11~22lb"

const opt44Element = document.getElementById("opt44")
opt44Element.value = "between 10~18kg"
opt44Element.innerText = "between 10~18kg or 22~40lb"

const opt45Element = document.getElementById("opt45")
opt45Element.value = "between 18~25kg"
opt45Element.innerText = "between 18~25kg or 40~55lb"

const opt46Element = document.getElementById("opt46")
opt46Element.value = "more than 25kg"
opt46Element.innerText = "more than 25kg or 55lb"


const opt50Element = document.getElementById("opt50")
opt50Element.innerText = "Status of neutering surgery on your pet"

const opt51Element = document.getElementById("opt51")
opt51Element.value = "had a neutering operation"
opt51Element.innerText = "had a neutering operation"

const opt52Element = document.getElementById("opt52")
opt52Element.value = "naver had a neutering operation"
opt52Element.innerText = "never had a neutering operation"

const opt90Element = document.getElementById("opt90")
opt90Element.innerText = "Yes or No"

const opt91Element = document.getElementById("opt91")
opt91Element.value = "Yes. please go ahead."
opt91Element.innerText = "Yes. please go ahead."

const opt92Element = document.getElementById("opt92")
opt92Element.value = "No, I need fresh input"
opt92Element.innerText = "No, I need fresh input"


////////////////////
const chatApp = document.querySelector("#chat");
const chatMessages = document.querySelector("#chat__messages");
const chatForm = document.querySelector("#chat-form");
const timeTag = document.querySelector(".notice");

// const URL_QUERY = "http://127.0.0.1:3000/query";
const URL_QUERY = "https://port-0-aimpawpaw-backend-f69b2mlh9avo22.sel4.cloudtype.app/query";

const messageChains = [];
let chatCnt = 0;

const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const mm = currentDate.getMonth() + 1;
const dd = currentDate.getDate();
const hh = currentDate.getHours();
const apm = hh > 12 ? "오후" : "오전";
const apmHh = hh > 12 ? hh - 12 : hh;
const min = currentDate.getMinutes();

timeTag.innerText = `You've connected at ${yyyy}-${mm}-${dd} ${apm} ${apmHh}:${min}.\n- If you want to refresh converation, please click the text AIm PawPaw at the top(↑)\n- If you want more information or change language about this app please click the paw icon at the right-top(↗)`;

const chatInput = document.querySelector(".chat-input");
const chatSelectSpecies = document.querySelector(".chat-select-species");
const chatSelectSex = document.querySelector(".chat-select-sex");
const chatSelectAge = document.querySelector(".chat-select-age");
const chatInputWeight = document.querySelector(".chat-input-weight");
const chatSelectNeutral = document.querySelector(".chat-select-neutral");
const inputButton = document.querySelector(".input-button");


let preMessageIdx = 1;
let preUserMessage = "";
const preMessage = [
  "Hey there! 👋 I'm your friendly AI messenger, 'Aim PawPaw'. I'm here to help you with any questions you have about pets. But before we dive in, I have few questionnaire about your furry friend (🐶/🐱). 😆 Let's get started, shall we?",
  "The first question~ Is your pet a puppy? Is it a cat?",
  "Could you please let us know the gender of your pet?",
  "Here comes question number three! 😊 May I know how old your furry friend is?",
  "Could you please provide the weight of your pet?",
  "Just one last question! Has your pet had a neutering operation?",
  "Thank you for your answer! 🥰 Please text your question naturally. For instance, you can ask, 'My pet is weeping a lot. What should I do?' Just like that!",
];
let conversation_id = null;

// Get the user's preference
var preUserMessageCached = localStorage.getItem("aimpawpaw.preUserMessageCached");
var preUserMessageCached_V = localStorage.getItem("aimpawpaw.preUserMessageCached_V");
const preUserMessageCached_currentV = "20230514E";

const chatSelectYesNo = document.querySelector(".chat-select-yesno");
let chatEventInput = chatSelectYesNo;

function debugPrint() {
  return;
  let txt = "[DEBUG] ";
  const argsArray = Array.from(arguments);
  argsArray.forEach((arg) => {
    txt += " " + arg;
  });
  console.log(txt);
}

async function main() {
  inputDisabled(true);

  if (
    preUserMessageCached &&
    preUserMessageCached_V === preUserMessageCached_currentV
  ) {
    const welcomeMsg = preMessage[0];

    debugPrint("check1");
    await createMessage(welcomeMsg, "assistant");

    selectInputType(0);
    const message =
      "Great news! I've reviewed the information you provided for your pet. Can we go ahead and use the same information?";
    await createMessage(message, "assistant");
    await createMessage(`"${preUserMessageCached}"`, "assistant");
  } else {
    addPreMessageAssistant(0);
    addPreMessageAssistant(preMessageIdx);
  }
}

main();

function createMessage(message, messageClass, isHTML = false, delayTime = 200) {
  return new Promise((resolve, reject) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(messageClass);

    // message = message.trim();
    // if (messageClass === "assistant" && chatEventInput.isEqualNode(chatInput)) {
    //   if (!(message.slice(-1) === "." || message.slice(-1) === "!" || message.slice(-1) === "?" || message.slice(-1) === ">")) {
    //     message += "\n\n" + " * 문장이 잘렸네요. 원하신다면 continue를 입력해서 답변을 완성해 보세요."
    //     chatInput.disabled = false;
    //     chatInput.value = "continue";
    //   }
    // }


    if (isHTML) {
      messageDiv.innerHTML = message;
    } else {
      messageDiv.innerText = message;
    }

    setTimeout(() => {
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      resolve(messageDiv);
    }, delayTime);
  });
}
function createMessageNow(message, messageClass) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(messageClass);
  messageDiv.innerText = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return messageDiv;
}

async function addPreMessageAssistant(idx) {
  const messageClass = "assistant";
  const message = preMessage[idx];

  debugPrint("idx2 from addPreMessageAssistant: ", idx);

  if (idx === preMessage.length - 1) {
    messageChains.push({ role: "user", content: preUserMessage });
    localStorage.setItem("aimpawpaw.preUserMessageCached", preUserMessage);
    localStorage.setItem(
      "aimpawpaw.preUserMessageCached_V",
      preUserMessageCached_currentV
    );
  }

  debugPrint("idx from addPreMessageAssistant: ", idx);
  selectInputType(idx);

  await createMessage(message, messageClass);
}

function inputDisabled(isDisable) {
  if (isDisable) {
    //Diable
    chatInput.placeholder = "";
    chatInput.style.backgroundColor = "lightgray";
    chatInput.disabled = true;
    inputButton.disabled = true;
    inputButton.style.color = "rgb(50, 50, 50)";
  } else {
    //Enable
    chatInput.disabled = false;
    chatInput.placeholder = inputBoxPlaceholder;
    chatInput.style.backgroundColor = "white";
    inputButton.disabled = false;
    inputButton.style.color = "rgb(200, 200, 200)";
  }
}

async function addPreMessageUser(message) {
  const messageClass = "user";
  await createMessage(message, messageClass, 0);
}

function selectInputType(idx) {
  chatInput.style.display = "none";
  chatSelectSpecies.style.display = "none";
  chatSelectSex.style.display = "none";
  chatSelectAge.style.display = "none";
  chatInputWeight.style.display = "none";
  chatSelectNeutral.style.display = "none";
  chatSelectYesNo.style.display = "none";

  switch (idx) {
    case 0:
      chatEventInput = chatSelectYesNo;
      chatSelectYesNo.style.display = "block";
      // chatSelectYesNo.focus();
      break;
    case 1:
      chatEventInput = chatSelectSpecies;
      chatSelectSpecies.style.display = "block";
      // chatSelectSpecies.focus();
      break;
    case 2:
      chatEventInput = chatSelectSex;
      chatSelectSex.style.display = "block";
      // chatSelectSex.focus();
      break;
    case 3:
      chatEventInput = chatSelectAge;
      chatSelectAge.style.display = "block";
      // chatSelectAge.focus();
      break;
    case 4:
      chatEventInput = chatInputWeight;
      chatInputWeight.style.display = "block";
      // chatInputWeight.focus();
      break;
    case 5:
      chatEventInput = chatSelectNeutral;
      chatSelectNeutral.style.display = "block";
      // chatSelectNeutral.focus();
      break;
    default:
      chatEventInput = chatInput;
      chatInput.style.display = "block";
      // chatInput.focus();
      break;
  }
}

async function addMessage(message, isUser) {
  const messageClass = isUser ? "user" : "assistant";
  await createMessage(message, messageClass);
  messageChains.push({ role: messageClass, content: message });
}

async function addErrorMessage(message) {
  const messageClass = "assistant";

  await createMessage(message, messageClass);
  messageChains.pop();
}

async function showAssistantFetching() {
  innerHTML = `<i class="fa fa-paw a" aria-hidden="true" ></i>
  <i class="fa fa-paw b" aria-hidden="true" ></i>
  <i class="fa fa-paw c" aria-hidden="true" ></i>
  <i class="fa fa-paw d" aria-hidden="true" ></i>
  <i class="fa fa-paw e" aria-hidden="true" ></i>
  <i class="fa fa-paw f" aria-hidden="true" ></i>
  `;
  const resultDiv = await createMessage(innerHTML, "assistant", true);
  return resultDiv;
}

const errorMessage = [
  "Oops... 😅 It seems there was a problem generating an answer. I apologize for the inconvenience. Would you mind giving it another try? Pretty please? 🥺",
  "Oops.. a problem generated again.. 😢😢😢.",
];
// let isFirstError = true;
let lastMsg = ""
async function fetchMessage() {
  const answerDiv = await showAssistantFetching();
  const loadingIcon = document.querySelector(".loading-icon")
  loadingIcon.style.display = "block";

  inputDisabled(true);

  if (messageChains.length > 5) {
    requestMessage = [messageChains[0], ...messageChains.slice(-3)];

  } else {
    requestMessage = messageChains;
  }

  console.log(`[messageChains]\n`, messageChains);
  console.log(`[requestMessage]\n`, requestMessage);

  bodyData = JSON.stringify({ language: "en" }, { messageChains: [...messageChains] });

  const response = await fetch(URL_QUERY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: bodyData,
  })
    .then(response => {
      const reader = response.body.getReader();
      let result = "";

      return reader.read().then(function processText({ done, value }) {
        result += new TextDecoder().decode(value || new Uint8Array());
        answerDiv.innerHTML = `${result} ...`;
        answerDiv.scrollTop = answerDiv.scrollHeight;


        if (done) {
          answerDiv.innerHTML = `${result}`;
          messageChains.push({ role: 'assistant', content: result });
          loadingIcon.style.display = "none";
          inputDisabled(false);
        } else {
          return reader.read().then(processText);
        }
      })
    })
    .catch(error => {
      console.error("Error:", error);

      answerDiv.remove()
      addErrorMessage(errorMessage[0]);
      lastMsg = messageChains.slice(-1)[0].content;
      loadingIcon.style.display = "none";
      inputDisabled(false);
    });

  if (lastMsg !== "") {
    chatInput.value = lastMsg;
  }
}

const submitForm = async (event) => {
  event.preventDefault();
  const originalMessage = chatEventInput.value.trim();

  if (originalMessage === "") {
    inputButton.classList.add("shake");
    chatEventInput.classList.add("shake");
    setTimeout(() => {
      inputButton.classList.remove("shake");
      chatEventInput.classList.remove("shake");
    }, 500);
    // chatEventInput.focus();
    return;
  }

  inputDisabled(true);
  let message = originalMessage;

  // if the message is answers from pre-questions, the message will not be stacked and request fetcing.
  if (chatEventInput.isEqualNode(chatInput)) {
    await addMessage(message, true);
    fetchMessage();
    chatInput.value = "";

    // chatInput.focus();
  } else {
    await addPreMessageUser(message);

    if (chatEventInput.isEqualNode(chatSelectYesNo)) {
      if (message.substring(0, 1) === "Y") {
        preUserMessage = preUserMessageCached;
        preMessageIdx = preMessage.length - 1;
        await addPreMessageAssistant(preMessageIdx);
      } else {
        await addPreMessageAssistant(1);
        preMessageIdx = 1;
      }
    } else {
      preUserMessage += message + ", ";
      preMessageIdx++;
      await addPreMessageAssistant(preMessageIdx);
    }
  }

  if (preMessageIdx >= preMessage.length - 1) {
    inputDisabled(false);
  }

  return;
};

chatForm.addEventListener("submit", submitForm);
chatForm.addEventListener("change", (event) => {
  if (chatEventInput === chatInput) {
    return;
  } else {
    submitForm(event);
  }
});


function handleFgContainer() {
  const fgContainer = document.querySelector("#fg-container");
  fgContainer.style.display =
    fgContainer.style.display === "none" ? "block" : "none";
}

function handleRefreshChecker() {
  const refreshChecker = document.querySelector("#refresh-checker");
  refreshChecker.style.display =
    refreshChecker.style.display === "none" ? "block" : "none";
}


function handleLanguage() {
  const refreshForLanguage = document.querySelector("#refresh-for-language");
  refreshForLanguage.style.display =
    refreshForLanguage.style.display === "none" ? "block" : "none";
}

function changeLanguage() {
  localStorage.setItem("aimpawpaw.language", "en");
  location.reload();
}

