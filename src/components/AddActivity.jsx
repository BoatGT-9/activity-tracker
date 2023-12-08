import { useState } from "react";
import { useDispatch} from "react-redux";

const AddActivity = () => {
    const dispatch = useDispatch();
const [data, setData] = useState({
  name: "",
  duration: "",
});

const handelChange = (e) => {
  e.persist();
  setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
const addActivity = () => {
    dispatch({
        type: "CREATE_ACTIVITY",
        payload: {
          name: data.name,
          duration: data.duration,
        },
      });
}
  return (
    <div className="add">
      <div className="input-section">
        <p>activity Name :</p>
        <input type="text"
          className="input"
          name="name"
          placeholder="Activity name ..."
          onChange={(e)=>handelChange(e)} ></input>
      </div>
      <div className="input-section">
        <p>activity Duration :</p>
        <input type="text"
          className="input"
          name="name"
          placeholder="Activity duration ..."
          onChange={(e)=>handelChange(e)}></input>
      </div>
      <button style={{margin:"15px"}} onClick={addActivity}> Add Activity</button>
    </div>
  );
};

export default AddActivity;
