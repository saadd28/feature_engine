import { getcodedetails } from '../../api/api';
import { Cloud, Logo } from '../../Assets';
import './Prototype.css'

import React, { useState } from 'react';
import { Fade, Zoom } from "react-reveal";

const Prototype = () => {
    const options = [
        { value: 'drg', label: 'DRG' },
        { value: 'cpt', label: 'CPT' }
    ]

    // const response = {
    //     "HCPCS": "33120",
    //     "DESCRIPTION": "Removal of heart lesion With RAAST, your Mobile Number is your Bank Account Number!",
    //     "STATUS CODE": "A",
    //     "Outpatient RVU": 61.46,
    //     "Inpatient RVU": 61.46,
    //     "IN_OUT_RVU": 122.92,
    //     "GLOB_DAYS": "90",
    //     "Coding System": "CPT"
    // }
    let [selectedOption, setSelectedOption] = useState(options[0].value);
    let [code, setCode] = useState("");
    let [response, setResponse] = useState();
    let [isloading, setisLoading] = useState(false);


    const handleSelect = (event) => {
        setSelectedOption((selectedOption = event.target.value));
        // console.log("Selected option:", selectedOption);
    };

    const handleInputChange = (event) => {
        setCode((code = event.target.value));
        // console.log("Code:", code);
    };

    const GetDetails = (selectedOption, code) => {
        console.log("selectedOption", selectedOption);
        console.log("code", code);
        setisLoading(isloading = true)
        getcodedetails(selectedOption, code)
            .then((res) => {
                console.log("Response", res.data);
                setisLoading(isloading = false)
                setResponse(response = res.data);
            })
            .catch((err) => {
                console.log("Error fetching Optimized Price:", err);
            });
    };
    console.log("Selected option:", selectedOption);

    return (
        <>
            <div className="prototype_main">
                <Fade top>
                    <div className="prototype_title_container">
                        <div className="prototype_title">
                            Feature Engine
                        </div>
                        {/* <img src={Logo} alt="" className='prototype_logo_img'/> */}
                    </div>
                </Fade>

                <Zoom>

                    <div className="prototype_header_container">
                        <div className="prototype_prompt">
                            Enter Data
                        </div>
                        <div className="dropdown">
                            <select
                                //   value={selectedOption}
                                onChange={(e) => {
                                    handleSelect(e);
                                }}
                            >
                                {options.map((option, index) => (
                                    <option key={index} value={option.value} >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <input type="text" placeholder='Enter Code' className='prototype_header_input' onChange={(e) => {
                            handleInputChange(e);
                        }} />

                        <button className='prototype_query_btn' onClick={(e) => {
                            e.preventDefault()
                            GetDetails(selectedOption, code)
                        }}>Get Details</button>
                    </div>
                </Zoom>



                {
                    isloading ? (
                        <Fade top>
                            <div className="prototype_content_container">

                                <div className="prototype_content_item">

                                    <div>Loading... </div>

                                </div>

                            </div>
                        </Fade>
                    )
                        :
                        response ?
                            <Fade top>
                                < div className="prototype_content_container">
                                    {Object.entries(response).map(([key, value]) => (
                                        <Fade left>
                                            <div key={key} className="prototype_content_item">
                                                <strong>{key}: </strong>
                                                {value.toString()}
                                            </div>
                                        </Fade>
                                    ))}
                                </div>
                            </Fade>
                            :
                            null
                }


            </div >
        </>
    );
}

export default Prototype;
