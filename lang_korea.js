const titleElement = document.getElementById("title")
titleElement.innerText = "빅스텝 - 성공적인 프로젝트 수행을 위한 AI 동반자";

const chatInputElement = document.getElementById("chat_input")
const inputBoxPlaceholder = "여기에 질문을 입력하신 후, 오른쪽 [보내기] 버튼을 클릭해 주세요! (최대 100글자)"
chatInputElement.placeholder = inputBoxPlaceholder

const chatSelectContract = document.getElementById("chat-select-contract")


const chatApp = document.querySelector("#chat");
const chatMessages = document.querySelector("#chat__messages");
const chatForm = document.querySelector("#chat-form");
const timeTag = document.querySelector(".notice");

const URL_QUERY = "https://gs-hackerton-2024-31.loca.lt/";

const messageChains = [];

const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const mm = currentDate.getMonth() + 1;
const dd = currentDate.getDate();
const hh = currentDate.getHours();
const apm = hh > 12 ? "오후" : "오전";
const apmHh = hh > 12 ? hh - 12 : hh;
const min = currentDate.getMinutes();

timeTag.innerText = `${yyyy}년 ${mm}월 ${dd}일 ${apm} ${apmHh}시 ${min}분 에 접속하셨어요.`;

const chatInput = document.querySelector(".chat-input");
const inputButton = document.querySelector(".input-button");

let preMessageIdx = 1;
let preUserMessage = "제가 궁금한 점은";
const preMessage = [
  "안녕하세요~👋\n 궁금한 계약내용을 해결해주는 빅스텝입니다.",
  "궁금한 프로젝트를 선택해주세요!",
  "이제 궁금하신 내용을 영어로 문의해 주세요.🤔 예를 들어, 'Please find clauses about the Termination'와 같이요.",
];

var preUserMessageCached = localStorage.getItem("bigStep.preUserMessageCached");
var preUserMessageCached_V = localStorage.getItem("bigStep.preUserMessageCached_V");
const preUserMessageCached_currentV = "20240704K";

//currentV는 매일 올려야하는거 아닌가?

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

    if (preUserMessageCached && preUserMessageCached_V === preUserMessageCached_currentV) {
        const welcomeMsg = preMessage[0];

        debugPrint("check1");
        await createMessage(welcomeMsg, "assistant");

        selectInputType(0); // 프로젝트 선택 모드로 설정
        

        if(preUserMessageCached!==null && preUserMessageCached !== "null"){
            const message = "기존에 입력하신 프로젝트 정보를 확인했습니다. 아래 정보를 그대로 사용할까요?";
            await createMessage(`"${preUserMessageCached}"`, "assistant")
        }else{
            await createMessage("저장된 프로젝트 정보가 없습니다. 프로젝트를 선택해주세요.", "assistant");
            updateProjectList();
        }


        // if (preUserMessageCached !== null && preUserMessageCached !== "null") {
        //     await createMessage(`"${preUserMessageCached}"`, "assistant");
            
        //     // 예/아니오 옵션 추가
        //     chatSelectContract.innerHTML = `
        //         <option value="yes">예</option>
        //         <option value="no">아니오</option>
        //     `;
        // } else {
        //     await createMessage("저장된 프로젝트 정보가 없습니다.", "assistant");
        //     updateProjectList();
        // }
    } else {
        addPreMessageAssistant(0);
        addPreMessageAssistant(preMessageIdx);
        selectInputType(0); // 프로젝트 선택 모드로 설정
        updateProjectList();
    }
}

