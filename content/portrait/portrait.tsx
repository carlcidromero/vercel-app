import Image from "next/image";
import portrait from "../../public/portrait.jpg";
import styles from "./portrait.module.scss";

const Portrait = () => {
  return (
    <Image
      alt="Carl 'Cid' Romero wearing all white clothing, sporting black-rimmed glasses and cheesing in front of a wall of guitars with his hair braided"
      className="rounded"
      height={200}
      quality={100}
      src={portrait}
      width={200}
    />
  );
};

export default Portrait;
