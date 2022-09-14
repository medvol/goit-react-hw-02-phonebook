import styled from "styled-components";
import { color, space, typography, layout, flexbox, border, shadow } from 'styled-system';

export const Box = styled('div')(
    typography,
    space,
    color,
    layout,
    flexbox,
    border,
    shadow
)