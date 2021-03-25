import React, { useState } from 'react';
import styled from 'styled-components';

import { useLanguage } from 'containers/LanguageProvider';

import Masonry from 'components/Masonry';
import Accordion from 'components/Accordion';
import CharCard, { CharAccordionDetail } from 'components/CharCard';

const StyledAccordion = styled(Accordion)`
    && {
        && {
            margin-bottom: 1rem;
        }
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: .25rem;
        box-shadow: 0 0 .15em lightgray;
        > .MuiAccordionSummary-root {
            padding: 0;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom: 0px solid ${props => props.theme.colors.border};
        }
        > .MuiAccordionSummary-root.Mui-expanded {
            border-bottom: 1px solid ${props => props.theme.colors.border};
        }
        .MuiAccordionSummary-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            margin: 0;
        }
        .MuiAccordionDetails-root {
            margin: 0;
            padding: 0;
        }
    }
`
const CharAccordion = ({
    title,
    content
}) => {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <StyledAccordion
            expanded={isExpanded}
            onChange={() => setExpanded(!isExpanded)}
            title={title}
            content={content}
        />
    )
}

const CharTagMasnory = () => {
    const { charString } = useLanguage()

    const breakpointColumnsConfig = {
        default: 6,
        1360: 5,
        1200: 4,
        992: 3,
        600: 2
    }

    return (
        <Masonry
            breakpointCols={breakpointColumnsConfig}
        >
            {Object.keys(charString.name).map((key, idx) => (
                key !== 'nr' &&
                <CharAccordion
                    title={<CharCard id={key} />}
                    content={<CharAccordionDetail id={key} />}
                    key={idx}
                />
            ))}
        </Masonry>
    )
}

export default CharTagMasnory