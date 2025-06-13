import { BookData } from "@/types";

export default async function fetchOneBook(id: number): Promise<BookData | null> {

	const url = `https://onebite-books-server-main-ashy-one.vercel.app/book/${id}`;

	try {
		const response = await fetch(url);
		
		if(!response.ok) {
			throw new Error('Failed to fetch data');
		}

		return await response.json();
	} catch (err) {
		console.log(err);
		return null;
	}
};