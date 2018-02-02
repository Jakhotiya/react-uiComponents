import React from 'react';


class PageAction extends React.Component
{
  render(){
    return (
      <div className="page-main-actions">
        <div className="page-actions">
          <div title={this.props.label} className="page-actions-buttons">
            <button onClick={this.props.handleClick} title={this.props.label} className="action-default primary add">
              <span>{this.props.label}</span>
            </button>
          </div>
        </div>
      </div>
      );
  }
}

export default PageAction;