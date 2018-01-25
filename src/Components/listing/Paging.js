import React from "react";
import PropTypes from 'prop-types';


const Sizes = props=> {

  const isActive = props.open ? '_active' : '';

  return (
    <div className="selectmenu" >
      <div className="selectmenu-value">
        <input type="text" value={props.value} id='pageSize' autoselect />
      </div>
      <button className={"selectmenu-toggle " + isActive} type="button" onClick={props.toggleCollapsible}>
        <span>Select</span>
      </button>
      <div className={"selectmenu-items " + isActive} outerClick="discardAll.bind($data)">
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
    </div >

  );
}


Sizes.propTypes = {
  options: PropTypes.array.isRequired
}



class Paging extends React.Component
{

  state={
    currentPage:1,
    totalPages:0,
    pageSize:20,
    collapsible:false
  }

  toggleCollapsible = (e) => {
    this.setState({ collapsible: !this.state.collapsible });
  }

  componentWillMount(){
    const totalPages = Math.ceil(this.props.totalRecords /this.state.pageSize);
    this.setState({totalPages});
  }

  handleClick=e=>{

  }

  setSize = (value) => {
    this.setState({ pageSize: value });
  }

  prev = ()=>{
    if(this.state.currentPage>1){
      this.setState({currentPage:this.state.currentPage-1});
    }
  }

  next  = ()=>{
    if (this.state.currentPage < this.state.totalPages) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }

  render(){
    return (
      <div className="admin__data-grid-pager-wrap">
        <Sizes setSize={this.setSize} 
        options={this.props.options}
        open={this.state.collapsible} 
        toggleCollapsible={this.toggleCollapsible}
        value='20' />
        
        <label class="admin__control-support-text" htmlFor='pageSize'> per page</label>
        <div className="admin__data-grid-pager">
          <button className="action-previous" type="button"
            onClick={e => this.prev()} disabled={ this.state.currentPage === 1 } />

          <input className="admin__control-text" type="number" id="current-page-input" value={this.state.currentPage} />
          <label className="admin__control-support-text" htmlFor='current-page-input'>
            of {this.state.totalPages}
          </label>
          <button className="action-next" type="button" onClick={e => this.prev()} disabled={this.state.currentPage===this.state.totalPages} />
        </div>
      </div>
    );
  }


}

Paging.propTypes = {
  totalRecords:PropTypes.number.isRequired,
  options: PropTypes.array.isRequired
}



export default Paging;