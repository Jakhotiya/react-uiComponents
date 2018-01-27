import React from "react";
import PropTypes from 'prop-types';


import { PageSizes, viewArray} from './data-structures';

//magento area dataGridActions
import Bookmarks from './Components/listing/Bookmarks';
import ColumnsControls from './Components/listing/ColumnsControls';

//magento area dataGridFilters
import Filters from './Components/listing/Filters';

//magento area bottom
import Paging from './Components/listing/Paging';
import MassAction from './Components/listing/MassAction';

class Toolbar extends React.Component {

  render() {
    return (
      <div className="admin__data-grid-header">
        <div className="admin__data-grid-header-row">
          <div className="admin__data-grid-actions-wrap">
            <Bookmarks viewsArray={viewArray} customView={false}/>
            <ColumnsControls columns={this.props.columns}/>
          </div>

          <Filters visibleCols={this.props.visibleCols}/>
        </div>
        <div className="admin__data-grid-header-row row row-gutter">
          <div className="col-xs-2">
            <MassAction/>
          </div>
          <div className='col-xs-10'>
            <div className="row" >
              <div className="col-xs-3">
                {this.props.totalRecords} records found
              </div>
              <div className="col-xs-9" >
                <Paging options={PageSizes} totalRecords={this.props.totalRecords}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Toolbar.propTypes={
  sticky:PropTypes.string.isRequired,
  totalRecords:PropTypes.number.isRequired,
  columns:PropTypes.array.isRequired,
  visibleCols:PropTypes.array
}

export default Toolbar;
