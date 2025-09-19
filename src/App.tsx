import Wrapper from "./components/Wrapper";
import "@/configs/locale";
import "@/configs/axios";
import { I18nextProvider } from "react-i18next";
import i18n from "@/configs/locale";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Wrapper />
    </I18nextProvider>
  );
};

export default App;
