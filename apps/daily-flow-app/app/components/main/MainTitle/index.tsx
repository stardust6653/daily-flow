import { MainTitleColorChipStyle, MainTitleStyle } from "./MainTitle.css";

interface MainTitleProps {
  data: {
    name: string;
    color: string;
  };
}

const MainTitle = ({ data }: MainTitleProps) => {
  return (
    <div className={MainTitleStyle}>
      <span
        className={MainTitleColorChipStyle}
        style={{ backgroundColor: data?.color }}
      />
      <h2>{data?.name}</h2>
    </div>
  );
};

export default MainTitle;
