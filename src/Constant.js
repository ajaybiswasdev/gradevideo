import arrowLeft from "./Assets/Common/arrow-left.png";
import arrowRight from "./Assets/Common/arrow-right.png";
import arrowLeft2 from "./Assets/Tutor/left-arrow-carousel.png";
import arrowRight2 from "./Assets/Tutor/right-arrow-carousel.png";

export const StarSVGViewBox = "0 0 16 15";
export const StarSVGIconPath =
  "M7.90577 0.587492L9.82622 5.13287L14.7428 5.55524C15.0838 5.58469 15.2225 6.01017 14.9637 6.23414L11.2344 9.46512L12.3519 14.2717C12.4294 14.6057 12.0675 14.8684 11.7746 14.6909L7.54927 12.1427L3.32397 14.6909C3.03025 14.8676 2.6691 14.6049 2.7466 14.2717L3.86415 9.46512L0.134072 6.23337C-0.124778 6.00939 0.0131721 5.58392 0.354947 5.55447L5.27155 5.13209L7.192 0.587492C7.3253 0.271292 7.77247 0.271292 7.90577 0.587492Z";

export const CarouselLeftButton = `
    <div style='width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:white;box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);'>
        <img src='${arrowLeft}' alt='nav-arrow' />
    </div>
`;
export const CarouselRightButton = `
    <div style='width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:white;box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);'>
        <img src='${arrowRight}' alt='nav-arrow' />
    </div>
`;

export const CarouselLeftButton2 = `
    <div style='width:50px;height:50px;display:flex;align-items:center;justify-content:center;background:white;border:2px solid #23A4EF'>
        <img src='${arrowLeft2}' alt='nav-arrow' />
    </div>
`;
export const CarouselRightButton2 = `
    <div style='width:50px;height:50px;display:flex;align-items:center;justify-content:center;background:white;border:2px solid #23A4EF'>
        <img src='${arrowRight2}' alt='nav-arrow' />
    </div>
`;

export const GetDashboardUrl = (user, token) => {
  return (
    (user.role === "student"
      ? process.env.REACT_APP_STUDENT_DASHBOARD_URL 
      : process.env.REACT_APP_TUTOR_DASHBOARD_URL) + '?token=' + token
  );
};
