import styled from "styled-components";

export const LabelFilter = styled.label`
    display: flex;
    flex-direction: column;
    color:${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    margin-top:${p => p.theme.space[4]}px;    
    margin-bottom:${p => p.theme.space[4]}px;
`

export const FilterInput = styled.input`
    display: inline-flex;
    width: ${p => p.theme.space[7]}px;
    color: ${p => p.theme.colors.muted};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    margin-top:${p => p.theme.space[2]}px;  
`