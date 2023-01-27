export const getDataFromRow = (row: any, index?: number) => {
	if (index === undefined) {
		return row._cells;
	}
	return row._cells[`${index}`].data;
};
