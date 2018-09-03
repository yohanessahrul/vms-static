import React, { Component } from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'
import FourthForm from './FourthForm'
// import PropTypes from 'prop-types'
// import { UserFormAction } from '../actions/UserFormAction'
// import { UserAkomadsiAction } from '../actions/UserAkomodasiAction'
import { Values } from 'redux-form-website-template'
import { Progress } from 'reactstrap'


class WizardForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({
            page: this.state.page + 1
        })
    }

    previousPage() {
        this.setState({
            page: this.state.page - 1
        })
    }

    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        return (
            <div>
                <div style={{ width: '1000px', margin: '0 auto' }}>
                    <div>
                        {page === 1 && <Progress multi>
                            <Progress animated bar value="25">1/4</Progress>
                        </Progress>}
                        {page === 2 && <Progress multi>
                            <Progress animated bar value="25">1/4</Progress>
                            <Progress animated bar value="25">2/4</Progress>
                        </Progress>}
                        {page === 3 && <Progress multi>
                            <Progress animated bar value="25">1/4</Progress>
                            <Progress animated bar value="25" >2/4</Progress>
                            <Progress animated bar value="25" >3/4</Progress>
                        </Progress>}
                        {page === 4 && <Progress multi>
                            <Progress animated bar value="25">1/4</Progress>
                            <Progress animated bar value="25" >2/4</Progress>
                            <Progress animated bar value="25" >3/4</Progress>
                            <Progress animated bar value="25" >4/4</Progress>
                        </Progress>}
                    </div>
                    <br />
                    <div>
                        {page === 1 && <FirstForm onSubmit={this.nextPage} />}
                        {page === 2 && <SecondForm previousPage={this.previousPage} onSubmit={this.nextPage} />}
                        {page === 3 && <ThirdForm previousPage={this.previousPage} onSubmit={this.nextPage} />}
                        {page === 4 && <FourthForm previousPage={this.previousPage} onSubmit={onSubmit} />}
                    </div>
                </div>
                <Values form='wizard' />
            </div>
        )
    }
}

// WizardForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     errors: PropTypes.array
// };

// const mapStateToProps = (state) => {
//     return {
//         userForm: state.userForm,
//         userAkomodasi: state.userAkomodasi
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         UserFormAction,
//         UserAkomadsiAction
//     }, dispatch)
// }

export default WizardForm