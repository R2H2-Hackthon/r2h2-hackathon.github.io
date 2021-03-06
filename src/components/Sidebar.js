import React from 'react';
import {Link} from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

import PanelSidebar from "./PanelSidebar";

const sidebar = {
    filho: [
        {link:"/", label:"Home", icon: <InboxIcon />},
        {link:"profile", label:"Perfil", icon: <DraftsIcon />},
        {link:"missoes", label:"Missões", icon: <StarIcon />},
        {link:"ranking", label:"Ranking", icon: <DeleteIcon />},
        {link:"saldo", label:"Saldo", icon: <MailIcon />},
        {link:"sair", label:"Sair", icon: <InboxIcon />},
    ],
    pai: [
        {link:"/", label:"Home", icon: <InboxIcon />},
        {link:"profile", label:"Perfil", icon: <DraftsIcon />},
        {link:"dependentes", label:"Dependentes", icon: <SendIcon />},
        {link:"saldo", label:"Saldo", icon: <MailIcon />},
        {link:"recarga", label:"Recarga", icon: <ReportIcon />},
        {link:"sair", label:"Sair", icon: <InboxIcon />},
    ],
}

const Sidebar = (props) => {
    const papel = props.user.papel === "pai" ? "pai" : "filho"
    return (
        <Drawer
            open={props.openMenu}
            onRequestClose={props.handleOpenMenu}
            onClick={props.handleOpenMenu} >

            <PanelSidebar user={props.user} />

            <List disablePadding>
                {sidebar[papel].map(menu => {
                    return (
                        <Link to={menu.link} key={menu.label}>
                            <ListItem button>
                                <ListItemIcon>
                                  {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItem>
                        </Link>
                    )
                })}
            </List>
        </Drawer>
    );
};

export default Sidebar;
