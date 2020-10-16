import { connect } from "react-redux";
import Navigator from "./Navigator";


const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  user: state.auth.user
});

export default connect(mapStateToProps)(Navigator);
