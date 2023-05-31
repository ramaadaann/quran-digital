/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0ABA9A",
        secondary: "#F7F7F7",
        ternary: "#636363",
      },
      width: {
        homepageCardDekstop: "17.313rem",
        homepageCardMobile: "22.5rem",
        searchFormDekstop: "22.5rem",
        searchFormMobile: "22.5rem",
        headerDetailCardDekstop: "19.375rem",
        headerDetailCardOpeningDekstop: "34.75rem",
        detailCardContentDekstop: "55.375rem",
        detailCardContentMobile: "21.688rem",
        modalDetailDekstop: "38.313rem",
        modalDetailMobile: "21.688rem",
        modalPlayAudioDekstop: "38.313rem",
        modalPlayAudioMobile: "21.688rem",
      },
      height: {
        homepageCardDekstop: "6.25rem",
        homepageCardMobile: "6.25rem",
        searchFormDekstop: "3.25rem",
        searchFormMobile: "3.25rem",
        headerDetailCardDekstop: "9.438rem",
        headerDetailCardOpeningDekstop: "9.438rem",
        detailCardContentDekstop: "9.875rem",
        detailCardContentMobile: "9.875rem",
        modalDetailDekstop: "23.375rem",
        modalDetailMobile: "21rem",
        modalPlayAudioDekstop: "26.563rem",
        modalPlayAudioDekstop: "26.563rem",
      },
    },
  },
  plugins: [],
};
