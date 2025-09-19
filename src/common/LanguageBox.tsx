import { US, TH, MM} from "country-flag-icons/react/3x2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import i18n from "@/configs/locale";
import { useEffect, useState } from "react";

const LanguageBox = () => {
     const [lang, setLang] = useState(i18n.language || "en");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
    setLang(value); 
  };
  return (
    <div>
      <Select value={lang}
      onValueChange={handleChange}>
        <SelectTrigger className="w-[180px] cursor-pointer">
          <SelectValue placeholder="Choose Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            <div className="flex flex-row items-center gap-2">
              <US title="United States" className="w-5 h-5" />
              <span>United States</span>
            </div>
          </SelectItem>

          <SelectItem value="th">
            <div className="flex flex-row items-center gap-2">
              <TH title="Thailand" className="w-5 h-5" />
              <span>Thailand</span>
            </div>
          </SelectItem>

           <SelectItem value="mm">
            <div className="flex flex-row items-center gap-2">
              <MM title="Myanmar" className="w-5 h-5" />
              <span>Myanmar</span>
            </div>
          </SelectItem>

        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageBox;
