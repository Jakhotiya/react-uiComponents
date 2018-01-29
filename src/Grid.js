import React from "react";
import PropTypes from "prop-types";

import Toolbar from "./Toolbar";
import Action from './Components/listing/cells/Action';

const Cell = props => {
  if(typeof props.value==='object'){
    return (<td><Action actions={props.value}/></td>);
  }
  return <td>{props.value}</td>;
};

//@TODO optimise render. visibleCols.map is called for every row. 

const Row = props => {
  const rowClass = props.index % 2 ? "data-row _odd-row" : "data-row";
  return (
    <tr className={rowClass}>
      {props.visibleCols.map((col, i) => <Cell key={col.index} value={props.row[col.index]} />)}
    </tr>
  );
};

const TableBody = props => {
  if (props.rows.length > 0) {
    return (
      <tbody>
        {props.rows.map((row, index) => (
          <Row
            key={index}
            index={index}
            row={row}
            visibleCols={props.visibleCols}
          />
        ))}
      </tbody>
    );
  } else {
    return (
      <tbody>
        <tr className="data-grid-tr-no-data">
          <td colspan={props.visibleCols.length}>
            We couldn't find any records.
          </td>
        </tr>
      </tbody>
    );
  }
};


class Listing extends React.Component {
  render() {
    return (
      <div className="admin__data-grid-wrap" data-role="grid-wrapper">
        <table className="data-grid" data-role="grid">
          <thead>
            <tr>
              {this.props.visibleCols.map((col) => (
                <th key={col.index} className="data-grid-th">{col.label}</th>
              ))}
            </tr>
          </thead>

          <TableBody
            visibleCols={this.props.visibleCols}
            rows={this.props.rows}
          />
        </table>
      </div>
    );
  }
}

Listing.propTypes = {
  rows: PropTypes.array.isRequired,
  visibleCols: PropTypes.array.isRequired
};



const Grid = props => {
  const rows = [];

  for (let key in props.items) {
    rows.push(props.items[key]);
  }

  const visibleCols = props.columns.filter(col=>col.isVisible);

 

  return (
    <div>
      <Toolbar visibleCols={visibleCols} columns={props.columns} sticky="true" totalRecords={props.totalRecords} />
      <Listing rows={rows} visibleCols={visibleCols} />
    </div>
  );
};

Grid.propTypes = {
  columns: PropTypes.array.isRequired,
  totalRecords: PropTypes.number.isRequired,
  items: PropTypes.object.isRequired
};

export default Grid;
