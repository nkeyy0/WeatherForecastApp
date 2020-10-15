import { connect } from "react-redux";
import Login from "./Login";


const mapStateToProps = (state) => ({
  errorLogin : state.errorLogin,
  isLogin : state.isLogin,
  email: state.email,
  loading: state.loading
});

export default connect(mapStateToProps)(Login);
