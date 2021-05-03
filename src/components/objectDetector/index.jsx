import React from "react";
import styled from "styled-components";

import "@tensorflow/tfjs-backend-cpu";

const ObjectDetectorContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-tems: center;
`;

const DetectorContainer = styled.div`
    min-width: 200px;
    height: 500px;
    border: 3px solid #ffff;
    border-radius: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const TargetImg = styled.img`
    height: 100%;
`;

const HiddenFileInput = styled.input`
    display:none;
`;

const SelectButton = styled.button`
    padding: 7px 10px;
    border: 2px solid transparant;
    background-color: #ffff;
    border=radius:5px;
    display:flex;
    align-items:center;
    justify-content: center;
    position: relative;
`;


export function ObjectDetector(props) {

}