import { useTranslation } from "react-i18next"

const LoanView = () => {
  const {t} = useTranslation()
  return (
    <div>
     {t("common.hello")}
    </div>
  )
}

export default LoanView
