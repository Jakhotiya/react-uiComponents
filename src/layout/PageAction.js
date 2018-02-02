import React from 'react';


class PageAction extends React.Component
{
  render(){
    return (
      <div className="page-main-actions">
        <div className="page-actions">
          <div title="Add Product" className="actions-split">
            <button onClick={this.props.handleClick} id="add_new_product-button" title={this.props.label} className="action-default primary add">
              <span>{this.props.label}</span>
            </button>
          </div>
        </div>
      </div>
      );
  }
}

export default PageAction;