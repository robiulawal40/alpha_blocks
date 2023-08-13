import icons from '../../options/icons/icons';
const IconPicker = () => {
	return (
		<div className="alpb-icon-picker">
			<div className="alpb-icon-list">
				{
					Object.keys(icons).map((icon,index)=>{
						return(
							<div className='alpb-icon-item' key={index}>
								{icons[icon]}
							</div>
						)
					})
				}
			</div>
		</div>
	)
};

export default IconPicker;
