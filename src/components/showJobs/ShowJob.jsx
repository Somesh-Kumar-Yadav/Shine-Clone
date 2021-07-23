import ShowNavBar from "./ShowNavBar"
import ShowJobsPage from "./ShowJobsPage"


export default function ShowJob({home, jobList,user,profile,showJob}){

 return <>
       <ShowNavBar home={home} jobList={jobList} user={user} showJob={showJob} profile={ profile}/>
       <ShowJobsPage />
 
 
 
 </>




}