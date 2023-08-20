/**
 * WordPress Dependencies
 */
import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { map, isEmpty, debounce } from "lodash";
import { useState, useEffect } from "@wordpress/element";
/**
 * Custom Imports
 */
import { ultimateIcons } from "../../icons";

const debouncedSetValue = debounce((val, setVal) => {
	setVal(val);
}, 500);
function Content(props) {
	const [icons, setIcons] = useState([]);
	const [debouncedSearch, setDebouncedSearch] = useState("");

	const { value, search, onSelect, subCategoryFilter, mainCategoryFilter } =
		props;

	const mergeIcons = (filteredIcons) => {
		let finalIcons = [];
		for (let i = 0; i < filteredIcons.length; i++) {
			finalIcons.push(...filteredIcons[i]);
		}
		return finalIcons;
	};
	useEffect(() => {
		const iconObj = ultimateIcons.find(
			(obj) => obj.type === mainCategoryFilter
		);
		if (search.trim() === "") {
			const preparedIcons = iconObj?.icons.filter((icon) => {
				return icon?.categories?.includes(subCategoryFilter);
			});
			if (subCategoryFilter.includes("all-")) {
				setIcons(iconObj.icons);
			} else {
				setIcons(preparedIcons);
			}
		} else {
			const preparedIcons = ultimateIcons.map((iconPack) => {
				const iconPackIcons = iconPack?.icons.filter((icon) => {
					return icon?.title
						.toLocaleLowerCase()
						.trim()
						?.includes(search.toLocaleLowerCase().trim());
				});
				return iconPackIcons;
			});
			setIcons(mergeIcons(preparedIcons));
		}
	}, [subCategoryFilter, mainCategoryFilter, debouncedSearch]);
	useEffect(() => {
		debouncedSetValue(search, setDebouncedSearch);
	}, [search]);

	const isNoResults = isEmpty(icons);

	return (
		<div className="alpb_icon_library_content_wrapper">
			<div
				key={debouncedSearch}
				className={classnames("alpb_icon_library_content", {
					"no-results": isNoResults,
				})}
			>
				{map(icons, (icon) => {
					return (
						<Button
							key={icon?.name}
							className={`alpb_icon_library_item`}
							onClick={() =>
								onSelect({ iconName: icon.name, type: mainCategoryFilter })
							}
							isPressed={icon?.name === value}
						>
							<span className="alpb_icon_list_item">{icon.icon}</span>
							<span className="alpb_list_item_title">
								{icon?.title ?? icon?.name}
							</span>
						</Button>
					);
				})}
				{isNoResults && <p>{__("No icons found.", "alpb")}</p>}
			</div>
		</div>
	);
}

export default Content;
