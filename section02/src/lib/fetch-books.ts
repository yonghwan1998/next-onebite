import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
	let url = `https://onebite-books-server-main-omega-nine.vercel.app/book`;

	if(q) {
		url += `/search?q=${q}`;
	}

	try {
		const response = await fetch(url);
		
		if(!response.ok) {
			throw new Error('Failed to fetch data');
		}

		return await response.json();
	} catch (err) {
		console.log(err);
		return [];
	}
};