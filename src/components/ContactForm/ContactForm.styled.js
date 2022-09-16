import styled from "styled-components";

export const LabelInput = styled.label`
    color:${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};    
    margin-bottom:${p => p.theme.space[2]}px;
`

export const FormInput = styled.input`
    display: inline-flex;
    width: ${p => p.theme.space[8]}px;
    color: ${p => p.theme.colors.muted};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};    
    margin-bottom:${p => p.theme.space[4]}px;   
`

export const SubmitButton = styled.button`
    display: inline-flex;
    align-items:center;
    justify-content:center;
    width: ${p => p.theme.space[7]}px;
    color:  ${p => p.theme.colors.white};
    padding-top:${p => p.theme.space[2]}px; 
    padding-bottom:${p => p.theme.space[2]}px;      
    background-color: ${p=> p.theme.colors.primary};
    border:none;
    border-radius:${p=>p.theme.radii.normal};
    transition: background-color 250ms ease-in-out; 
    
    :hover{
        background-color: ${p=> p.theme.colors.accent};
        
}
`


