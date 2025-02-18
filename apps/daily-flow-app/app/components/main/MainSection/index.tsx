import taskList from "@/app/data/taskList.json";
import MainTitle from "../MainTitle";
import {
  MainSectionAddButtonStyle,
  MainSectionAddListStyle,
  MainSectionListStyle,
  MainSectionStyle,
} from "./MainSection.css";
import { MdAddCircleOutline } from "react-icons/md";
import TaskList from "../TaskList";

interface MainSectionProps {
  selectedTask: string;
}

const MainSection = ({ selectedTask }: MainSectionProps) => {
  const selectedTaskData = taskList.find((item) => item.name === selectedTask);

  return (
    <section className={MainSectionStyle}>
      {selectedTaskData && <MainTitle data={selectedTaskData} />}
      <div className={MainSectionListStyle}>
        {selectedTaskData?.tasks?.map((task) => (
          <TaskList data={task} key={task.label} />
        ))}

        <div className={MainSectionAddListStyle}>
          <label className={MainSectionAddButtonStyle}>
            <MdAddCircleOutline />
          </label>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
