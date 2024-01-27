export const random_colors = {
	a: "#001f3f",
	b: "#003366",
	c: "#8B0000",
	d: "#4B0082",
	e: "#2E8B57",
	f: "#800000",
	g: "#000080",
	h: "#8B4513",
	i: "#800080",
	j: "#008080",
	k: "#FF4500",
	l: "#008000",
	m: "#8A2BE2",
	n: "#FFD700",
	o: "#0000CD",
	p: "#8B008B",
	q: "#FF6347",
	r: "#228B22",
	s: "#4B0082",
	t: "#4682B4",
	u: "#8B4513",
	v: "#800080",
	w: "#008080",
	x: "#FF4500",
	y: "#008000",
	z: "#8A2BE2",
};

//
export function selectColorForTag(tag) {
	const lowercaseTitle = tag.toLowerCase();

	const charCount = {};

	// Count the occurrences of each character in the title
	for (let char of lowercaseTitle) {
		if (charCount[char]) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}

	let maxChar = "";
	let maxCount = 0;

	for (let char in charCount) {
		if (charCount[char] > maxCount) {
			maxChar = char;
			maxCount = charCount[char];
		}
	}

	return { backgroundColor: `${random_colors[maxChar]}` };
}

