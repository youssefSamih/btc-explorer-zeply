// ################################################################################
// ~~~~~~ getBrowserLang
// ################################################################################

export const getBrowserLang = () => {
  const browserLang =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    (navigator as any).userLanguage ||
    (navigator as any).browserLanguage;

  return browserLang;
};
