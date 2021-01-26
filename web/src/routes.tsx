import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";

function CustonRoute({ isPrivate, ...rest }: any) {
  const { signed } = useContext(AuthContext);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} />;
}

function Routes() {
  return (
    <BrowserRouter>
      <CustonRoute path="/" exact component={Login} />
      <CustonRoute isPrivate path="/study" component={TeacherList} />
      <CustonRoute isPrivate path="/initial" exact component={Landing} />
      <CustonRoute isPrivate path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
