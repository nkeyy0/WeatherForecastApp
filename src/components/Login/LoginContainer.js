import { connect } from "react-redux";
import Login from "./Login";


const mapStateToProps = (state) => ({
  errorLogin : state.errorLogin,
  isLogin : state.isLogin
});

export default connect(mapStateToProps)(Login);
