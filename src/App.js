import { useState } from "react";
import "./global.scss";
import Form from "./components/form";
import InputWithLabel from "./components/input";
import Table from "./components/table/index";

import { useLocalStorage } from "./utils/hooks/useLocalStorage";

const rootClassName = "emp-root-layout";

function App() {
  const [userData, setUserData] = useLocalStorage("user_data", []);
  const [searchValue, setSearchValue] = useState("");

  // const filterData = userData?.filter((e) =>
  //   e.employee_name.includes(searchValue)
  // );

  return (
    <div className={rootClassName}>
      <h1 className={`${rootClassName}__heading`}>Employee Form</h1>
      <Form userData={userData} setUserData={setUserData} />
      <div className={`${rootClassName}__results`}>
        <div className={`${rootClassName}__search-wrapper`}>
          <InputWithLabel
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label={"Search Employees"}
          />
        </div>
        <Table userData={userData} searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
