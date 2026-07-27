const app = document.getElementById("app");

let stage2Attempts = 0;
let verifiedArchives = 0;
loadAccess();

//=========================================
// ACCESS
//=========================================

function loadAccess(){

    app.innerHTML = Stages.access();

    document
        .getElementById("accessButton")
        .addEventListener("click",checkAccess);

    document
        .getElementById("accessInput")
        .addEventListener("keydown",function(e){

            if(e.key==="Enter")
                checkAccess();

        });

}

function checkAccess(){

    const input =
        document
        .getElementById("accessInput")
        .value
        .trim();

    const response =
        document
        .getElementById("response");

    if(input===CONFIG.accessCode){

        response.textContent="Access Granted.";

        setTimeout(loadStage1,800);

        return;

    }

    wrongResponse(response);

}

//=========================================
// STAGE 1
//=========================================

function loadStage1(){

    app.innerHTML=Stages.stage1();

    const input=
        document.getElementById("stage1Input");

    input.focus();

    //---------------------------------

    const faces=[

        ":)",
        ";)",
        ":|",
        ":("

    ];

    let faceIndex=0;

    document
        .getElementById("fakeCode")
        .addEventListener("mouseenter",()=>{

            faceIndex++;

            if(faceIndex>=faces.length)
                faceIndex=0;

            document.getElementById("smiley").textContent=
                faces[faceIndex];

        });

    //---------------------------------

    document
        .getElementById("stage1Button")
        .addEventListener("click",checkStage1);

    input.addEventListener("keydown",function(e){

        if(e.key==="Enter")
            checkStage1();

    });

}

function checkStage1(){

    const answer=
        document
        .getElementById("stage1Input")
        .value
        .trim()
        .toLowerCase();

    const response=
        document
        .getElementById("stage1Response");

    if(answer===CONFIG.stagePasswords.stage1.toLowerCase()){

        response.textContent = "Correct.";

setTimeout(loadStage2,700);

return;

    }

    wrongResponse(response);

}

//=========================================
// STAGE 2
//=========================================

function loadStage2(){

    stage2Attempts = 0;

    app.innerHTML = Stages.stage2();

    //---------------------------------
    // Reset counter
    //---------------------------------

    document.getElementById("attemptNumber").textContent = "0";
    document.getElementById("attemptMessage").textContent =
        "Find the hidden message.";

    //---------------------------------
    // Generate Braille puzzle
    //---------------------------------

    const puzzle = generateBraillePuzzle();

    const container =
        document.getElementById("brailleContainer");

    container.innerHTML = "";

    puzzle.forEach(line=>{

        const div =
            document.createElement("div");

        div.textContent = line.text;

     switch(line.color){

    case "blue":

        div.style.color = "#4A8EF2";

        break;

    case "orange":

        div.style.color = "#FFB347";

        break;

    case "real":

        div.style.color = "#5A98FC";

        break;

}

        div.style.marginBottom="2px";

        container.appendChild(div);

    });

    //---------------------------------
    // Button
    //---------------------------------

    document
        .getElementById("stage2Button")
        .addEventListener("click",checkStage2);

    //---------------------------------
    // Enter key
    //---------------------------------

    document
    .getElementById("stage2Input")
    .addEventListener("keydown",function(e){

        if(e.key==="Enter")
            checkStage2();

    });

}

//=========================================
// CHECK STAGE 2
//=========================================

