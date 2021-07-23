import ShowNavBar from "./ShowNavBar"
import ShowJobsPage from "./ShowJobsPage"


export default function ShowJob({jobList,user,profile}){

 return <>
       <ShowNavBar jobList={jobList} user={user} profile={ profile}/>
       <ShowJobsPage />
 
 
 
 </>




}