import * as React from 'react';
import style from '../css/Table.module.css'
import avatarList from '../avatares.json'
import { Avatar } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import fireIcon from '/imgs/icon-sequence.gif'

const Table = ({ data }) => {
    return (
        <div id={style.content}>
            <div id={style.area_table}>
                <table>
                    <thead>
                        <tr>
                            <th>Colocação</th>
                            <th>Usuário</th>
                            <th>Sequência de vitórias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            localStorage.getItem('nickname') === user.name ? (
                                <tr key={user.rank} id={style.row_content} className={style.sticky_row}>
                                    <td>
                                        {user.rank}°
                                        &nbsp;
                                        {user.rank < 2 ? (
                                            <EmojiEventsIcon htmlColor={'#ceb008'} fontSize='small' />
                                        ) : user.rank < 3 ? (
                                            <EmojiEventsIcon htmlColor={'#757575'} fontSize='small' />
                                        ) : user.rank < 4 ? (
                                            <EmojiEventsIcon htmlColor={'#6d432a'} fontSize='small' />
                                        ) : (
                                            ''
                                        )}
                                    </td>
                                    <td id={style.td_user}>
                                        <Avatar alt="Avatar" src={`/imgs/avatar/${avatarList[user.idAvatar]}`} />
                                        &nbsp;
                                        {user.name}
                                    </td>
                                    <td>
                                        <img src={fireIcon} alt="" width={'30px'} />
                                        &nbsp;
                                        {user.score}
                                    </td>
                                </tr>
                            ) : (
                                <tr key={user.rank} id={style.row_content}>
                                    <td>
                                        {user.rank}°
                                        &nbsp;
                                        {user.rank < 2 ? (
                                            <EmojiEventsIcon htmlColor={'#ceb008'} fontSize='small' />
                                        ) : user.rank < 3 ? (
                                            <EmojiEventsIcon htmlColor={'#757575'} fontSize='small' />
                                        ) : user.rank < 4 ? (
                                            <EmojiEventsIcon htmlColor={'#6d432a'} fontSize='small' />
                                        ) : (
                                            ''
                                        )}
                                    </td>
                                    <td id={style.td_user}>
                                        <Avatar alt="Avatar" src={`/imgs/avatar/${avatarList[user.idAvatar]}`} />
                                        &nbsp;
                                        {user.name}
                                    </td>
                                    <td>
                                        <img src={fireIcon} alt="" width={'30px'} />
                                        &nbsp;
                                        {user.score}
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
