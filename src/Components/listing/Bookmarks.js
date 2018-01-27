import React from "react";
import PropTypes from 'prop-types'

//@TODO add keyboard binds for input element

/**@Question: I don't understand the need for isEditable flag on a view.
 * isEditable makes sense only is two users are sharing views and only 
 * owner should be allowed to edit a view.
 */

class View extends React.Component {

  state={
    editing:false
  }

  updateAndSave = ()=>{
    console.log(`saving ${this.props.view.label} view`);
  }

  removeView = ()=>{
    console.log(`delete ${this.props.view.label} view`);
  }

  editView = ()=>{
    this.setState({editing:true});
  }

  applyView = ()=>{
    console.log(`make ${this.props.view.label} view the active view`);
    this.props.closeCollapsible();
  }


  outerClick = e => {
    if (this.node && !this.node.contains(e.target)) {
      this.endEdit();
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.outerClick);
  }

  componentWillUnMount() {
    document.removeEventListener('click', this.outerClick);
  }

  ref = ele => {
    this.node = ele;
  }

  endEdit = ()=>{
    this.setState({ editing: false });
  }

  render(){
    const editing = this.state.editing ? '_edit' : '';
    const {view} = this.props;
    return (
      <li ref={this.ref} className={editing}>
        {view.editable && (<div className="action-dropdown-menu-item-edit" >
          <input
            className="admin__control-text"
            type="text" />
          <button className="action-submit" type="button" title='Save all changes' onClick={e =>this.updateAndSave}>
            <span>Submit</span>
          </button>
          <div className="action-dropdown-menu-item-actions">
            <button className="action-delete" type="button" title='Delete bookmark' onClick={e =>this.removeView}>
              <span>Delete</span>
            </button>
          </div>
        </div>)}

        <div className="action-dropdown-menu-item">
          <a href="#" className="action-dropdown-menu-link" onClick={this.applyView}>{view.label}</a>

          {view.editable && (<div className="action-dropdown-menu-item-actions" >
            <button className="action-edit" type="button" title='Edit bookmark' onClick={e=>this.editView}>
              <span>Edit</span>
            </button>
          </div>)}
        </div>
      </li>
    );
  }
}

View.propTypes ={
  view:PropTypes.object.isRequired,
  closeCollapsible:PropTypes.func.isRequired
} 

//@TODO ADD KEYBOARD BINDING SUPPORT SAME LIKE M2


//@TODO fetch active view from store rather than hardcoding it in state

class Bookmarks extends React.Component {

  state = {
    open: false,
    activeView: { label: 'Default view' },
    customVisible:false
  }


  applyCustom = () => {
    this.setState({ customVisible: false });
  }


  toggleCollapsible = (e) => {
    this.setState({ open: !this.state.open });
  }

  closeCollapsible = e=>{
    this.setState({ open: false });
  }

  showCustom = (e) => {
    e.preventDefault();
    this.setState({ customVisible: true });
  }

  outerClick = e => {
    if (this.node && !this.node.contains(e.target)) {
      this.setState({ open: false });
    }
    if (this.newViewNode && !this.newViewNode.contains(e.target)){
      this.setState({ customVisible: false });
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

  newViewRef = ele=>{
    this.newViewNode = ele;
  }


  render() {
    const { open} = this.state;
    const active = open ? '_active' : '';
    const customClass = this.state.customVisible ? '_edit' : 'action-dropdown-menu-action action-dropdown-menu-item-last';
    return (
      <div ref={this.ref} className={"admin__action-dropdown-wrap admin__data-grid-action-bookmarks " + active}>
        <button className="admin__action-dropdown" type="button" onClick={this.toggleCollapsible}>
          <span className="admin__action-dropdown-text">{this.state.activeView.label}</span>
        </button>

        <ul className="admin__action-dropdown-menu">
          {this.props.viewsArray.map(view => (<View key={view.index} view={view} closeCollapsible={this.closeCollapsible}/>) )}


          <li className={customClass} ref={this.newViewRef}>
            <a href="#" style={{ 'display': this.state.customVisible ? 'none' : 'block'}} onClick={this.showCustom}>Save View As...</a>
            <div className="action-dropdown-menu-item-edit" style={{ 'display': this.state.customVisible ? 'block' : 'none' }}>
              <input className="admin__control-text" type="text"
                value={this.state.custom}
              />
              <div className="action-dropdown-menu-item-actions">
                <button className="action-submit" type="button" onClick={this.applyCustom} title='Save all changes'>
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </li >

        </ul>
      </div >
    );
  }
}

/**
 * CustomView prop to Bookmarks component becomes true
 * when one or more following conditions are true.
 * 1) User adds or removes columns from grid
 * 2) User applies a filter
 * 3) Sort order for columns change.
 */
Bookmarks.propTypes = {
  viewsArray: PropTypes.array,
  customView:PropTypes.bool
}

export default Bookmarks;