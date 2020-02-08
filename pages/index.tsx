import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import JobList from "../components/JobsList";

const Index = () => {
  const JOBS_QUERY = gql`
    query {
      jobs {
        id
        title
        applyUrl
        company {
          name
        }
      }
    }
  `;

  const jobs = useQuery(JOBS_QUERY);

  return (
    <div>
      <h1>GraphQL Job Board</h1>
      <p>A list of open GraphQL jobs.</p>
      <JobList jobs={jobs?.data?.jobs || []} />
    </div>
  );
};
export default Index;
