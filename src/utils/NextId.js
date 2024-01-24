export const get_next_id = ({ prev_data_list }) => {
	return (
		prev_data_list.reduce(
			(prev_vl, cur_val) =>
				cur_val?.id > prev_vl ? cur_val.id : prev_vl,
			0
		) + 1
	);
};
