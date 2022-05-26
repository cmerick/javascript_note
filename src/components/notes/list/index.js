
import { Button, Column, Tag, Title, List } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment';

function ListNotes(props) {
    return (
        <>
            <Column.Group breakpoint="mobile" className="info-add-section">
                <Column size={6} align="left">
                    <Title size={6}>
                        {props.notes.length} Notes
                    </Title>
                </Column>
                <Column size={6} offset={-1}  align="right">
                    <Button state="active" outlined size="small" onClick={() => props.createNote()}>
                        Notes +
                    </Button>
                </Column>
            </Column.Group>
            <List className="notes-list" align="left">
                {props.notes.map((item, key) =>
                    <List.Item className="item" key={key} onClick={() => props.selectNote(item._id)} active={item == props.current_note}>
                        <Button className="button-note">
                            <Title size={6} align="left">
                                {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
                            </Title>
                            <Title size={6} subtitle spaced={false} align="left">
                                {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
                            </Title>

                            <Column.Group breakpoint="mobile card-base">
                                <Column size={10} align="left">
                                    <Tag color="dark">
                                        {Moment(item.created_at).format('DD/MM')}
                                    </Tag>
                                </Column>
                                <Column size={2} align="right">
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        onClick={() => props.deleteNote(item)}
                                        color="grey"
                                        className="trash"
                                    />
                                </Column>
                            </Column.Group>
                        </Button>
                    </List.Item>
                )}
            </List>
        </>
    )
}

export default ListNotes;