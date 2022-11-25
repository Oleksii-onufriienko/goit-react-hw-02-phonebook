import { Component } from "react";
import styled from 'styled-components';

const ListItem = styled.li`
    display: flex;
    align-items: center;
`;

const ButtonDelete = styled.button`
    height: 20px;
    margin-left: 10px;
`;
export class ContactList extends Component{

    render() {
        return (
            <ul>
                {this.props.listData.map((e,index) => {
                return (
                    <ListItem key={e.id}>
                        <p>{e.name}: {e.number}</p>
                        <ButtonDelete type="button" onClick={()=> this.props.deleteContact(index)}>Delete</ButtonDelete>
                    </ListItem>
                );
                })}
            </ul>
        );
    }
}