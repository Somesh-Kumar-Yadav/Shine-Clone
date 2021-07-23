import ShowNavBar from "./ShowNavBar"
import ShowJobsPage from "./ShowJobsPage"


export default function ShowJob({jobList}){

 return <>
       <ShowNavBar jobList={jobList} />
       <ShowJobsPage />
 
 
 
 </>




}