main();
  
  const opt10Element = document.getElementById("opt10")
  opt10Element.innerText = "프로젝트를 선택해주세요."

  function createMessage(message, messageClass, isHTML = false, delayTime = 200) {
    return new Promise((resolve, reject) => {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add(messageClass);

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
      localStorage.setItem("bigStep.preUserMessageCached", preUserMessage);
      localStorage.setItem(
        "bigStep.preUserMessageCached_V",
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
    chatSelectContract.style.display = "none";
 
    switch (idx) {
      case 0:
        chatEventInput = chatSelectContract;
        chatSelectContract.style.display = "block";
  
        break;
      
      default:
        chatEventInput = chatInput;
        chatInput.style.display = "block";
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
    innerHTML = `<i class="fa fa-book a" aria-hidden="true" ></i>
    <i class="fa fa-book b" aria-hidden="true" ></i>
    <i class="fa fa-book c" aria-hidden="true" ></i>
    <i class="fa fa-book d" aria-hidden="true" ></i>
    <i class="fa fa-book e" aria-hidden="true" ></i>
    <i class="fa fa-book f" aria-hidden="true" ></i>
    `;
    const resultDiv = await createMessage(innerHTML, "assistant", true);
    return resultDiv;
  }

  const errorMessage = [
    "어이쿠.. 😅\n 답변을 생성하다가 문제가 발생했어요. 죄송하지만 한 번더 시도해 보시겠어요? 🥺.",
    "헉.. 에러가 또 발생했네요.. 😢😢😢.",
  ];

  let lastMsg = ""


  async function fetchMessage() {
       // 사용자가 입력한 프로젝트와 질문 가져오기
       const project = chatSelectContract.value.trim();
       const query = chatInput.value.trim();
       
       if (!project) {
           addErrorMessage("프로젝트를 선택해주세요.");
           inputDisabled(false);
           return;
       }
   
       if (!query) {
           addErrorMessage("질문을 입력해주세요.");
           inputDisabled(false);
           return;
       }
   
       try {
           
           const loadingDiv = await showAssistantFetching();
   
           const response = await fetch(`${URL_QUERY}/query2`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
               },
               body: new URLSearchParams({
                   project: project,
                   query: query
               })
           });
   
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
   
           const data = await response.json();
   
           // 책 아이콘 대화창 삭제
            loadingDiv.remove();


           // 참조된 노드 정보가 있다면 추가
           if (data.reference) {

            await createMessage(data.response, 'assistant');
            let count=1;
            for (const ref of data.reference) {

                const detailContents = `
                    참조 ${count}<br>
                    파일명: ${ref.file_name}<br>
                    페이지: ${ref.page}<br>
                    관련도: ${ref.relation_score}
                    <details>
                    <summary>페이지내용보기</summary>
                    <p>${ref.content}</p>
                    </details>
                `;

                await createMessage(detailContents, 'assistant',true);

                chatMessages.scrollTop = chatMessages.scrollHeight;
                count++;
            }
            
        }
           else {
               addErrorMessage("답변을 생성할 수 없습니다.");
           }
   
       } catch (error) {
           console.error('Error:', error);
           addErrorMessage("서버와 통신 중 오류가 발생했습니다.");
       } finally {
           inputDisabled(false);
       }
    }

    // 프로젝트 목록 업데이트 함수
async function updateProjectList() {

    try {
        const response = await fetch(`${URL_QUERY}/project_list`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // 기존 옵션 제거
        chatSelectContract.innerHTML = '<option id="opt10" value="" disabled selected hidden>프로젝트를 선택해주세요.</option>';

        if (data.project_list && data.project_list.length > 0) {
            
            data.project_list.forEach(project => {
                const option = document.createElement('option');
                option.value = project;
                option.textContent = project;
                chatSelectContract.appendChild(option);
                
            });
        } else {
            addErrorMessage("사용 가능한 프로젝트가 없습니다.");
        }

    } catch (error) {
        console.error('Error:', error);
        addErrorMessage("프로젝트 목록을 불러오는 중 오류가 발생했습니다.");
    }
}

updateProjectList()

// document.onload =async() =>{
//    await updateProjectList();
// }

// 페이지 로드 시 프로젝트 목록 업데이트
// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log("1111111111111")
//     updateProjectList();
// });



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
      await fetchMessage();
      chatInput.value = "";
  
      // chatInput.focus();
    } else {
      await addPreMessageUser(message);
  
      if (chatEventInput.isEqualNode(chatSelectContract)) {
            preUserMessage = preUserMessageCached;
            preMessageIdx = 2; // 마지막 preMessage로 설정
            await addPreMessageAssistant(preMessageIdx);
            selectInputType(1); // 질문 입력 모드로 전환
        } else {
            preUserMessage += message + " ";
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