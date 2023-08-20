import { isEmpty } from "lodash";
import { ultimateIcons } from "./icons";
import { getStyles } from "./get-styles";

function Save(props) {
	const {
		attributes: { icon, linkTarget, linkUrl, linkRel, svgIcon },
	} = props;
	const hasIcon = !isEmpty(icon);
	const hasSVGIcon = !isEmpty(svgIcon);

	const finalIcon = hasIcon
		? ultimateIcons
				.find((obj) => obj.type === icon?.type)
				?.icons?.find((ic) => ic.name === icon.iconName)?.icon ?? ""
		: svgIcon;

	const blockStyles = getStyles(props.attributes);

	const Tag = isEmpty(linkUrl) ? "div" : "a";
	const anchorAttributes = isEmpty(linkUrl)
		? {}
		: {
				rel: linkRel,
				href: linkUrl,
				target: linkTarget,
		  };
	return (
		<div className={props.className} style={blockStyles}>
			{hasIcon && (
				<div className="alpb_icon">
					<Tag className="alpb_icon_wrapper" {...anchorAttributes}>
						{finalIcon}
					</Tag>
				</div>
			)}

			{hasSVGIcon && !hasIcon && (
				<div className="alpb_icon">
					<Tag
						{...anchorAttributes}
						className="alpb_icon_wrapper"
						dangerouslySetInnerHTML={{ __html: finalIcon }}
					></Tag>
				</div>
			)}
		</div>
	);
}
export default Save;
