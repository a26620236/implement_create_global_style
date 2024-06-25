// 1. pass target component
// 2. evaluate tagged template literal
// 3. generate className
// 4. preprocess style
// 5. inject style to html head

import propTypes from 'prop-types'
// import * as stylis from 'stylis';

function createStyledComponent({
    component: WrappedComponent,
    evaluateStyle,
}) {
    function StyledComponent(props) {
        const evaluatedStyle = evaluateStyle(props);
        
        // Todo: css preprocessor, use stylis

        return (
            <WrappedComponent
                evaluatedStyle={evaluatedStyle}
                className={props.label}
                {...props}
            />
        );
    }

    StyledComponent.propTypes = {
      label: propTypes.string,
    };

    return StyledComponent;
}

export default function styled(WrappedComponent) {
    return (
        strings,
        ...expressions
    ) => {
        const evaluateStyle = (props) => {
            if (expressions?.length > 0) {
                return expressions.reduce((result, expression, index) => {
                    const isFun = typeof expression === 'function';
                    const vars = isFun ? expression(props) : expression;

                    return result + vars + strings[index + 1];
                }, strings[0]);
            }
            return strings;
        };

        return createStyledComponent({
            component: WrappedComponent,
            evaluateStyle,
        });
    };
}
