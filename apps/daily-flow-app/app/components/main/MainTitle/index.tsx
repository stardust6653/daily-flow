interface MainTitleProps {
  data: {
    name: string;
    color: string;
  };
}

const MainTitle = ({ data }: MainTitleProps) => {
  return (
    <div>
      <span style={{ backgroundColor: data?.color }} />
      <h2>{data?.name}</h2>
    </div>
  );
};

export default MainTitle;
