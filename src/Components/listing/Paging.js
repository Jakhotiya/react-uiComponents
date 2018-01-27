import React, { Fragment } from "react";
import PropTypes from 'prop-types';

//@TODO add close on outerclick

const Sizes = props => {

  const isActive = props.open ? '_active' : '';

  return (
    <Fragment>
      <div className="selectmenu-value">
        <input type="text" value={props.value} readOnly id='pageSize' onClick={props.toggleCollapsible} />
      </div>
      <button className={"selectmenu-toggle " + isActive} type="button" onClick={props.toggleCollapsible}>
        <span>Select</span>
      </button>
      <div className={"selectmenu-items " + isActive} >
        <ul>
          {props.options.map(size => {
            return (
              <li key={size.label}>
                <div className="selectmenu-item">
                  <button className="selectmenu-item-action" type="button" onClick={e => props.setSize(size.value)} >
                    {size.label}
                  </button>
                </div>
              </li>)
          })}
        </ul>
      </div>
    </Fragment>
  );
}


Sizes.propTypes = {
  options: PropTypes.array.isRequired
}



class Paging extends React.Component {

  state = {
    currentPage: 1,
    totalPages: 0,
    pageSize: 20,
    open: false
  }

  toggleCollapsible = (e) => {
    this.setState({ open: !this.state.open });
  }

  componentWillMount() {
    const totalPages = Math.ceil(this.props.totalRecords / this.state.pageSize);
    this.setState({ totalPages });
  }

  handleClick = e => {

  }

  setSize = (value) => {
    this.setState({ pageSize: value, open: false });
  }

  prev = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  }

  next = () => {
    if (this.state.currentPage < this.state.totalPages) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
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

  render() {
    return (
      <div className="admin__data-grid-pager-wrap">

        <div ref={this.ref} className="selectmenu" >
          <Sizes setSize={this.setSize}
            options={this.props.options}
            open={this.state.open}
            toggleCollapsible={this.toggleCollapsible}
            value={this.state.pageSize} />
        </div>

        <label className="admin__control-support-text" htmlFor='pageSize'> per page</label>
        <div className="admin__data-grid-pager">
          <button className="action-previous" type="button"
            onClick={e => this.prev()} disabled={this.state.currentPage === 1} />

          <input className="admin__control-text" type="number" id="current-page-input" defaultValue={this.state.currentPage} />
          <label className="admin__control-support-text" htmlFor='current-page-input'>
            of {this.state.totalPages}
          </label>
          <button className="action-next" type="button" onClick={e => this.prev()} disabled={this.state.currentPage === this.state.totalPages} />
        </div>
      </div>
    );
  }


}

Paging.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired
}



export default Paging;