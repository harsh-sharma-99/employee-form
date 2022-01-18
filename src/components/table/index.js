import React from "react";
import "./styles.scss";

const rootClassName = "emp-table";

const Table = ({ userData, searchValue }) => {
  const filterData = userData?.filter((e) =>
    e.employee_name.includes(searchValue)
  );
  return (
    <div className={rootClassName}>
      <table>
        <thead>
          <tr>
            <th className={`${rootClassName}__column-width`}>Name</th>
            <th className={`${rootClassName}__column-width`}>Age</th>
            <th className={`${rootClassName}__column-width`}>Salary</th>
            <th className={`${rootClassName}__column-width`}>Image </th>
          </tr>
        </thead>
        <tbody>
          {filterData?.map((emp, idx) => (
            <tr key={idx}>
              <td className={`${rootClassName}__column-result`}>
                {emp.employee_name}
              </td>
              <td className={`${rootClassName}__column-result`}>
                {emp.employee_age}
              </td>
              <td className={`${rootClassName}__column-result`}>
                {emp.employee_salary}
              </td>
              <td className={`${rootClassName}__column-result`}>
                {emp.profile_image?.name ?? "No Image"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
