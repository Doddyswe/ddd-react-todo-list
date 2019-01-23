import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#fff',
      padding: '10px',
      fontSize: '1.1rem',
      textTransform: 'capitalize',
      borderBottom: '1px #cacaca dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>r</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#fff',
  color: '#000',
  border: 'none',
  //padding: '10px 16px',
  //margin: '-0.2rem',
  //borderRadius: '50%',
  fontSize: '1.1rem',
  fontFamily: 'Webdings',
  fontWeight: '300',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem