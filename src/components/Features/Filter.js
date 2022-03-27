import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Filter = ({ rowsObject, contacts }) => {
    const [selectFilter, setSelectFilter] = useState({ "city": "Select City", "subject": "Select Subject" })
    const onChangeCity = value => {
        setSelectFilter({ "city": value, "subject": selectFilter.subject })
        if (value == "Select City") {
            if (selectFilter.subject !== "Select Subject")
                rowsObject.setRows(contacts.filter((obj) => obj.subject === selectFilter.subject))
            else
                rowsObject.setRows(contacts)
        } else {
            let filteredValues = contacts.filter((obj) => {
                if (selectFilter.subject !== "Select Subject")
                    return obj.city === value && obj.subject === selectFilter.subject
                else
                    return obj.city === value
            })
            rowsObject.setRows(filteredValues)
        }
    }

    const onChangeSubject = value => {
        setSelectFilter({ "city": selectFilter.city, "subject": value })
        if (value == "Select Subject") {
            if (selectFilter.city !== "Select City")
                rowsObject.setRows(contacts.filter((obj) => obj.city === selectFilter.city))
            else
                rowsObject.setRows(contacts)
        } else {
            let filteredValues = contacts.filter((obj) => {
                if (selectFilter.city !== "Select City")
                    return obj.city === selectFilter.city && obj.subject === value
                else
                    return obj.subject === value
            })
            rowsObject.setRows(filteredValues)
        }
    }

    return (
        <div className="search-box ms-2 mb-2 d-inline-block">
            <div className="position-relative">
                <select
                    className="form-select form-select-sm selector"
                    value={selectFilter.city}
                    onChange={e => {
                        onChangeCity(e.target.value)

                    }}
                >
                    <option value="Select City">Select City</option>
                    <option value="Allahabad">Allahabad</option>
                    <option value="Kanpur">Kanpur</option>
                    <option value="Lucknow">Lucknow</option>
                </select>
                <select
                    className="form-select form-select-sm selector"
                    value={selectFilter.subject}
                    onChange={e => {
                        onChangeSubject(e.target.value)

                    }}
                >
                    <option value="Select Subject">Select Subject</option>
                    <option value="Maths">Maths</option>
                    <option value="Physics">Physics</option>
                    <option value="Bio">Bio</option>
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    contacts: state,
});
export default connect(mapStateToProps)(Filter)