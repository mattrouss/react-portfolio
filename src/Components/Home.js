import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeData: {},
            projectData: {}
        };
    }

    getProjectData() {
        $.ajax({
            url: './projectData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ projectData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    getResumeData() {
        $.ajax({
            url: './resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
        this.getProjectData();
    }


    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main} />
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Portfolio data={this.state.projectData} />
                <Contact data={this.state.resumeData.main} />
                <Footer data={this.state.resumeData.main} />
            </div>
        );
    }
}

export default Home;
