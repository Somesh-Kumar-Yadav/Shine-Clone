import ShowNavBar from "./ShowNavBar"
import ShowJobsPage from "./ShowJobsPage"


export default function ShowJob({setIsAuth,home, jobList,user,profile,showJob,login,isAuth}){

 return <>
       <ShowNavBar isAuth={isAuth} login={login} setIsAuth={setIsAuth} home={home} jobList={jobList} user={user} showJob={showJob} profile={ profile}/>
       <ShowJobsPage jobList={ jobList} />
 </>




}