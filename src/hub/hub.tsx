import "./hub.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as SDK from "azure-devops-extension-sdk";
import { getClient } from "azure-devops-extension-api";
import {
  CoreRestClient,
  ProjectVisibility,
  TeamProjectReference,
} from "azure-devops-extension-api/Core";
import { BuildRestClient, Build } from "azure-devops-extension-api/Build";
import {
  Table,
  ITableColumn,
  renderSimpleCell,
  renderSimpleCellValue,
} from "azure-devops-ui/Table";
import { ArrayItemProvider } from "azure-devops-ui/Utilities/Provider";
import { Dialog } from "azure-devops-ui/Dialog";
import { Header } from "azure-devops-ui/Header";
import { Image } from "azure-devops-ui/Image";
import { Page } from "azure-devops-ui/Page";
import { Panel } from "azure-devops-ui/Panel";
import { ZeroData, ZeroDataActionType } from "azure-devops-ui/ZeroData";
import BuildStats from "../buildStats/buildStats";

interface IHubState {
  builds?: Build[];
}

class Hub extends React.Component<{}, IHubState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public async componentDidMount() {
    SDK.init();
    this.initializeComponent();
  }

  private async initializeComponent() {
    console.log("alarm");
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>filtry dla buildów</div>
        <BuildStats />
        <div>tabelka dla buildów</div>
      </div>
    );
  }
}

ReactDOM.render(<Hub />, document.getElementById("root"));
