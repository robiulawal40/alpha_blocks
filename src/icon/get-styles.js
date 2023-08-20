/**
 * WordPress Dependencies
 */
import { isUndefined, trim, isEmpty, omitBy, isNumber } from "lodash";
/**
 *
 * @param {Array} attributes
 *
 * @return {object} - Block styles
 */

export function getStyles(attributes) {
	const rotation = isNumber(attributes?.iconRotation)
		? `rotate(${attributes.iconRotation}deg)`
		: "";

	let styles = {
		"--alpb-icon-rotation": rotation,
		"--alpb-icon-size": attributes?.size,
		"--alpb-icon-color": attributes?.iconColor,
		"--alpb-icon-bg-color": !isEmpty(attributes?.iconBackground)
			? attributes.iconBackground
			: attributes?.iconGradientBackground,
		"--alpb-icon-hover-color": attributes?.iconHoverColor,
		"--alpb-icon-bg-hover-color": !isEmpty(attributes?.iconHoverBackground)
			? attributes?.iconHoverBackground
			: attributes?.iconHoverGradientBackground,
		"--alpb-icon-justification": attributes?.justification,
	};

	return omitBy(styles, (value) => {
		return (
			isUndefined(value) ||
			value === false ||
			trim(value) === "" ||
			trim(value) === "undefined undefined undefined" ||
			isEmpty(value)
		);
	});
}
