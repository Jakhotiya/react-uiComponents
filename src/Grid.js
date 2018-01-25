import React from 'react';
import Toolbar from './Toolbar';


const Col= props=>{
  return (<td>{props.value}</td>);
}

const Row = props=>{
  const rowClass = props.index % 2 ? "data-row _odd-row" : "data-row";
  return (
    <tr className={rowClass} >
      {props.visibleCols.map((d,i)=><Col key={i} value={props.row[d]}/>)}
    </tr>
  );
}


const TableBody = props=>{
  if(props.rows.length>0){
    return (
      <tbody>
        {props.rows.map((row, index) => <Row key={index} index={index} row={row} visibleCols={props.visibleCols}/>)}
      </tbody>
   );
  }else{
    return (
      <tbody>
        <tr className="data-grid-tr-no-data">
          <td colspan={props.visibleCols.length} >
           We couldn\'t find any records.
          </td>
      </tr>
      </tbody>
    );
  }
  
}

const ColHead = props=>{
  return (
    <th className='data-grid-th'>{props.name}</th>
  );
}

class Listing extends React.Component
{

  render(){
   
    return (
      <div className="admin__data-grid-wrap" data-role="grid-wrapper">
        <table className="data-grid" data-role="grid">
          <thead>
            <tr>
              {this.props.visibleCols.map((d, i) => <ColHead key={i} name={d} />)}
            </tr>
          </thead>
          
          <TableBody visibleCols={this.props.visibleCols} rows={this.props.rows}/>
            
          
        </table>
      </div>
    );
  }
}


const Grid = props=>{
  return (
    <div>
      <Toolbar sticky='true' totalRecords={5}/>
      <Listing {...props}/>
    </div>
  );
}

export default Grid;