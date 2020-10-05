import { connect } from "react-redux";
import Registration from "./Registration";


const mapStateToProps = (state) => ({
  registrationErrorDescription: state.registrationErrorDescription,
  registrationUserSuccess: state.registrationUserSuccess
});

export default connect(mapStateToProps)(Registration);
