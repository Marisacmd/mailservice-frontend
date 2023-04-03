import LeftSidePanel from "./LeftSidePanel/LeftSidePanel";
import MailsTable from "./MailsTable/MailsTable";

const MainPanel = () => {
  return (
    <div>
      <LeftSidePanel />
      <MailsTable />
    </div>
  );
};

export default MainPanel;
