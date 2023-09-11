import "./bootstrap";
import "../css/app.css";
import { createApp } from "vue";
import App from "./App.vue";
import Error from "./components/Error.vue";
import Spin from "./components/utils/Spin.vue";
import NoContent from "./components/utils/NoContent.vue";
import router from "./router";
import i18n from "./locales/i18n";
import SelectFilter from "@/components/SelectFilter.vue";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";



const app = createApp(App);

app.use(i18n);
app.use(router);
app.component("SelectFilter", SelectFilter);
app.component("Error", Error);
app.component("Spin", Spin);
app.component("NoContent", NoContent);
app.component("EasyDataTable", Vue3EasyDataTable);
app.mount("#app");

let deferredPrompt;
const addBtn = document.querySelector(".download-app");
addBtn.style.display = "none";
window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = "block";

    addBtn.addEventListener("click", (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = "none";
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the A2HS prompt");
            } else {
                console.log("User dismissed the A2HS prompt");
            }
            deferredPrompt = null;
        });
    });
});

// Detects if device is on iOS
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
const isInStandaloneMode = () =>
    "standalone" in window.navigator && window.navigator.standalone;

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
}
