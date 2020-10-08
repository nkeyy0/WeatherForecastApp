import { connect } from "react-redux";
import Login from "./Login";


const mapStateToProps = (state) => ({
  errorLogin : state.errorLogin
});

export default connect(mapStateToProps)(Login);
