import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '@jetbrains/ring-ui/components/table/table';
import Link from '@jetbrains/ring-ui/components/link/link';

import Selection from '@jetbrains/ring-ui/components/table/selection';

class TeamsTable extends Component {
  static propTypes = {
    ...Table.propTypes,
    columns: PropTypes.array,
    selection: PropTypes.instanceOf(Selection)
  };

  static columns = [{
    id: 'project',
    title: 'Team',
    getValue(team) {
      return (team.project &&
        <Link href={`projects/${team.project.id}`} target="_blank">{team.project.name}</Link>
      );
    }
  }];

  constructor(props) {
    super(props);
    this.state = {
      selection: new Selection()
    };
  }

  onSelect = selection => this.setState({selection});

  renderTable() {
    const {selection} = this.state;

    return (
      <Table
        caption="Teams"
        columns={TeamsTable.columns}
        selection={selection}
        onSelect={this.onSelect}
        {...this.props}
      />
    );
  }

  render() {
    return this.props.data.length ? this.renderTable() : '';
  }
}

export default TeamsTable;