function checkStage2(){

    const input =
        document
        .getElementById("stage2Input")
        .value
        .trim()
        .toLowerCase();

    //---------------------------------
    // Correct
    //---------------------------------

    if(input === CONFIG.stagePasswords.stage2.toLowerCase()){

        document.getElementById("attemptMessage").textContent =
            "Correct.";

        setTimeout(loadStage3,700);

        return;

    }

    //---------------------------------
    // Wrong
    //---------------------------------

    stage2Attempts++;

    document.getElementById("attemptNumber").textContent =
        stage2Attempts;

    let message = "";

    if(stage2Attempts < 5){

        message = [
            "Keep looking.",
            "The answer hasn't moved.",
            "Nothing has changed.",
            "Search more carefully.",
            "Interesting guess."
        ][Math.floor(Math.random()*5)];

    }

    else if(stage2Attempts < 10){

        message = [
            "You're overlooking something.",
            "The page rewards patience.",
            "Looking longer isn't looking closer.",
            "You're reading, but not observing.",
            "The clue is still here."
        ][Math.floor(Math.random()*5)];

    }

    else if(stage2Attempts < 20){

        message = [
            "You are making progress.",
            "Your search is becoming more focused.",
            "Stay patient.",
            "You're closer than before.",
            "Don't rush now."
        ][Math.floor(Math.random()*5)];

    }

    else{

        message = [
            "Keep going.",
            "Most people miss it several times.",
            "You're still overlooking something.",
            "One line is different.",
            "The answer has always been here."
        ][Math.floor(Math.random()*5)];

    }

    document.getElementById("attemptMessage").textContent =
        message;

    document.getElementById("stage2Input").value = "";

    document.getElementById("stage2Input").focus();

}

//=========================================
// TEMP STAGE 3
//=========================================

function loadStage3(){

    alert("Stage 3 is under construction.");

}

//=========================================
// HELPER
//=========================================

function wrongResponse(element){

    element.textContent =
        CONFIG.wrongMessages[
            Math.floor(
                Math.random() *
                CONFIG.wrongMessages.length
            )
        ];

}
//=========================================
// STAGE 3
//=========================================

const transmissions = [

".--. . .-. ... .. ... - . -. -.-. . / .. ... / --- ..-. - . -. / - .... . / -- --- ... - / .. -- .--. --- .-. - .- -. - / .-- . .- .--. --- -. / .- -. -.-- / .--. . .-. ... --- -. / -.-. .- -. / -.-. .- .-. .-. -.-- .-.-.-",

".- / .-- .. ... . / .--. . .-. ... --- -. / .- .-.. .-- .- -.-- ... / .-.. . .- .-. -. ... / -- --- .-. . / ..-. .-. --- -- / --- -... ... . .-. ...- .. -. --. / - .... .- -. / ..-. .-. --- -- / .-. ..- ... .... .. -. --. .-.-.-",

".--. .- - .. . -. -.-. . / .. ... / -. --- - / .-- . .- -.- -. . ... ... .-.-.- / .. - / .. ... / - .... . / -- .- .-. -.- / --- ..-. / ... --- -- . --- -. . / .-- .... --- / -.- -. --- .-- ... / .... --- .-- / - --- / ..-. .. -. .. ... .... .-.-.-",

"-.-- --- ..- / -- .- -.-- / -... . / ... . .- .-. -.-. .... .. -. --. / ..-. --- .-. / ... --- -- . - .... .. -. --. / - .... .- - / .-- .- ... / .... .. -.. -.. . -. / .. -. / .-- .... .. - . .-.-.-",

".-. . .- -.. / --- -. .-.. -.-- / - .... . / ..-. .. .-. ... - / .-.. . - - . .-. / --- ..-. / . .- -.-. .... / -- . ... ... .- --. . .-.-.-",

"..- -. -.. . .-. / .- / ... -.- . .-.. . - --- -. .----. ... / ... -- .. .-.. . / .-.. .. . ... / .- / -. .- -- . .-.-.-",

"... --- -- . - .. -- . ... / - .... . / ... .. -- .--. .-.. . ... - / .- -. ... .-- . .-. / .. ... / - .... . / -.-. --- .-. .-. . -.-. - / --- -. . .-.-.-"

];

