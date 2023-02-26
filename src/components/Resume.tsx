import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import school from '../images/school.png';
import work from '../images/work.png';



function Resume() {
    return (
        <div className="mb-6 sm:m-12 rounded-2xl bg-slate-300 shadow-2xl flex flex-col justify-center content-center h-fit z-[-1]">
            <div className="flex justify-center">
                <h1 className="mb-10 mt-6 text-xl sm:text-4xl font-semibold text-noelle-blue">Resume</h1>
            </div>
            <div>
                <VerticalTimeline 
                layout="2-columns">
                    <VerticalTimelineElement
                    position="left"
                    contentStyle={{ background: '#012a48', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid #012a48'}}
                    date="2021 - present"
                    dateClassName="text-noelle-blue"
                    icon={<img className="resumeSchool m-auto mt-2 lg:mt-4" width="50px" src={school} alt="graduation cap icon" />} 
                    iconStyle={{ background: '#012a48', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">NSCC</h3>
                        <h4 className="vertical-timeline-element-subtitle">IT Web Programming</h4>
                        <p>
                            Applicable skills: web development, programming, project management, freelance
                        </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    position="right"
                    contentStyle={{ background: '#012a48', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid #012a48'}}
                    date="2020 - 2021"
                    dateClassName="text-noelle-blue"
                    icon={<img className="resumeSchool m-auto mt-2 lg:mt-4" width="50px" src={school} alt="graduation cap icon" />} 
                    iconStyle={{ background: '#012a48', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">SMU</h3>
                        <h4 className="vertical-timeline-element-subtitle">Computer Science</h4>
                        <p>
                            Applicable skills: programming, time management
                        </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    position="left"
                    contentStyle={{ background: '#012a48', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid #012a48'}}
                    date="2018 - 2021"
                    dateClassName="text-noelle-blue"
                    icon={<img className="resumeWork m-auto mt-1 lg:mt-3" width="35px" src={work} alt="work briefcase icon" />}
                    iconStyle={{ background: '#012a48', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">NSLC</h3>
                        <h4 className="vertical-timeline-element-subtitle">Warehouse Worker</h4>
                        <p>
                            Applicable skills: adaptability, attention to detail, soft-skills
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    position="right"
                    contentStyle={{ background: '#012a48', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid #012a48'}}
                    date="2018 - 2021"
                    dateClassName="text-noelle-blue"
                    icon={<img className="resumeWork m-auto mt-1 lg:mt-3" width="35px" src={work} alt="work briefcase icon" />}
                    iconStyle={{ background: '#012a48', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">Magic Pizza</h3>
                        <h4 className="vertical-timeline-element-subtitle">Line Cook + Delivery Driver</h4>
                        <p>
                            Applicable skills: adaptability, attention to detail, communication, customer service, time management
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    position="left"
                    contentStyle={{ background: '#012a48', color: '#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid #012a48'}}
                    date="Graduated 2016"
                    dateClassName="text-noelle-blue"
                    icon={<img className="resumeSchool m-auto mt-2 lg:mt-4" width="50px" src={school} alt="graduation cap icon" />} 
                    iconStyle={{ background: '#012a48', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">Avon View High School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Student</h4>
                        <p>
                            Graduated with honours
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Resume;