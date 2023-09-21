import { NavLink } from "react-router-dom";
import pageImg from "../assets/img/img1.png";

const TableRow = (props) => {

  return (
    <tr>
      <th scope="row">{props.index +1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>{props.name} {props.lastname}</NavLink>
        </td>
      <td>{props.email}</td>
    </tr>
  );
};

export const Friends = (props) => {
  let users = props.function();

  let userCount = Object.keys(users).length;
  let userRow = [];

  for (let i = 0; i < userCount; i++) {
    userRow.push(<TableRow index={i} key={i} name={users[i].name} lastname={users[i].lastname} id={users[i].id} email={users[i].email}/>)
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="text-center">Друзья:</h1>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя и Фамилия</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {userRow}
          </tbody>
        </table>
      </div>
      <div className="col-12 mt-5">
        <img src={pageImg} alt="" width="100%" />
      </div>
    </div>
  );
};
