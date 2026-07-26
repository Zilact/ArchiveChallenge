const Stages = {

    access() {

        return `
        <div class="access">

            <h1>Back to School Challenge</h1>

            <p>Enter the access code.</p>

            <input id="accessInput" autocomplete="off">

            <button id="accessButton">→</button>

            <p id="response"></p>

        </div>
        `;

    },

stage1() {

    return `
    <div class="stage1 fade">

        <img
            src="Assets/images/stage1.png"
            class="stage1Background"
        >

        <div id="fakeCode">

            <span id="smiley">:)</span>
            <span> school2026</span>

        </div>

        <div class="stageCenter">

            <input
                id="stage1Input"
                autocomplete="off"
                spellcheck="false"
            >

            <button id="stage1Button">→</button>

            <div id="stage1Response" class="message"></div>

        </div>

    </div>
    `;

},

    stage2() {

        return `
        <div class="stage2 fade">

            <div id="attemptCounter">

                <div class="attemptTitle">
                    Attempts
                </div>

                <div id="attemptNumber">
                    0
                </div>

                <div id="attemptMessage">
                    Persistence is noted.
                </div>

            </div>

            <div id="brailleContainer">

                <!-- Braille generator goes here in v0.4.1 -->

            </div>

            <div class="stageCenter">

                <input
                    id="stage2Input"
                    autocomplete="off"
                    spellcheck="false"
                >

                <button id="stage2Button">
                    →
                </button>

                <div
                    id="stage2Response"
                    class="message">
                </div>

            </div>

        </div>
        `;

        },

    stage3() {

        return `
        <div class="stage3 fade">

            <div id="terminal">

                <div id="stage3Title">
                    ARCHIVE_03
                </div>

                <div id="stage3Status">
                    Establishing connection...
                </div>

                <div id="progressBar">

                    <div id="progressFill"></div>

                </div>

                <div id="transmission"></div>

                <div class="stageCenter">

                    <input
                        id="stage3Input"
                        autocomplete="off"
                        spellcheck="false"
                    >

                    <button id="stage3Button">→</button>

                    <div id="stage3Response" class="message"></div>

                </div>

            </div>

        </div>
        `;

       },

    stage3() {

        return `
        <div class="stage3 fade">

            <div id="terminal">

                <div id="stage3Title">
                    ARCHIVE_03
                </div>

                <div id="stage3Status">
                    Establishing connection...
                </div>

                <div id="progressBar">
                    <div id="progressFill"></div>
                </div>

                <div id="transmission"></div>

                <div class="stageCenter">

                    <input
                        id="stage3Input"
                        autocomplete="off"
                        spellcheck="false"
                        disabled
                    >

                    <button
                        id="stage3Button"
                        disabled
                    >
                        →
                    </button>

                    <div
                        id="stage3Response"
                        class="message">
                    </div>

                </div>

            </div>

        </div>
        `;

},
stage4(){

    return `

    <div class="terminal fade">

        <h1>ARCHIVE_04</h1>

        <p>
            Six archived recordings remain.
        </p>

        <p id="verifiedText">
            Verified Archives:
            <span id="verifiedCount">0</span>/6
        </p>

        <div class="videoList">

            <a class="videoLink"
               target="_blank"
               href="https://youtu.be/qRNdIrREA0k">
               Archive 01
            </a>

            <a class="videoLink"
               target="_blank"
               href="https://youtu.be/P0tNp5omDaA">
               Archive 02
            </a>

            <a class="videoLink"
               target="_blank"
               href="https://youtu.be/AZgnZSmbYn0?t=538">
               Archive 03
            </a>

            <a class="videoLink"
               target="_blank"
               href="https://youtu.be/SNvDUO42Hys">
               Archive 04
            </a>

            <a class="videoLink"
               target="_blank"
               href="https://youtu.be/SNvDUO42Hys">
               Archive 05
            </a>

            <a class="videoLink"
               target="_blank"
               href="https://youtu.be/9MgctssX5vY">
               Archive 06
            </a>

        </div>

        <input
            id="stage4Input"
            disabled
            placeholder="Verify every archive first."
        >

        <button
            id="stage4Button"
            disabled
        >
            →
        </button>

        <div
            id="stage4Response"
            class="message">
        </div>

        <div id="clueBox">
            Click here for clue
        </div>

    </div>

    `;

},
};