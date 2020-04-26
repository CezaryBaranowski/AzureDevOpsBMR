import * as React from "react";
import { Component } from "react";
import BuildStatsFilter from "../buildStatsFilter/buildStatsFilter";
import BuildStatsTable from "../buildStatsTable/buildStatsTable";

export interface BuildStatsProps {}

export interface BuildStatsState {}

class BuildStats extends React.Component {
  //state = { :  }
  render() {
    return (
      <div>
        <div>build stats here</div>
        <BuildStatsFilter />
        <BuildStatsTable />
      </div>
    );
  }
}

export default BuildStats;
