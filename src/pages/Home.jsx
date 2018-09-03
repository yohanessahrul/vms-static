import React, { Component } from 'react';
import ThumbnailLayanan from '../components/ThumbnailLayanan';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

import { Container, Row, Col, Button } from 'reactstrap';

class Home extends Component {
  constructor () {
    super()
    this.state = {
      showForm : false
    }
  }
  componentWillMount(){
    let currURL = this.props.history.location.pathname;
    this.props.moveUrl(currURL); //dispatch
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
        <div>
            <div className="section home" id="home">
              <div className="gradientShadow"></div>
              <div className="intro">
                <h1 className="animated bounceInDown">Percayakan perjalanan medis anda pada kami</h1>
                <p className="animated bounceInLeft">Kemodijakarta.com adalah sebuah layanan perjalanan medis yang di lahirkan untuk mendampingi pasien kanker dari luar Jakarta ketika berkunjung ke Pusat Layanan Kanker di Jakarta dan sekitarnya</p>
                <ThumbnailLayanan/>
              </div>
              
              <img src={require('../assets/img/home-image.png')} alt="slideImage"/>
            </div>
        </div>
        <div className="kalkulatorIntro">
          <Container>
            <Row style={{ padding: '50px 0px' }}>
              <Col lg="6">
                <div className="animated " style={{ width: '100%', height: '300px', background: 'yellow', overflow: 'hidden', borderRadius: '20px' }}>
                  <img style={{ width: '100%' }} src={require('../assets/img/calc-medic5.jpg')} alt="kalkulatorImageIntro"/>
                </div>
                <div className="clear"></div>
              </Col>
              <Col lg="6">
                <h1>Hitung perjalanan medis anda</h1>
                <p>Di datamedis anda dapat menghitung perjalanan medis anda, sehingga anda dapat terfokus pada pengobatan anda di Jakarta.</p>
                <Button>
                  Kalkulator Medis
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('STATEEEEEEEEEEEEEE',state)
  return {
    urls: state.urlReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moveUrl
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);