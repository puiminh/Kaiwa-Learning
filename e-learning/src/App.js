// import RecordView from "./components/RecordView";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import AddCourse from "./pages/Admin/Courses/AddCourse";
import Course from "./pages/Admin/Courses/Course";
import EditCourse from "./pages/Admin/Courses/EditCourse";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AddLesson from "./pages/Admin/Lesson/AddLesson";
import EditLesson from "./pages/Admin/Lesson/EditLesson";
import Lessons from "./pages/Admin/Lesson/Lesson";
import { CourseDetail } from "./pages/Courses/CourseDetail";
import { CourseDetailUser } from "./pages/Courses/CourseDetailUser";
import CreateCoure from "./pages/CreateCourse/CreateCoure";
import { Home } from "./pages/Home/Home";
import { LessonDetail } from "./pages/Lesson/LessonDetail";
import { LessonDetailUser } from "./pages/Lesson/LessonDetailUser";
import { Login } from "./pages/Login/Login";
import MyAssignedCourse from "./pages/Profile/MyAssignedCourse";
import Profile from "./pages/Profile/Profile";
import Upgrade from "./pages/Profile/Upgrade";
import Register from "./pages/Register/Register";
import Test from "./pages/test/Test";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { ProfileTemplate } from "./templates/ProfileTemplate/SideBar/ProfileTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    <Switch>
      <HomeTemplate absoluteheader={true} path="/" exact Component={Home} />
      {/* <HomeTemplate path="/" exact Component={VideoPlayer} /> */}
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
        <ProfileTemplate path="/profile" exact Component={Profile} />
        <ProfileTemplate path="/upgrade" exact Component={Upgrade} />
        <ProfileTemplate path="/my-assigned-courses" exact Component={MyAssignedCourse} />
      <AdminTemplate
        path="/admin/courses/:id/add-new"
        exact
        Component={AddLesson}
      />
      <AdminTemplate
        path="/admin/courses/:id/lessons"
        exact
        Component={Lessons}
      />
      <AdminTemplate
        path="/admin/courses/:courseId/lessons/:lessonId/edit"
        exact
        Component={EditLesson}
      />
      <HomeTemplate path="/course/:id" exact Component={CourseDetailUser} />
      <HomeTemplate path="/course/:courseId/lesson/:lessonId" exact Component={LessonDetailUser} />
      <AdminTemplate path="/admin" exact Component={Dashboard} />
      <ProfileTemplate
        path="/add-new/course"
        exact
        Component={CreateCoure}
      />      
      <AdminTemplate
        path="/admin/courses/add-new"
        exact
        Component={AddCourse}
      />
      <AdminTemplate path="/admin/courses/:id" exact Component={EditCourse} />
      <HomeTemplate
        path="/courses/:courseId/lessons/:lessonId"
        exact
        Component={LessonDetail}
      />
      <AdminTemplate path="/admin/courses" exact Component={Course} />
      <HomeTemplate path="/test" exact Component = {Test} />
    </Switch>
  );
}

export default App;
