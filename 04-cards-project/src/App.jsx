import React from 'react'
import Card from './components/Card'

 
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    name: "Microsoft",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    name: "Meta",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    name: "Apple",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    name: "Adobe",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    name: "IBM",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    name: "Oracle",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    name: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$44/hour",
    location: "Mumbai, India"
  }
];
  return (
  <div className="parent">
    {jobOpenings.map(function(elem, idx) {
      return (
        <div key={idx}>
          <Card
            company={elem.name}
            datePosted={elem.datePosted}
            post={elem.post}
            pay={elem.pay}
            tag1={elem.tag1}
            tag2={elem.tag2}
            loc={elem.location}
            brandLogo={elem.brandLogo}
          />
        </div>
      )
    })}
  </div>
)
}

export default App
 

