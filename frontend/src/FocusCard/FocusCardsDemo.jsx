
import { FocusCards } from "./FocusCards";
import pc1 from '../assets/Image/images/device/pc1.png';
import pc2 from '../assets/Image/images/device/pc2.png';
import pc3 from '../assets/Image/images/device/pc3.png';
import pc4 from '../assets/Image/images/device/pc4.png';
import pc5 from '../assets/Image/images/device/pc5.png';
import pc6 from '../assets/Image/images/device/pc6.png'

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: pc1,
    },
    {
      title: "Valley of life",
      src:pc2 ,
    },
    {
      title: "Sala behta hi jayega",
      src:pc3 ,
    },
    {
      title: "Camping is for pros",
      src: pc4 ,
    },
    {
      title: "The road not taken",
      src: pc5 ,
    },
    {
      title: "The First Rule",
      src: pc6 ,
    },
  ];

  return <FocusCards cards={cards} />;
}
