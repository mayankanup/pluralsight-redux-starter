import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

//some validation
CoursesPage.propTypes = {
    courses : PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps){
    return { courses : state.courses };
}

export default connect(mapStateToProps) (CoursesPage);