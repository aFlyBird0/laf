import React from "react";
import { useTranslation } from "react-i18next";

import { site_url } from "@/constants";

import useSiteSettingStore from "../siteSetting";

import styles from "./status.module.scss";

export default function Status() {
  const { t } = useTranslation();
  const { siteSettings } = useSiteSettingStore();
  return (
    <a
      target="_blank"
      href={siteSettings.site_url?.metadata.laf_status || site_url.laf_status}
      className={"mr-6 flex items-center whitespace-nowrap "}
      rel="noreferrer"
    >
      <span className="mr-2 text-base">{t("ServerStatus")}</span>
      {Array.from({ length: 8 }).map((item, index) => {
        return <div key={index} className={styles["breathing-gradient"]}></div>;
      })}
    </a>
  );
}
