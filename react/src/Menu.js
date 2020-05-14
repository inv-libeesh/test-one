import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";



export default class Menu1 extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
          as={Link}
          to={'/userList'}
        >
          UserList
        </Menu.Item>

      </Menu>
    )
  }
}

