import React from 'react';
import Card from '@mui/material/Card';
import {connect} from "react-redux";

const Count = ({contacts}) => {
    function getCountsSubjectWise(contacts) {
        let subjects = [...new Set(contacts.map((contact) => contact.subject))];
        let subjectsDict = Object.assign({}, ...subjects.map(subject => {
            return {[subject]: 0}
        }))
        contacts.forEach((contact) => {
            subjectsDict[contact.subject] += 1
        })
        return subjectsDict
    }

    function getCountsCityWise(contacts) {
        let cities = [...new Set(contacts.map((contact) => contact.city))];
        let citiesDict = Object.assign({}, ...cities.map(city => {
            return {[city]: 0}
        }))
        contacts.forEach((contact) => {
            citiesDict[contact.city] += 1
        })
        return citiesDict
    }

    let subjectsDict = getCountsSubjectWise(contacts)
    let citiesDict = getCountsCityWise(contacts)
    return (
        <div className='crds'>
            {
                Object.keys(subjectsDict).map((subject) => {
                    return (
                        <Card variant="outlined" className="crd" key={subject}>
                            <div className="text">{subject}</div>
                            <div className="text">{subjectsDict[subject]}</div>
                        </Card>
                    )
                })
            }
            {
                Object.keys(citiesDict).map((city) => {
                    return (
                        <Card variant="outlined" className="crd" key={city}>
                            <div className="text">{city}</div>
                            <div className="text">{citiesDict[city]}</div>
                        </Card>
                    )
                })
            }
        </div>

    )
}
const mapStateToProps = (state) => ({
    contacts: state,
});
export default connect(mapStateToProps)(Count)
