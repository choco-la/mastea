(function() {
    "use strict";
    /* Register toot posting eventlistener. */
    const INIT_STATE = JSON.parse(document.getElementById("initial-state").textContent);
	const MY_NUM_ID = INIT_STATE.meta["me"];
	const BEARER_TOKEN = INIT_STATE.meta["access_token"];

    const MSTDN_HOST = location.origin + "/";
    const TOOT_URL = MSTDN_HOST + "api/v1/statuses";


    const exttoottext = document.getElementsByClassName("extoottext")[0];
    const exttootbtn = document.getElementsByClassName("extootbtn")[0];

    function send_toot() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", TOOT_URL);
            xhr.setRequestHeader("Authorization", "Bearer " + BEARER_TOKEN);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhr.timeout = "3000";
            xhr.responseType = "json";


            const data = {
                status: exttoottext.value,
                in_reply_to_id: null,
                media_ids: [],
                sensitive: false,
                spoiler_text: "",
                visibility: "public",
            };

            xhr.onloadend = () => {
                exttootbtn.disabled = "";
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({
                        resp: xhr.response
                    });
                }
                else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };

            xhr.onerror = () => {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };

            xhr.send(JSON.stringify(data));
        });
    };

    function async_post() {
        exttootbtn.disabled = "true";
        send_toot()
        .then((resp) => {
            console.log(resp);
            exttoottext.value = "";
        })
        .catch((err) => {
            console.error("ERROR: %s %s", err.status, err.statusText);
        })
    };

    exttootbtn.addEventListener("click", async_post, false);
})();
