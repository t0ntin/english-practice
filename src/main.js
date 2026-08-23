// import { linkToDoDoes2 } from "./sections/do-does-2.js";
// import { linkToDoDoes } from "./sections/do-does.js";
import { linkToPractice } from "./sections/practice.js";
import { linkToCommonErrors, renderErrorsPage, renderTopic } from "./sections/common-errors.js";
import { loadBestVoice } from "./components/reusableUI.js";
import { suggestions } from "./components/data/grammar-data.js";

// linkToDoDoes();
// linkToDoDoes2();
linkToPractice();
linkToCommonErrors();
renderErrorsPage();
renderTopic(suggestions);
loadBestVoice();