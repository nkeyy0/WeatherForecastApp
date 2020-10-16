import { connect } from "react-redux";
import Registration from "./Registration";


const mapStateToProps = (state) => ({
  registrationErrorDescription: state.registration.registrationErrorDescription,
  registrationUserSuccess: state.registration.registrationUserSuccess
});

export default connect(mapStateToProps)(Registration);
