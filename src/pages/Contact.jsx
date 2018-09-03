import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col
 } from 'reactstrap';
import FormBukuTamu from '../components/FormBukuTamu';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

class Contact extends Component {
  componentWillMount(){
    let currURL = this.props.history.location.pathname;
    this.props.moveUrl(currURL);
  }
  componentDidMount(){
    // console.log('route ==>', this.props.history.location.pathname)
  }
  componentDidUpdate() {
    // console.log('PROPS URL==>', this.props.urls)
  }
  render() {
    return (
      <div>
        <div className="headerWrap">
          <Navigation/>
        </div>
        <FixedButtonDaftarMobile/>
        <Container>
          <div className="marginTop"></div>
          <Row>
            <Col md="6" sm={{ order: 1 }}>
              <div className="wrapContact animated bounceInLeft">
                <h3>Hubungi kami</h3>
                <FormBukuTamu/>
              </div>
            </Col>
            <Col md="6" sm={{ order: 2 }}>
              <div className="wrapContact animated bounceInRight">
                <h3>Informasi lebih lanjut :</h3>
                <p>
                  <img style={{ width: 20, marginRight: 20 }} src={require('../assets/img/gmail.png')} alt="emailogo"/>
                  info[at]kemodijakarta.com
                </p>
                <p>
                  <img style={{ width: 20, marginRight: 20 }} src={require('../assets/img/whatsapp.png')} alt="emailogo"/>
                  0812-288-566-99
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    urls: state.urlReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moveUrl
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);