function loadStage3(){

    app.innerHTML = Stages.stage3();

    let progress = 0;

    const fill =
        document.getElementById("progressFill");

    const status =
        document.getElementById("stage3Status");

    const terminal =
        document.getElementById("transmission");

    const input =
        document.getElementById("stage3Input");

    const button =
        document.getElementById("stage3Button");

    const loading = setInterval(()=>{

        progress += 2;

        fill.style.width = progress + "%";

        if(progress >= 100){

            clearInterval(loading);

            status.textContent =
    "Connection established.\nWaiting for incoming transmission...";

            setTimeout(showTransmissions,1500);

        }

    },40);

    function showTransmissions(){

        status.textContent =
    "Receiving transmission...";
       
    let index = 0;

        const reveal = setInterval(()=>{

typeTransmission(transmissions[index], () => {

    index++;

    if(index >= transmissions.length){

        clearInterval(reveal);

        status.textContent =
    "Transmission complete.";

input.disabled = false;
button.disabled = false;

input.focus();

    }

});

            if(index >= transmissions.length){

                clearInterval(reveal);

                input.disabled = false;
                button.disabled = false;

                input.focus();

            }

        },500);

    }

    button.addEventListener("click",checkStage3);

    input.addEventListener("keydown",e=>{

        if(e.key==="Enter")
            checkStage3();

    });

}

function checkStage3(){

    const answer =
        document.getElementById("stage3Input")
        .value
        .trim()
        .toLowerCase();

    const response =
        document.getElementById("stage3Response");

    if(answer==="papyrus"){

       response.textContent =
    "Correct.";

setTimeout(loadStage4,1000);

return;

    }

    wrongResponse(response);

}
function typeTransmission(text, finished){

    const terminal =
        document.getElementById("transmission");

    const line =
        document.createElement("div");

    terminal.appendChild(line);

    let i = 0;

    const typing = setInterval(()=>{

        line.textContent += text[i];

        terminal.scrollTop =
            terminal.scrollHeight;

        i++;

        if(i >= text.length){

            clearInterval(typing);

            line.innerHTML += "<br>";

            setTimeout(finished,500);

        }

    },12);

}
//=========================================
// STAGE 4
//=========================================

function loadStage4(){

    app.innerHTML = Stages.stage4();

    history.pushState(
        {},
        "",
        "/23-5-12-12-4-15-14-5"
    );

    let verifiedArchives = 0;

    const links =
        document.querySelectorAll(".videoLink");

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            if(link.dataset.opened)
                return;

            link.dataset.opened = "true";

            verifiedArchives++;

            document.getElementById("verifiedCount").textContent =
                verifiedArchives;

            if(verifiedArchives===6){

                document.getElementById("stage4Input").disabled =
                    false;

                document.getElementById("stage4Button").disabled =
                    false;

                document.getElementById("stage4Input").placeholder =
                    "Authentication Code";

                document.getElementById("stage4Input").focus();

            }

        });

    });

    document
        .getElementById("clueBox")
        .addEventListener("click",function(){

            this.textContent = "Fuck you.";

        });

    document
        .getElementById("stage4Button")
        .addEventListener("click",checkStage4);

    document
        .getElementById("stage4Input")
        .addEventListener("keydown",function(e){

            if(e.key==="Enter")
                checkStage4();

        });

}

function checkStage4(){

    const answer =
        document
        .getElementById("stage4Input")
        .value
        .trim()
        .toLowerCase();

    const response =
        document
        .getElementById("stage4Response");

  if(answer==="welldone"){

    response.textContent="Correct.";

    history.pushState(
        {},
        "",
        "#23-5-12-12-4-15-14-5"
    );

    setTimeout(loadEnding,700);

    return;

}

    wrongResponse(response);

}
//=========================================
// ENDING
//=========================================

function loadEnding(){

    app.innerHTML = `

    <div id="endingScreen">

        <h1 id="endingTitle">
            Congratulations.
        </h1>

        <h2 id="endingPrize">
            See the creator for your prize.
        </h2>

        <p id="endingText">

            Every archive has been recovered.
            <br><br>
            Thank you for playing.

        </p>

    </div>

    `;

}