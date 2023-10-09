import { useTranslation } from "next-i18next";
import React from "react";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer>
      <div className="pt-10">
        <div className="grid place-content-center card h-16">
          <p>{t("footer.text")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
