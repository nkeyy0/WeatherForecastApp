import { connect } from "react-redux";
import Navigator from "./Navigator";


const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  user: state.user
});

export default connect(mapStateToProps)(Navigator);
