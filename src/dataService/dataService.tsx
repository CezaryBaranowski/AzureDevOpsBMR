import * as React from "react";
import { Component } from "react";
import { BuildRestClient, Build } from "azure-devops-extension-api/Build";
import { getClient } from "azure-devops-extension-api";

export async function getBuilds(
  projectName: string,
  rowLimiter: number = 25,
  repositoryId?: string,
  branchName?: string
) {
  let builds = await getClient(BuildRestClient).getBuilds(
    projectName,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    rowLimiter,
    undefined,
    undefined,
    undefined,
    undefined,
    branchName,
    undefined,
    repositoryId,
    undefined
  );
  return builds;
}
