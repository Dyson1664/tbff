import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import { japanData } from "@/data/countries/japan";

const TBFFJapanItinerary = () => {
  // CSS filter to shift teal (#0FC2BF) to olive green (#506345)
  // Using filter combination to approximate the target color
  const tbffLogoStyle = {
    filter: 'brightness(0) saturate(100%) invert(35%) sepia(15%) saturate(600%) hue-rotate(70deg) brightness(95%) contrast(90%)'
  };

  return (
    <div className="tbff-theme">
      <style>{`
        .tbff-theme .bg-white {
          background-color: #fbddda !important;
        }
        .tbff-theme .md\\:bg-white {
          background-color: #fbddda !important;
        }
      `}</style>
      <ItineraryTemplate data={japanData} logoStyle={tbffLogoStyle} />
    </div>
  );
};

export default TBFFJapanItinerary;
