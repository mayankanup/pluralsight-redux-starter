import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: ""}
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course : course});
    }

    onClickSave() {
        this.props.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" onClick={this.onClickSave} value="Save"/>
            </div>
        );
    }
}

//some validation
CoursesPage.propTypes = {
    courses : PropTypes.array.isRequired,
    createCourse : PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps){
    return { courses : state.courses };
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse : course => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);