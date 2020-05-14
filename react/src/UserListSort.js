import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { userlist } from './users';

export default class UserListSort extends Component {
    state = {
      column: null,
      data: userlist,
      direction: null,
    }
  
    handleSort = (clickedColumn) => () => {
      const { column, data, direction } = this.state
  
      if (column !== clickedColumn) {
        this.setState({
          column: clickedColumn,
          data: _.sortBy(data, [clickedColumn]),
          direction: 'ascending',
        })
  
        return
      }
  
      this.setState({
        data: data.reverse(),
        direction: direction === 'ascending' ? 'descending' : 'ascending',
      })
    }
  
    render() {
      const { column, data, direction } = this.state
  
      return (
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'username' ? direction : null}
                onClick={this.handleSort('username')}
              >
                Username
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'email' ? direction : null}
                onClick={this.handleSort('email')}
              >
                email
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'age' ? direction : null}
                onClick={this.handleSort('age')}
              >
                Age
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ age, email, username }) => (
              <Table.Row key={username}>
                <Table.Cell>{username}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )
    }
  }