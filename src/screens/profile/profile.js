import { useDispatch, useSelector } from "react-redux"
import { initProfileTrack, setName, setNameFB, stopProfileTrack, toggleCheckbox } from "../../store/profile/actions";
import {Form} from "../../components/Form/Form"
import { selectName, selectShowName } from "../../store/profile/selectors";
import { logOut, userNameRef, userRef, userShowNameRef } from "../../services/firebase";
import { useEffect, useState } from "react";
import { onValue, set } from "firebase/database";

export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [showName, setShowName] = useState(false);
    //const name = useSelector(selectName);
    //const showName = useSelector(selectShowName);
    const handleClick = () => {
       dispatch(setShowName(!showName))
    }

    const handleSubmit = (text) => {
       dispatch(setNameFB(text))
    };

    useEffect(()=>{
       dispatch(initProfileTrack());

      return () => {
           dispatch(stopProfileTrack());
        };
    }, []);

    return <>
    <h3>Profile page</h3>
    <button onClick={logOut}>LOGOUT</button>
    {showName && <span>{name}</span>}
    <input type="checkbox" checked={showName} onChange={handleClick}/> Show name
    <Form onSubmit={handleSubmit} />
    </>
}