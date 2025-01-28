import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return(
        <div>
            <p>Sidebar</p>
            <button onClick={() => navigate("/NewCharacter")}>
                Add New Character
            </button>
        </div>
    )
}

export default Sidebar