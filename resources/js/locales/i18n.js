import { createI18n } from 'vue-i18n'
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import pt from "./pt.json";
const i18n = createI18n({
    locale: "fr",
    messages: {
        en,
        fr,
        es,
        pt,
    },
});

export default i18n;