import { useDispatch, useSelector } from "react-redux"
import { setName, toggleCheckbox } from "../../store/profile/actions";
import {Form} from "../../components/Form/Form"
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const handleClick = () => {
        dispatch(toggleCheckbox)
    }

    const handleSubmit = (text) => {
        dispatch(setName(text));
    };

    return <>
    <h3>Profile page</h3>
    {showName && <span>{name}</span>}
    <input type="checkbox" checked={showName} onChange={handleClick}/> Show name
    <Form onSubmit={handleSubmit} />
    </>
}