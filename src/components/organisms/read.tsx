"use client";
import { useState } from "react";
import {
  DetailCardOpening,
  DetailContentCard,
  DetailHeaderCard,
  DetailModal,
  PlayModal,
} from "../moleculs";
import { Data } from "@/constans";

const ReadPagecomponent = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [showPlayList, setShowPlayList] = useState(false);
  return (
    <div className="w-full h-full bg-secondary px-4 pt-28 flex flex-col gap-4">
      {showPlayList && (
        <PlayModal handleClick={(): void => setShowPlayList(!showPlayList)} />
      )}
      {showDetail && (
        <DetailModal
          handleClick={(): void => setShowDetail(!showDetail)}
          letterName="Surat Al-Fatihah"
        />
      )}
      <section className="w-full h-full px-2 box-border flex flex-col gap-4">
        <DetailHeaderCard
          showDetailModal={(): void => setShowDetail(!showDetail)}
          showPlayModal={(): void => setShowPlayList(!showPlayList)}
        />
        <DetailCardOpening />
      </section>
      <section className="w-full h-full flex flex-col gap-3 px-2 box-border">
        {Data?.ayat?.map((ayat, i) => (
          <DetailContentCard
            key={i}
            ayatNumber={ayat.nomorAyat}
            letterNumber={1}
            arabicText={ayat.teksArab}
            latinText={ayat.teksLatin}
            translation={ayat.teksIndonesia}
          />
        ))}
      </section>
    </div>
  );
};

export default ReadPagecomponent;
