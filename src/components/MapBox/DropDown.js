import React from 'react';

export default function DropDown (props) {

    return (
        <div>
        <select onChange={(evt) => props.DropDownhandler(evt,props.changeViewport)}>
        <option value="US" selected>United States</option>
        <option value="AR">Argentina</option>
        <option value="AW">Aruba</option>
        <option value="AU">Australia</option>
        <option value="AT">Austria</option>
        <option value="BE">Belgium</option>
        <option value="BA">Bosnia and Herzegovina</option>
        <option value="BR">Brazil</option>
        <option value="BG">Bulgaria</option>
        <option value="CA">Canada</option>
        <option value="CL">Chile</option>
        <option value="HR">Croatia</option>
        <option value="CY">Cyprus</option>
        <option value="DK">Denmark</option>
        <option value="EE">Estonia</option>
        <option value="FI">Finland</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        <option value="GR">Greece</option>
        <option value="HU">Hungary</option>
        <option value="IS">Iceland</option>
        <option value="IN">India</option>
        <option value="IE">Ireland</option>
        <option value="IL">Israel</option>
        <option value="IT">Italy</option>
        <option value="JP">Japan</option>
        <option value="KZ">Kazakhstan</option>
        <option value="KW">Kuwait</option>
        <option value="LV">Latvia</option>
        <option value="LB">Lebanon</option>
        <option value="LT">Lithuania</option>
        <option value="LU">Luxembourg</option>
        <option value="MT">Malta</option>
        <option value="MX">Mexico</option>
        <option value="NL">Netherlands</option>
        <option value="NZ">New Zealand</option>
        <option value="NO">Norway</option>
        <option value="PL">Poland</option>
        <option value="RO">Romania</option>
        <option value="RU">Russia</option>
        <option value="SA">Saudi Arabia</option>
        <option value="SK">Slovakia</option>
        <option value="SI">Slovenia</option>
        <option value="ES">Spain</option>
        <option value="CH">Switzerland</option>
        <option value="SE">Sweden</option>
        <option value="TW">Taiwan</option>
        <option value="TH">Thailand</option>
        <option value="TR">Turkey</option>
        <option value="UA">Ukraine</option>
        <option value="AE">United Arab Emirates</option>
        <option value="GB">United Kingdom</option>
        <option value="US">United States</option>
        <option value="UY">Uraguay</option>
        </select>
        <br />
        </div>
    )
}
