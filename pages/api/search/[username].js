export default function handler(req, res) {
	const {
		query: { username },
		method,
	} = req;

	console.log("ska userName", username);

	switch (method) {
		case "GET":

			res.status(200).json({  name: `User` });
			break;
		default:
			res.setHeader("Allow", ["GET"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
