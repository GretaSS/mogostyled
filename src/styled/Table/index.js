import styled from 'styled-components';

const border = ({border, borderT, borderB, captionS, borderCol, borderSpac, emptyC,   bgcolor}) => `
    ${ border ? `border: ${border}` : "" };
    ${ borderT ? `border-top: ${borderT}` : "" };
    ${ borderB ? `border-bottom: ${borderB}` : "" };
    ${ captionS ? `caption-side: ${captionS}` : "" };
    ${ borderCol ? `border-collapse: ${borderCol}` : ""};
    ${ borderSpac? `border-spacing: ${borderSpac}` : ""};
    ${ emptyC ? `empty-cells: ${emptyC}` : ""}

    ${ bgcolor ? `bgcolor: ${bgcolor}` : "" }
`;

const Table = styled.table`
    ${ border }
`;

export default Table;