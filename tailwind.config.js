/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        10: "0.625rem",
        5: "0.313rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0ABA9A",
        secondary: "#F7F7F7",
        ternary: "#636363",
        label: "#E3E3E3",
      },
      width: {
        homepageCardDekstop: "17.313rem",
        homepageCardMobile: "22.5rem",
        searchFormDekstop: "22.5rem",
        searchFormMobile: "22.5rem",
        headerDetailCardDekstop: "19.375rem",
        headerDetailCardMobile: "21.688",
        headerDetailCardOpeningDekstop: "34.75rem",
        headerDetailCardOpeningMobile: "21.688",
        detailCardContentDekstop: "55.375rem",
        detailCardContentMobile: "21.688rem",
        modalDetailDekstop: "38.313rem",
        modalDetailMobile: "21.688rem",
        modalPlayAudioDekstop: "38.313rem",
        modalPlayAudioMobile: "21.688rem",
        qiraListCardDekstop: "17.125rem",
        qiraListCardMobile: "18.875rem",
        label: "2.224rem",
        labelQira: "1.688rem",
      },
      maxHeight: {
        modalDetailDekstop: "23.375rem",
        modalDetailMobile: "21rem",
        modalPlayAudioMobile: "26.563rem",
        qiraListParent: "15.625rem",
      },
      maxWidth: {
        button: "4rem",
      },
      height: {
        homepageCardDekstop: "6.25rem",
        homepageCardMobile: "6.25rem",
        searchFormDekstop: "3.25rem",
        searchFormMobile: "3.25rem",
        headerDetailCardDekstop: "9.438rem",
        headerDetailCardOpeningDekstop: "9.438rem",
        headerDetailCardOpeningMobile: "9.438rem",
        detailCardContentDekstop: "9.875rem",
        detailCardContentMobile: "9.875rem",
        modalDetailDekstop: "23.375rem",
        modalDetailMobile: "21rem",
        modalPlayAudioDekstop: "26.563rem",
        modalPlayAudioMobile: "26.563rem",
        qiraListCardDekstop: "3.25rem",
        qiraListCardMobile: "3.25rem",
        label: "2.224rem",
        labelQira: "1.688rem",
      },
      padding: {
        cardX: "1.125rem",
        cardY: "1.563rem",
      },
      boxShadow: {
        card: "box-shadow: 0px 4px 15px 0px;",
      },
    },
  },
  plugins: [],
};
