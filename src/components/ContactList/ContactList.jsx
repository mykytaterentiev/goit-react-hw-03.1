/* eslint-disable react/prop-types */
import css from './ContactList.module.css'
import Contact from '../Contact/Contact'


export default function ContactList ({items, onDelete}) {

    return (
        <>
            <ul className={css.list}>
                {items.map((item) => {
                    return (
                        <li key={item.id} className={css.contactItem}>
                            <Contact id={item.id} name={item.name} phone={item.number} onDelete={onDelete}/>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}