import React from 'react';


export default function DropDown (props) {
    console.log("DropDown props.DropDownhandler: " + props.DropDownhandler);
    return (
        <div>
        <select onChange={(evt) => props.DropDownhandler(evt,props.changeViewport)}>
        <option value="DE" selected>Germany</option>
        <option value="FR">France</option>
        <option value="AT">France</option>
        <option value="CH">Switzerland</option>
        <option value="LV">France</option>
        <option value="PL">France</option>
        <option value="CY">France</option>
        <option value="TR">France</option>
        <option value="NZ">France</option>
        <option value="BG">France</option>
        <option value="AE">France</option>
        <option value="HR">France</option>
        <option value="GB">France</option>
        <option value="US">United States</option>
        <option value="SA">France</option>
        <option value="UA">France</option>
        <option value="MT">France</option>
        <option value="BA">France</option>
        <option value="AW">France</option>
        <option value="IN">France</option>
        <option value="LB">France</option>
        <option value="CA">Canada</option>
        <option value="NL">France</option>
        <option value="KW">Kuwait</option>
        <option value="ES">France</option>
        <option value="IN">France</option>
        <option value="SK">France</option>
        <option value="KZ">Kazakstan</option>
        <option value="SI">France</option>
        <option value="EE">Estonia</option>
        <option value="HU">Hungary</option>
        <option value="AU">Australia</option>
        <option value="FI">Finland</option>
        <option value="IS">Iceland</option>
        <option value="NO">Norway</option>
        <option value="RO">Romania</option>
        <option value="RU">Russia</option>
        <option value="IE">Ireland</option>
        <option value="IT">Italy</option>
        <option value="TH">Thailand</option>
        <option value="DK">Denmark</option>
        <option value="IL">Israel</option>
        <option value="AR">Argentina</option>
        <option value="BR">Brazil</option>
        <option value="GR">Greece</option>
        <option value="TW">Taiwan</option>
        <option value="BE">Belgium</option>
        <option value="MX">Mexico</option>
        <option value="CL">Chile</option>
        <option value="SE">Sweden</option>
        <option value="LU">Luxembourg</option>
        <option value="JP">Japan</option>
        <option value="LT">Lithuania</option>
        <option value="UY">Uraguay</option>
        </select>
        <br />
        </div>
    )
}
