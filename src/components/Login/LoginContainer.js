import { connect } from "react-redux";
import Login from "./Login";


const mapStateToProps = (state) => ({
  errorLogin : state.auth.errorLogin,
  isLogin : state.auth.isLogin,
  email: state.auth.email,
  loading: state.download.loading
});

export default connect(mapStateToProps)(Login);
