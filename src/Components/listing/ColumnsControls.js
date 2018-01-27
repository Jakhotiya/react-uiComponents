import React from "react";
import PropTypes from 'prop-types';


const ColOption = ({ col, handleChange})=>{
  return (
    <div className="admin__field-option">
      <input className="admin__control-checkbox" type="checkbox"
        id={'col-control'+col.index}
        checked={col.isVisible}
        onChange={(e)=>handleChange(col.index)}
        />
      <label className="admin__field-label"
        title={col.label}
        htmlFor={'col-control' + col.index}
        >{col.label}</label>
    </div>
  );
}

class ColumnsControls extends React.Component
{

  state = {
    open:false
  }

  toggleCollapsible = e=>{
    this.setState({open:!this.state.open});
  }

  hasOverflow= ()=>{
    return true;
  }

  getHeaderMessage = ()=>{
    return 'this is header message';
  }

  reset = (e)=>{

  }

  cancel = ()=>{
    this.setState({open:false});
  }

  //@TODO IMPLEMENT THIS
  toggleColumn =col=>{

  }


  outerClick = e => {
    if (this.node && !this.node.contains(e.target)) {
      this.setState({ open: false });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.outerClick);
  }

  componentWillUnMount() {
    document.removeEventListener('click', this.outerClick);
  }

  //@TODO find out if this.destroyed on component unmount
  ref = ele => {
    this.node = ele;
  }


  render(){
    const active = this.state.open?'_active':'';
    const overflow = this.hasOverflow()?'_overflow':'';
    const headerMsg = this.getHeaderMessage();

    return (
      <div ref={this.ref} className={"admin__action-dropdown-wrap admin__data-grid-action-columns "+active}>
        <button className="admin__action-dropdown" type="button" onClick={this.toggleCollapsible}>
          <span className="admin__action-dropdown-text">Columns</span>
        </button>
        <div className={"admin__action-dropdown-menu admin__data-grid-action-columns-menu " + overflow}>
          <div className="admin__action-dropdown-menu-header">{headerMsg}</div>
          <div className="admin__action-dropdown-menu-content">
            {this.props.columns.map(col => <ColOption key={col.index} handleChange={this.toggleColumn} col={col}/>)}
          </div>
          <div className="admin__action-dropdown-menu-footer">
            <div className="admin__action-dropdown-footer-secondary-actions">
              <button className="action-tertiary" type="button" onClick={this.reset}>Reset</button>
            </div>
            <div className="admin__action-dropdown-footer-main-actions">
              <button className="action-tertiary" type="button" onClick={this.cancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ColumnsControls.propTypes = {
  columns:PropTypes.array.isRequired
}

export default ColumnsControls;